import './OptionPicture.scss'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { StoreType } from '~/stores'
import { productAction } from '~/stores/slices/product.slice'
import { Picture } from '~/utils/Interfaces/Product'
import Spinner from '~/utils/Spinner'
import Loading from '~/utils/loadings/Loading'

export default function Picture({ optionId, productId, setOptionId }: { optionId: string | null, productId: string | null, setOptionId: any }) {

    const dispatch = useDispatch()
    const productStore = useSelector((store: StoreType) => {
        return store.productStore
    })
    const [pictures, setPictures] = useState<Picture[]>([])

    const [load, setLoad] = useState(false);


    useEffect(() => {
        if (productStore.data) {
            for (let i in productStore.data) {
                if (productStore.data[i].id == productId) {
                    for (let j in productStore.data[i].options) {
                        if (productStore.data[i].options[j].id == optionId) {
                            setPictures(productStore.data[i].options[j].pictures)
                        }
                    }
                }
            }
        }
    }, [optionId, productStore.data])

    useEffect(() => {
        console.log("setOptionId", setOptionId);

    }, [])
    return (
        <>
            <div className='modal-picture' >
                <div className='modal-picture-content'>

                    {/* <button onClick={() => {
                        setOptionId(null)
                    }} style={{ position: "absolute", right: 0, top: 0 }}>X</button> */}

                    {/* <button
                        type="button"
                        className=" btn btn-dark"
                        data-bs-dismiss="modal"
                        style={{ position: 'absolute', top: '10px', right: '10px' }}
                        onClick={() => {
                            setOptionId(null)
                        }}
                    >
                        Close
                    </button> */}

                    <div style={{ marginTop: '1.5em' }}>
                        <input onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {

                            if (load) return;

                            if (e.target.files?.length != 0) {
                                let formData = new FormData();
                                for (let files of e.target.files!) {
                                    formData.append("pictures", files)
                                }

                                setLoad(true);

                                await axios.post(`http://localhost:3000/api/v1/option-pictures/${optionId}`, formData, {
                                    headers: {
                                        "Content-Type": "multipart/form-data"
                                    }
                                })
                                    .then(res => {
                                        console.log("api picture", res.data.data);

                                        dispatch(productAction.insertPictureOptionProduct({
                                            productId,
                                            optionId,
                                            pictures: res.data.data
                                        }))
                                    })
                                    .catch(err => {
                                        console.log("err", err);
                                    })

                                setLoad(false)

                            }


                        }} type="file" multiple placeholder='Thêm Ảnh' />
                    </div>
                    <ul className='render-picture'>
                        <div>
                            {
                                load ?? <Loading />
                            }
                            <span className={`${load && 'active'} btn_submit`}>
                                <div className='btn_loading'>
                                    <Spinner />
                                </div>
                            </span>
                        </div>
                        {
                            pictures.map((picture, index: number) => (
                                <li key={picture.id} style={{ marginTop: '3em' }}>
                                    <img src={picture.icon} style={{ width: "150px", height: "150px", border: '1px solid #ccc', margin: '0px 10px' }} />
                                </li>
                            ))
                        }
                    </ul>

                    <div style={{ position: 'absolute', bottom: '5%', left: '45%' }}>
                        <a href="/admin/products">
                            <button type='button' className='btn btn-outline-dark'>
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div >
        </>
    )
}
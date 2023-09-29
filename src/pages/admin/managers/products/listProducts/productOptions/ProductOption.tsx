import { useEffect, useState } from 'react'
import './ProductOption.scss'
import { useDispatch, useSelector } from 'react-redux'
import { StoreType } from '~/stores'
import { Option } from '~/utils/Interfaces/Product'
import axios from 'axios'
import { productAction } from '~/stores/slices/product.slice'
import OptionPicture from '../optionPictures/OptionPicture'
import { Link } from 'react-router-dom'

export default function ProductOption({ productId, setProductId }: {
    productId: string | null,
    setProductId: any
}) {
    const [optionData, setOptionData] = useState<Option[]>([])

    const productStore = useSelector((store: StoreType) => {
        return store.productStore
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (productId && productStore.data) {
            for (let i in productStore.data) {
                if (productStore.data[i].id == productId) {
                    setOptionData(productStore.data[i].options)
                }
            }
        }
    }, [productId, productStore.data])

    const [optionId, setOptionId] = useState<null | string>(null)

    return (
        <div>
            <>
                <a data-bs-toggle="modal" data-bs-target="#myModal">Option</a>
                <>
                    {/* The Modal */}
                    <div className="modal" id="myModal">
                        <div className="modal-dialog modal-fullscreen">
                            <div className="modal-content" style={{ width: '1440px' }}>
                                {/* Content */}
                                <h1 style={{ textAlign: "center" }}>PRODUCT OPTION</h1>

                                <button onClick={() => {
                                    let newOption = {
                                        productId: productId,
                                        price: Number(window.prompt("Nhập giá option")),
                                        title: window.prompt("Nhập title option")
                                    }
                                    axios.post("http://localhost:3000/api/v1/product-options", newOption)
                                        .then(res => {
                                            dispatch(productAction.insertOptionProduct(res.data.data))
                                        })
                                }}>Thêm Mới</button>

                                <div className='list_product'>
                                    <table className="table table-hover">
                                        <thead className="thead-dark">
                                            <tr className='list_product_thead'>
                                                <th style={{ width: '5%' }}>#</th>
                                                <th style={{ width: '25%' }}>Title</th>
                                                <th style={{ width: '15%' }}>Price</th>
                                                <th style={{ width: '20%' }}>Status</th>
                                                <th style={{ width: '20%' }}>Pictures</th>
                                                <th style={{ width: '20%' }}>Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                optionData?.map((option, index: number) => {
                                                    return (
                                                        <tr key={option.id}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{option.title}</td>
                                                            <td>{option.price}</td>
                                                            <td>{option.status ? "Đang bán" : "Đang Ẩn"}</td>
                                                            <td>

                                                                {/* <button type="button" className="btn btn-outline-primary">
                                                                    <Link to="/admin/products/pictures">Pictures</Link>
                                                                </button> */}

                                                                <button onClick={() => {
                                                                    setOptionId(option.id)
                                                                }} type="button" className="btn btn-primary">
                                                                    {
                                                                        optionId && <OptionPicture setOptionId={setOptionId} optionId={optionId} productId={productId} />
                                                                    }
                                                                </button>

                                                            </td>
                                                            <td>
                                                                <button className="btn btn-outline-danger">Detail</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>



                                {/* Modal footer */}
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>


            </>

        </div>
    )
}

import React, { useEffect, useState } from 'react'
import './ProductOption.scss'
import { useDispatch, useSelector } from 'react-redux'
import { StoreType } from '~/stores'
import { Option } from '~/utils/Interfaces/Product'
import axios from 'axios'
import { productAction } from '~/stores/slices/product.slice'
import OptionPicture from '../optionPictures/OptionPicture'
import currency from 'currency.js'

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

    const [formValues, setFormValues] = useState({
        name: "",
        des: ""
    });

    function addNewOption(e: React.FormEvent) {
        e.preventDefault();

        let newOption = {
            productId: productId,
            price: Number((e.target as any).price.value),
            title: (e.target as any).title.value
        }
        console.log("newOption", newOption);

        axios.post("http://localhost:3000/api/v1/product-options", newOption)
            .then(res => {
                console.log("api", res.data.data);

                dispatch(productAction.insertOptionProduct(res.data.data))
            })
    }

    useEffect(() => {
        console.log("productId sau", productId);
    }, [productId])

    useEffect(() => {
        console.log("optionId", optionId);
    }, [optionId])

    return (
        <div>
            <>
                <a data-bs-toggle="modal" data-bs-target="#myModal">Add Option</a>
                <div className='modal-option' >
                    <div className='modal-option-content'>
                        <button
                            type="button"
                            className=" btn btn-dark"
                            data-bs-dismiss="modal"
                            style={{ position: 'absolute', top: '10px', right: '10px' }}
                            onClick={() => {
                                setProductId(null)
                            }}
                        >
                            Close
                        </button>

                        <div style={{ marginTop: '1.5em' }}>
                            <h1 className='option-h1' >PRODUCT OPTION</h1>
                            <form action="" onSubmit={(e: React.FormEvent) => {
                                addNewOption(e)
                            }}
                                style={{ marginLeft: "35%" }}>
                                <div className='manager_product_form'>
                                    <label htmlFor="">Option Name</label><br />
                                    <input type="text" name="title" value={formValues.title}
                                        onChange={(e) => {
                                            setFormValues({ ...formValues, title: e.target.value });
                                        }} /><br />

                                    <label htmlFor="">Price</label><br />
                                    <input type="text" name="price" value={formValues.price}
                                        onChange={(e) => {
                                            setFormValues({ ...formValues, price: e.target.value });
                                        }} /><br />

                                </div>

                                <button type='submit' className='option_form_btn'
                                >Add New Option</button>
                            </form>

                            <div className='list_product'>
                                <table className="table table-hover text-center">
                                    <thead className="thead-dark">
                                        <tr className='list_product_thead'>
                                            <th style={{ width: '5%' }}>#</th>
                                            <th style={{ width: '25%' }}>Title</th>
                                            <th style={{ width: '15%' }}>Price</th>
                                            <th style={{ width: '20%' }}>Status</th>
                                            <th style={{ width: '20%' }}>Pictures</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ color: "#000" }}>
                                        {
                                            optionData?.map((option, index: number) => {
                                                return (
                                                    <tr key={option.id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{option.title}</td>
                                                        <td>{currency(option.price).format()}</td>
                                                        <td>{option.status ? "Hidden" : "On Sale"}</td>
                                                        <td>


                                                            <button onClick={() => {
                                                                setOptionId(option.id)

                                                            }} type="button" className="btn-outline-danger">

                                                                Add Pictures

                                                                {
                                                                    optionId && <OptionPicture setOptionId={setOptionId} optionId={optionId} productId={productId} />
                                                                }

                                                            </button>

                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div style={{ width: "100%", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.7)", position: "fixed", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: 'center', zIndex: '1000' }}>
                    <div style={{ position: "relative", width: "1200px", height: "100%", backgroundColor: "white" }}>
                        <button onClick={() => {
                            setProductId(null)
                        }} style={{ position: "absolute", right: 0, top: 0 }}>X</button>
                        <h2>Product Options</h2>
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
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">title</th>
                                    <th scope="col">price</th>
                                    <th scope="col">status</th>
                                    <th scope="col">pictures</th>
                                    <th scope="col">Handle</th>
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
                                                    <button onClick={() => {
                                                        setOptionId(option.id)
                                                    }} type="button" className="btn btn-primary">Show Pictures</button>
                                                </td>
                                                <td>@mdo</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    {
                        optionId && <OptionPicture setOptionId={setOptionId} optionId={optionId} productId={productId} />
                    }
                </div> */}


            </>


        </div>
    )
}

import React, { useEffect, useState } from 'react'
import './Cart.scss'
// import api from '@/services/apis'
// import currency from "currency.js";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import { useSelector } from 'react-redux';
import { message, Modal } from 'antd';
import { StoreType } from '~/stores';
import currency from 'currency.js';
import { QRCode } from 'antd'


export default function Cart() {

    const userStore = useSelector((store: StoreType) => store.userStore)

    const initialQuantity = userStore.cart?.detail[0]?.quantity || 0;
    const [quantity, setQuantity] = useState(initialQuantity)
    // const [quantity, setQuantity] = useState(0)

    const hadleDeleteItemFromCart = (optionId: string) => {
        if (userStore.socket) {
            userStore.socket.emit("deleteItemFromCart", {
                receiptId: userStore.cart?.id,
                optionId,
            })
        }
    }

    return (
        <div className='cart-total' >
            <div className='cart-total-table'>
                <section className="pt-5 pb-5">
                    <div className="container">
                        <div className="row w-100">
                            <div className="col-lg-12 col-md-12 col-12">
                                <h3 className=" mb-3 " style={{ fontSize: '32px', fontWeight: 'bold' }}>List Shopping Cart</h3>
                                <p className="mb-3 font-italic ">
                                    <i className="fa-solid fa-tags"></i> <span className=" font-weight-bold">
                                        {userStore.cart?.detail.length}
                                    </span> items in your cart
                                </p>
                                <table
                                    id="shoppingCart"
                                    className="table table-condensed table-responsive"
                                    style={{ color: '#000' }}
                                >
                                    <thead>
                                        <tr>
                                            <th style={{ width: "10%", fontWeight: 'bold' }}>#</th>
                                            <th style={{ width: "45%", fontWeight: 'bold' }}>Product</th>
                                            <th style={{ width: "12%", fontWeight: 'bold' }}>Price</th>
                                            <th style={{ width: "20%", fontWeight: 'bold' }}>Quantity</th>
                                            <th style={{ width: "15%", fontWeight: 'bold' }}>Total Item</th>
                                            <th style={{ width: "15%", fontWeight: 'bold' }} />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userStore.cart?.detail.map((item, index) => (
                                                <>

                                                    <tr key={item.id}>
                                                        <td>{index + 1}</td>
                                                        <td data-th="Product">
                                                            <div className="row">
                                                                <div className="col-md-3 text-left">
                                                                    <img
                                                                        src={item.option.pictures[0].avatar}
                                                                        alt=""
                                                                        className="img-fluid d-none d-md-block rounded mb-2 shadow cart-image"
                                                                    />
                                                                </div>
                                                                <div className="col-md-9 text-left mt-sm-2">
                                                                    <h6>{item.option.product.name}</h6>
                                                                    <p className="font-weight-light">{item.option.title}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td data-th="Price">{currency(item.option.price).format()}</td>
                                                        <td data-th="Quantity" className='content-quantity'>
                                                            <button type="button"
                                                                onClick={() => {
                                                                    if (Number(quantity) > 1) {
                                                                        let newQuantity = Number(quantity) - 1;
                                                                        setQuantity(newQuantity);
                                                                        userStore.socket?.emit("addToCart", {
                                                                            receipt: item.receiptId,
                                                                            optionId: item.optionId,
                                                                            quantity: newQuantity
                                                                        })
                                                                    }

                                                                    // if (Number(quantity) == 1){
                                                                    //     Modal.confirm({
                                                                    //         content: "Are you want to delete?",
                                                                    //         onOk: () => {

                                                                    //         }
                                                                    //     })
                                                                    // }

                                                                }}
                                                            >-</button>
                                                            <span>{item.quantity}</span>
                                                            <button type="button"
                                                                onClick={() => {
                                                                    let newQuantity = Number(quantity) + 1;
                                                                    setQuantity(newQuantity);
                                                                    userStore.socket?.emit("addToCart", {
                                                                        receipt: item.receiptId,
                                                                        optionId: item.optionId,
                                                                        quantity: newQuantity
                                                                    })
                                                                }}
                                                            >+</button><br />
                                                        </td>
                                                        <td>
                                                            {currency(item.option.price * item.quantity).format()}
                                                        </td>
                                                        <td className="actions" data-th="">
                                                            <div className="text-right">
                                                                {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                                <i className="fas fa-sync" />
                                                            </button> */}
                                                                <button
                                                                    onClick={() => {
                                                                        Modal.warning({
                                                                            content: "Do you want to delete this product?",
                                                                            onOk: () => {
                                                                                hadleDeleteItemFromCart(item.optionId)
                                                                            },
                                                                        });
                                                                    }}
                                                                    className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                                    <i className="fas fa-trash" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>

                                            ))
                                        }

                                    </tbody>
                                </table>
                                <div className="float-right text-right">
                                    <h4 style={{ fontSize: '20px' }}>Total:</h4>
                                    <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '0.5em' }}>
                                        {
                                            userStore.cart ? (
                                                currency(userStore.cart?.detail.reduce((value, nextItem) => {
                                                    return value + (nextItem.quantity * nextItem.option.price)
                                                }, 0)).format()
                                            )
                                                :
                                                currency(0).format()
                                        }
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <a href="/" style={{ marginRight: '800px' }} >
                                <i className="fas fa-arrow-left mr-2" /> Continue Shopping
                            </a>

                        </div>
                    </div>
                </section>
            </div>

            <div className='cart-total-payment'>
                <MDBCol lg="12" className="px-5 py-4">
                    <MDBTypography
                        tag="h3"
                        className=" mb-5 mt-3 pt-2 text-left fw-bold "
                        style={{ fontSize: '30px' }}
                    >
                        Payment Method
                    </MDBTypography>

                    <div className="mb-5">
                        <MDBRow>
                            <MDBCol>
                                <>
                                    {/* Payment Method */}
                                    <>
                                        <form
                                            onSubmit={(e: React.FormEvent) => {
                                                e.preventDefault();
                                                let payMode = (e.target as any).payMode.value;
                                                console.log("payMode", payMode)

                                                if (payMode == "CASH") {
                                                    userStore.socket?.emit("payCash", {
                                                        receiptId: userStore.cart?.id,
                                                        userId: userStore.data?.id
                                                    })
                                                }

                                                if (payMode == "ZALO") {
                                                    userStore.socket?.emit("payZalo", {
                                                        receiptId: userStore.cart?.id,
                                                        userId: userStore.data?.id
                                                    })
                                                }

                                            }}
                                        >

                                            {/* Cash */}
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    value={"CASH"}
                                                    name='payMode'
                                                    defaultChecked
                                                />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Cash
                                                </label>
                                            </div>
                                            {/* ZaloPay */}
                                            <div className="form-check mb-4">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    value={"ZALO"}
                                                    name='payMode'
                                                />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    ZaloPay
                                                </label>
                                            </div>
                                            {
                                                userStore.cartPayQr && <QRCode value={userStore.cartPayQr} icon='https://e7.pngegg.com/pngimages/900/307/png-clipart-logo-brand-daniel-wellington-watch-fashion-watch-text-rectangle-thumbnail.png' />
                                            }

                                            <button
                                                type="submit" className="payment-btn"
                                            >CHECKOUT</button>

                                        </form>
                                    </>

                                </>

                            </MDBCol>
                        </MDBRow>
                    </div>

                </MDBCol>
            </div>
        </div>
    )
}

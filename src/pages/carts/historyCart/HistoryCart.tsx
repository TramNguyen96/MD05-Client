import { useSelector } from 'react-redux'
import './HistoryCart.scss'
import { StoreType } from '~/stores'
import { useEffect, useState } from 'react'
import ReceiptDetail from './receiptDetail/ReceiptDetail'
import moment from 'moment'
import { Link, useNavigate } from 'react-router-dom'

export default function HistoryCart() {

    const userStore = useSelector((store: StoreType) => store.userStore)

    const [receiptId, setReceiptId] = useState<string | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        console.log("receiptId", receiptId);

    }, [receiptId])

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        History Receipt
                    </li>
                </ol>
            </nav>
            <div className='receipt'>
                <div className='receipt-h1'>
                    <h1>HISTORY RECEIPT</h1>
                    <p className="mb-3 font-italic ">
                        <i className="fa-solid fa-tags"></i> <span className=" font-weight-bold">
                            {userStore.receipt?.length == 1 ? (`${userStore.receipt?.length} item in your receipt `) : (`${userStore.receipt?.length} items in your receipt `)}
                        </span>
                    </p>
                </div>
                <div className='list_receipt'>
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr className='list_product_thead'>
                                <th style={{ width: '5%' }}>#</th>
                                <th style={{ width: '18%' }}>Receipt ID</th>
                                <th style={{ width: '18%' }}>User ID</th>
                                <th style={{ width: '15%' }}>Create Time</th>
                                <th style={{ width: '10%' }}>Status</th>
                                <th style={{ width: '10%' }}>Payment</th>
                                <th style={{ width: '10%' }}>Paid</th>
                                <th style={{ width: '10%' }}>Receipt Detail</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: "#000" }}>
                            {
                                userStore.receipt?.map((receipt, index: number) => {

                                    return (
                                        <tr key={receipt.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{receipt.id}</td>
                                            <td>{receipt.userId}</td>
                                            <td>{moment(receipt.createAt).format('llll')}</td>
                                            <td>{receipt.status}</td>
                                            <td>{receipt.payMode}</td>
                                            <td>{receipt.paid ? "Paid" : "Unpaid"}</td>
                                            <td>
                                                {/* <Link to="/history-cart/detail"> */}
                                                <button onClick={() => {
                                                    navigate(`/history-cart/${receipt.id}`)

                                                }} type="button" className="btn btn-outline-info">

                                                    Detail

                                                </button>
                                                {/* </Link> */}
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
    )
}

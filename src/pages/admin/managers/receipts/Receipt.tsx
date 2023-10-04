import './Receipt.scss'
import { StoreType } from "~/stores";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import api from '~/services/api';
import { Receipt, ReceiptDetail } from '~/utils/Interfaces/Receipt';
import { userAction } from '~/stores/slices/user.slice';
import moment from 'moment';


export default function Receipt() {
    // const { receiptId } = useParams();

    const [receipts, setReceipts] = useState([])

    const userStore = useSelector((store: StoreType) => store.userStore)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        api.userApi.receiptFindAll()
            .then((res) => {
                console.log(" res:", res.data.data)
                if (res.status == 200) {
                    setReceipts(res.data.data);
                    dispatch(userAction.setData(res.data.data))
                } else {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                alert("sap server");
            });
    }, [])

    // const calculateTotal = () => {
    //     let total = 0;
    //     receiptDetail.forEach((item: any) => {
    //         total += item.quantity * item.option.price;
    //     });
    //     return total;
    // };

    return (
        <div>
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

import './ReceiptDetail.scss'
import { StoreType } from '~/stores'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import currency from 'currency.js';
import user from '~/services/api/modules/user';
import { Link, useParams } from 'react-router-dom';
import Receipt from '../../../../utils/Interfaces/Receipt'


export default function ReceiptDetail() {

    const userStore = useSelector((store: StoreType) => store.userStore)

    const { receiptId } = useParams() as { receiptId: string }

    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const receiptDetail = findReceiptDetail();

        if (receiptDetail) {
            let calculatedTotal = 0;
            receiptDetail.detail?.forEach((product: Receipt) => {
                calculatedTotal += product.option.price * product.quantity;
            });
            setTotal(calculatedTotal);
        }

    }, [userStore.receipt, receiptId]);

    const findReceiptDetail = () => {
        if (userStore.receipt) {
            const receiptDetail = userStore.receipt.find((receipt) => receipt.id == receiptId);
            return receiptDetail;
        }
        return null;
    };

    const receiptDetail = findReceiptDetail();


    return (
        <div>
            <div className='history-cart'>
                {/* <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            History Receipt
                        </li>
                    </ol>
                </nav> */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/history-cart">History Receipt</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Receipt Detail
                        </li>
                    </ol>
                </nav>
                <div className='check_order_list_receipt'>

                    <div className="row">
                        <div className="well col-xs-12 col-sm-12 col-md-12 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                            <div className="row" style={{ padding: '20px' }}>
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <address>
                                        <em>Email: {userStore.data?.email}</em><br />
                                        <em>Full Name: {userStore.data?.firstName} {userStore.data?.lastName}</em><br />
                                        {/* <abbr title="Phone">Phone:</abbr> {userStore.data?.} */}
                                    </address>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                                    <p>
                                        <em>Date: {userStore.data?.createAt}</em>
                                    </p>
                                    <p>
                                        <em>Receipt #: {userStore.data?.id}</em>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-center fw-bold" style={{ fontSize: '30px' }}>
                                <h1>Receipt</h1>
                            </div>
                            <table className="table table-hover" style={{ color: '#000', width: '90%', margin: '0px auto', textAlign: 'left' }}>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th style={{ fontWeight: 'bold', width: '35%' }}>Product</th>
                                        <th style={{ fontWeight: 'bold', width: '15%' }} className="text-center">Quantity</th>
                                        <th style={{ fontWeight: 'bold', width: '15%' }} className="text-center">Price</th>
                                        <th style={{ fontWeight: 'bold', width: '15%' }} className="text-center">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        receiptDetail?.detail.map((detail, index: number) => (

                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td className="col-md-9">
                                                    <em>{detail.option.product.name}</em>
                                                </td>
                                                <td className="col-md-1" style={{ textAlign: "center" }}>
                                                    {detail.quantity}
                                                </td>
                                                <td className="col-md-1 text-center">{currency(detail.option.price).format()}</td>
                                                <td className="col-md-1 text-center">{currency(detail.quantity * detail.option.price).format()}</td>
                                            </tr>
                                        ))
                                    }
                                    <tr>
                                        <td> &nbsp; </td>
                                        <td> &nbsp; </td>
                                        <td> &nbsp; </td>
                                        <td className="text-right" style={{ fontWeight: 'bold' }}>
                                            <p>
                                                <span>Subtotal:&nbsp;</span>
                                            </p>

                                        </td>
                                        <td className="text-right">
                                            <p>
                                                {currency(total).format()}
                                            </p>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td> &nbsp; </td>
                                        <td> &nbsp; </td>
                                        <td> &nbsp; </td>
                                        <td className="text-right" >
                                            <h4 style={{ fontWeight: 'bold' }}>
                                                <span>Total:&nbsp;</span>
                                            </h4>
                                        </td>
                                        <td className="text-center text-danger">
                                            <h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                                {currency(total).format()}
                                            </h4>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

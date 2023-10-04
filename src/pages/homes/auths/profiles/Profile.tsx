import { useSelector } from 'react-redux'
import './Profile.scss'
import { StoreType, store } from '~/stores';
import { User } from '~/utils/Interfaces/User';
import { useEffect } from 'react';
import api from '~/services/api';
import { message } from 'antd';

export default function Profile() {
    const userStore = useSelector((store: StoreType) => {
        return store.userStore
    })

    useEffect(() => {
        console.log("userStore", userStore.data);

    }, [])

    function handleResendEmail() {
        api.userApi.resendMail()
            .then(res => {

                message.success(res.data)

            })
            .catch(err => {
                console.log("err api", err);

            })
    }
    return (
        <div>
            <ol className="breadcrumb blue-grey lighten-4">
                <li className="breadcrumb-item"><a className="black-text" href="/">Home</a></li>
                <li className="breadcrumb-item active">Profile</li>
            </ol>
            <div className='profile'>
                <div className="student-profile py-4">
                    <div className="container">
                        <div className="row" style={{ width: '100%' }}>
                            <div className="col-lg-4">
                                <div className="cards shadow-sm">

                                    <div className="card-header bg-transparent text-center" >
                                        <img
                                            className="profile_img"
                                            src={userStore.data?.avatar}
                                        />
                                        <h3>{userStore.data?.userName}</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="cards shadow-sm">
                                    <div className="card-header bg-transparent border-0">
                                        <h3 className="mb-0">
                                            <i className="far fa-clone pr-1" />
                                            General Information
                                        </h3>
                                    </div>
                                    <div className="card-body pt-0">
                                        <table className="table table-bordered">
                                            <tbody className='format-table'>
                                                <tr>
                                                    <th width="30%">User Name</th>
                                                    <td width="2%">:</td>
                                                    <td>{userStore.data?.userName}</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Email </th>
                                                    <td width="2%">:</td>
                                                    <td>{userStore.data?.email}</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Relation</th>
                                                    <td width="2%">:</td>
                                                    <td>{userStore.data?.role == "MEMBER" ? "Member" : "Admin"}</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Status</th>
                                                    <td width="2%">:</td>
                                                    <td>{userStore.data?.status == "ACTIVE" ? "Active" : "Blocked"}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="cards shadow-sm">
                                    <div className="card-header bg-transparent border-0">
                                        <h3 className="mb-0">
                                            <i className="far fa-clone pr-1" />
                                            Account Information
                                        </h3>
                                    </div>
                                    <div className="card-body pt-0">
                                        <table className="table table-bordered">
                                            <tbody className='format-table'>
                                                <tr>
                                                    <th width="30%">Resend Mail</th>
                                                    <td width="2%">:</td>
                                                    <td>
                                                        <span>
                                                            <>
                                                                Email: {userStore.data?.email}
                                                                <br />
                                                                Authentication Email: {userStore.data?.emailConfirm ? 'Authenticated ✓' : 'Not Authenticated ❌'}
                                                                <br />
                                                                <button className='btn btn-outline-dark' style={{ boxShadow: 'none' }}
                                                                    onClick={() => {

                                                                        handleResendEmail()

                                                                    }}>Resend email</button>
                                                            </>
                                                        </span>
                                                        {/* <a href="/check-order" style={{ textDecoration: 'underline' }}>Send Mail</a> */}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Change Password</th>
                                                    <td width="2%">:</td>
                                                    <td>
                                                        <a href="/change-password" style={{ textDecoration: 'underline' }}>Send Mail</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Forget Password</th>
                                                    <td width="2%">:</td>
                                                    <td>
                                                        <a href="/reset-password" style={{ textDecoration: 'underline' }}>Send Mail</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="cards shadow-sm">
                                    <div className="card-header bg-transparent border-0">
                                        <h3 className="mb-0">
                                            <i className="far fa-clone pr-1" />
                                            Receipt Information
                                        </h3>
                                    </div>
                                    <div className="card-body pt-0">
                                        <table className="table table-bordered">
                                            <tbody className='format-table'>
                                                <tr>
                                                    <th width="30%">History Receipt</th>
                                                    <td width="2%">:</td>
                                                    <td>
                                                        <a href="/history-cart" style={{ textDecoration: 'underline' }}>Check history receipt   </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

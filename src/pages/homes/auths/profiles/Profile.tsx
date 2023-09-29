import { useSelector } from 'react-redux'
import './Profile.scss'
import { StoreType, store } from '~/stores';
import { User } from '~/utils/Interfaces/User';

export default function Profile() {
    const userStore = useSelector((store: StoreType) => {
        return store.userStore
    })
    return (
        <div className='profile'>
            <div className="student-profile py-4">
                <div className="container">
                    <div className="row" style={{ width: '100%' }}>
                        <div className="col-lg-4">
                            <div className="cards shadow-sm">

                                <div className="card-header bg-transparent text-center">
                                    <img
                                        className="profile_img"
                                        src={(userStore! as User).avatar}
                                    />
                                    <h3>{(userStore! as User).firstName} {(userStore! as User).lastName}</h3>
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
                                        <tbody>
                                            <tr>
                                                <th width="30%">User Name</th>
                                                <td width="2%">:</td>
                                                <td>{(userStore! as User).userName}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Email </th>
                                                <td width="2%">:</td>
                                                <td>{(userStore! as User).email}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Relation</th>
                                                <td width="2%">:</td>
                                                <td>{(userStore! as User).role == "MEMBER" ? "Member" : "Admin"}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Status</th>
                                                <td width="2%">:</td>
                                                <td>{(userStore! as User).status == "ACTIVE" ? "Active" : "Blocked"}</td>
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
                                        <tbody>
                                            <tr>
                                                <th width="30%">Receipt</th>
                                                <td width="2%">:</td>
                                                <td>
                                                    <a href="/check-order" style={{ textDecoration: 'underline' }}>Check order status</a>
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
    )
}

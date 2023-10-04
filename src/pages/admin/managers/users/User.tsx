import { useDispatch, useSelector } from 'react-redux'
import './User.scss'
import { StoreType } from '~/stores'
import { useEffect, useState } from 'react';
import api from '~/services/api';
import { userAction } from '~/stores/slices/user.slice';
import { User } from '~/utils/Interfaces/User';
import moment from 'moment';

export default function User() {

    const userStore = useSelector((store: StoreType) => store.userStore);
    const dispatch = useDispatch()
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        api.userApi.findAll()
            .then(res => {
                // console.log("res.data", res.data);
                dispatch(userAction.allUser(res.data.data))
                setUsers(res.data.data)
            })
            .catch(err => {
                console.log("err", err);

            })
    }, [])

    return (
        <div>
            <div className='user-management'>
                <div className='user-management-h1'>
                    <h1>USER MANAGEMENT</h1>
                </div>
                <div className='list_product'>
                    <table className="table table-hover text-center">
                        <thead className="thead-dark">
                            <tr className='list_product_thead'>
                                <th style={{ width: '5%' }}>#</th>
                                <th style={{ width: '5%' }}>User Name</th>
                                <th style={{ width: '10%' }}>Email</th>
                                <th style={{ width: '5%' }}>Relation</th>
                                <th style={{ width: '5%' }}>Status</th>
                                <th style={{ width: '5%' }}>User ID</th>
                                <th style={{ width: '5%' }}>Handle</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index: number) => (
                                    <tr className='list_product_tbody' key={user.id}>

                                        <td>{index + 1}</td>
                                        <td> {user.userName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>{user.status}</td>
                                        <td>{user.id}</td>
                                        <td>
                                            <a href="#" style={{ color: 'red' }}>Delete</a><br />
                                            <a href="#" style={{ color: 'green' }}>Update</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

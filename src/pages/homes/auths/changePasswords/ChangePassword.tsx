import { useState } from 'react'
import './ChangePassword.scss'
import api from '~/services/api'
import { message } from 'antd'
import Loading from '~/utils/loadings/Loading';
import Spinner from '~/utils/Spinner'


export default function ChangePassword() {

    const [load, setLoad] = useState(false);

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    async function handleChangePassword() {
        if (load) return;

        let data = {
            oldPassword,
            newPassword
        }
        setLoad(true);

        try {
            await api.userApi.changePassword(data)
                .then(res => {
                    console.log("res", res)
                    if (res.status == 200) {
                        message.success(res.data.message)

                    } else {
                        message.error(res.data.message)
                    }
                })
                .catch(err => {
                    console.log("err", err)
                    message.error("Api Error")
                })

        } catch (err) {
            console.log("err Api", err);

        }


        setLoad(false)

    }

    return (
        <div>
            <div className='manager_product'>
                <div className='manager_product_form'>
                    <h1>CHANGE PASSWORD</h1>

                    <label htmlFor="">Password</label><br />
                    <input type="password" name="oldPassword" value={oldPassword}
                        onChange={(e) => {
                            setOldPassword(e.target.value)
                        }} /><br />

                    <label htmlFor="">New Password</label><br />
                    <input type="password" name="newPassword" value={newPassword}
                        onChange={(e) => {
                            setNewPassword(e.target.value)
                        }} /><br />

                    <div>
                        {
                            load ?? <Loading />
                        }
                        <button
                            onClick={() => {
                                handleChangePassword()
                            }}
                            // className='btn_submit register_form_btn'
                            className={`${load && 'active'} btn_submit register_form_btn `}
                        >
                            <div className='btn_loading'>
                                <Spinner />
                            </div>
                            Save Change
                        </button>

                    </div>

                </div>
            </div>

        </div>
    )
}

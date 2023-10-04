import { useState } from 'react'
import './FogetPassword.scss'
import api from '~/services/api';
import { message } from 'antd';
import Loading from '~/utils/loadings/Loading';
import Spinner from '~/utils/Spinner'

export default function ForgetPassword() {

    const [load, setLoad] = useState(false);

    const [email, setEmail] = useState("")

    async function handleResetPassword() {
        setLoad(true);

        await api.userApi.resetPassword({
            email: email
        })
            .then(res => {
                console.log("res", res);
                if (res.status == 200) {
                    message.success(res.data.message)
                } else {
                    message.error(res.data.message)
                }
            })
            .catch(err => {
                console.log("err", err);

            })

        setEmail("")
        setLoad(false)

    }

    return (
        <div>
            <div>
                <div className='manager_product'>
                    <div className='manager_product_form'>
                        <h1>FORGET PASSWORD</h1>

                        <label htmlFor="">Email</label><br />
                        <input type="email" name="email" value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} /><br />

                        <div>
                            {
                                load ?? <Loading />
                            }
                            <button type='button'
                                onClick={() => {
                                    handleResetPassword()
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

                        <div style={{ textAlign: 'center', marginTop: '1em', textDecoration: 'none' }}>
                            <a href="/login"><i className="fa-solid fa-backward"></i> Login</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

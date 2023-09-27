import './Login.scss'
// import { useTranslation } from 'react-i18next'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Modal } from 'antd';
import { memo, useState, FormEvent, useEffect } from 'react'
import api from '@services/api'
import Loading from '../loadings/Loading';
import { useSelector } from 'react-redux';
import { StoreType } from '../../../../stores/index';


function Login() {
    const userStore = useSelector((store: StoreType) => store.userStore)

    // useEffect(() => {
    //     console.log("userStore", userStore);

    // }, [])
    // const { t } = useTranslation();
    const [load, setLoad] = useState(false);

    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        let data = {
            userNameOrEmail: (e.target as any).userNameOrEmail.value,
            password: (e.target as any).password.value
        }

        await api.userApi.login(data)
            .then(res => {
                console.log("res", res)
                if (res.status == 200) {
                    localStorage.setItem("token", res.data.token)
                    window.location.href = "/"
                }
            })
            .catch(err => {
                console.log("err", err)
            })

    }

    return (
        <div className='register'>
            <div className='register_main'>
                {/* Header */}
                <div className='register_header'>
                    <h1>LOGIN</h1>
                </div>

                {/* Form Register */}

                <div className='register_form'>
                    <form
                        onSubmit={(e) => {
                            handleLogin(e)
                        }}
                    >
                        <label htmlFor="">User Name or Email</label><br />
                        <input type="text" name="userNameOrEmail" /><br />

                        <label htmlFor="">Password</label><br />
                        <input type="password" name="password" /><br />

                        <div>
                            {
                                load ?? <Loading />
                            }
                            <button className={`${load && 'active'} btn_submit register_form_btn `}>
                                SIGN IN

                                <div className='btn_loading'>
                                    <Spin indicator={antIcon} />
                                </div>

                            </button>
                        </div>

                        <p className="text-center text-muted mt-2 mb-0"> Don't have an account? <a href="/register"
                            className="fw-bold text-body"><u> Register here</u></a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default memo(Login);
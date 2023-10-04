import './Login.scss'
// import { useTranslation } from 'react-i18next'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, message } from 'antd';
import { memo, useState, FormEvent, useEffect } from 'react'
import api from '@services/api'
import Loading from '../../../../utils/loadings/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../../../../stores/index';
import { userAction } from '~/stores/slices/user.slice';
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../../../../../firebase'
import { User } from 'firebase/auth';


interface UserGoogle extends User {
    accessToken: string
}

function Login() {
    const userStore = useSelector((store: StoreType) => store.userStore)

    const dispatch = useDispatch()

    const navigate = useNavigate()

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
                console.log("res", res.data);

                if (res.status == 200) {
                    localStorage.setItem("token", res.data.token)
                    dispatch(userAction.reload())
                    message.success("Login successfully!")
                } else {
                    message.error(res.data.message)
                }
            })
            .catch(err => {
                console.log("err", err)
                if (Array.isArray(err.response.data.message)) {
                    for (let i in err.response.data.message) {
                        message.warning(err.response.data.message[i])
                    }

                } else {
                    message.error(err.response.data.message);
                }
            })
    }

    useEffect(() => {
        if (userStore.data) {
            navigate("/")
        }
    }, [userStore.data])

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

                        <div style={{ textAlign: 'right', marginTop: '0.5em' }}>
                            <a href="/reset-password">Forgot your password ?</a>
                        </div>

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

                        <div className='icon'>

                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter" style={{ padding: '0 20px' }}></i>
                            <a onClick={async () => {
                                try {
                                    await googleLogin()
                                        .then(async (res) => {
                                            let data = {
                                                accessToken: (res.user as UserGoogle).accessToken,
                                                email: res.user.email,
                                                userName: res.user.email,
                                                password: res.user.uid,
                                                firstName: res.user.displayName,
                                                lastName: res.user.displayName
                                            }
                                            console.log("data", data);

                                            await api.userApi.googleLogin(data)
                                                .then(res => {
                                                    console.log("res.data", res.data);

                                                    if (res.status == 200) {
                                                        localStorage.setItem("token", res.data.token);
                                                        dispatch(userAction.reload())
                                                    }
                                                })
                                                .catch(err => {
                                                    console.log("err", err);

                                                    alert("Google Login Failed")
                                                })
                                        })
                                        .catch(err => {
                                            window.alert("Login Google Failed")
                                        })

                                } catch (err) {
                                    window.alert("Login Google Failed, Please try again!")
                                }
                            }} >
                                <i className="fa-brands fa-google-plus-g"></i>
                            </a>
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
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
                if (res.status == 200) {
                    localStorage.setItem("token", res.data.token)
                    dispatch(userAction.reload())
                    message.success("Login successfully!")
                }
            })
            .catch(err => {
                console.log("err", err)
                message.error("Error Login Api")
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
                            <i className="fa-brands fa-google-plus-g"></i>
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
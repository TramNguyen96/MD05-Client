import './Register.scss'
import { FormEvent, memo, useState } from 'react'
// import { useTranslation } from 'react-i18next'
// import api from '@services/apis'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Modal } from 'antd';
import Loading from '../loadings/Loading';


function Register() {
    const [load, setLoad] = useState(false);
    // const { t } = useTranslation();

    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );

    // async function register(event: FormEvent) {
    //     event.preventDefault();

    //     if (load) return;

    //     let newUser = {
    //         email: (event.target as any).email.value,
    //         userName: (event.target as any).userName.value,
    //         password: (event.target as any).password.value,
    //         firstName: (event.target as any).firstName.value,
    //         lastName: (event.target as any).lastName.value,
    //     }

    //     setLoad(true);

    //     await api.userApi.register(newUser)
    //         .then(res => {
    //             if (res.status !== 200) {
    //                 Modal.confirm({
    //                     content: res.data.message,
    //                     okText: "Again"
    //                 })
    //             } else {
    //                 Modal.info({
    //                     content: "Please check your email to verify your email!",
    //                     // onOk: () => {
    //                     //     window.location.href = "/login";
    //                     // },
    //                 })
    //             }
    //         })
    //         .catch(err => {
    //             console.log("err", err);

    //             Modal.success({
    //                 content: "Server Network!",
    //                 okText: "Again"
    //             })
    //         })

    //     setLoad(false);

    // }
    return (
        <div className='register'>
            <div className='register_main'>
                {/* Header */}
                <div className='register_header'>
                    <h1>REGISTER</h1>
                </div>

                {/* Form Register */}

                <div className='register_form'>
                    <form
                    // onSubmit={(e) => {
                    //     register(e)
                    // }} 
                    >
                        <label htmlFor="">User Name</label><br />
                        <input type="text" name="userName" /><br />

                        <label htmlFor="">Email</label><br />
                        <input type="text" name="email" /><br />

                        <label htmlFor="">Password</label><br />
                        <input type="password" name="password" /><br />

                        <label htmlFor="">Confirm Password</label><br />
                        <input type="password" name="confirmPassword" /><br />

                        <label htmlFor="">First Name</label><br />
                        <input type="text" name="firstName" /><br />

                        <label htmlFor="">Last Name</label><br />
                        <input type="text" name="lastName" /><br />

                        <div>
                            {
                                load ?? <Loading />
                            }
                            <button className={`${load && 'active'} btn_submit register_form_btn `}>
                                SIGN UP

                                <div className='btn_loading'>
                                    <Spin indicator={antIcon} />
                                </div>

                            </button>
                        </div>

                        <p className="text-center text-muted mt-2 mb-0"> Have already an account? <a href="/login"
                            className="fw-bold text-body"><u> Login here</u></a></p>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default memo(Register);
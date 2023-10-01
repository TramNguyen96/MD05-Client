import { useDispatch, useSelector } from 'react-redux';
import './BeforeNav.scss';
import { StoreType } from '~/stores';
import { Modal } from 'antd';
import { useEffect } from 'react';
import { userAction } from '~/stores/slices/user.slice';

export default function BeforeNavbar() {
    const dispatch = useDispatch()

    const userStore = useSelector((store: StoreType) => {
        return store.userStore
    })

    // useEffect(() => {
    //     console.log("userStore", userStore.data);
    // }, [userStore.data])

    return (
        <div>
            <section className="before_nav">
                <div className="before_nav_content">
                    <div className="before_nav_content_left">
                        <div className="feature_textname">
                            {
                                userStore.data ? (
                                    <div className="feature_textname_main">

                                        {
                                            userStore.data && (
                                                <>
                                                    <a href="/profile">
                                                        <img src={`${userStore.data?.avatar}`} className="avatar_login" />
                                                    </a>

                                                    <p>{`Hi, ${userStore.data?.firstName} ${userStore.data?.lastName}`}
                                                        {userStore.data?.role == "ADMIN" ? (
                                                            <a href="/admin/dashboard" className="feature_textname_a">
                                                                <i className="fa-solid fa-user-shield"></i>
                                                            </a>
                                                        ) : null}

                                                        <a href="#" className="feature_textname_a"
                                                            onClick={() => {
                                                                Modal.confirm({
                                                                    content: "Are you sure want to logout?",
                                                                    onOk: () => {
                                                                        localStorage.removeItem("token")
                                                                        userStore.socket?.disconnect()
                                                                    }
                                                                })
                                                            }}>

                                                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                                        </a>
                                                    </p>
                                                </>
                                            )
                                        }
                                    </div>
                                )
                                    :
                                    (
                                        <div className="feature_item_login_register">
                                            <a href="/login" className="feature_item" >Login</a>
                                            <a href="/register" className="feature_item" >Register</a>
                                        </div>
                                    )

                            }

                        </div>
                    </div>
                    <div className="before_nav_content_middle">
                        <p >Free extra strap when you buy a watch</p>
                    </div>

                    <div className="before_nav_content_right">
                        <p>Language</p>

                    </div>
                </div>
            </section>
        </div>
    )
}

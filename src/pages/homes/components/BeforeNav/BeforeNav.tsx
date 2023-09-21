import { useSelector } from 'react-redux';
import './BeforeNav.scss';
import { StoreType, store } from '~/stores';
import { useEffect, useState } from 'react';
import { User } from '~/utils/Interfaces/User';

export default function BeforeNavbar() {
    const userStore = useSelector((store: StoreType) => {
        return store.userStore
    })

    useEffect(() => {
        console.log("userStore", userStore);

    }, [])

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [])



    return (
        <div>
            <section className="before_nav">
                <div className="before_nav_content">
                    <div className="before_nav_content_left">
                        <div className="feature_textname">
                            {
                                isLoggedIn ? (
                                    <div>
                                        <a href="/profile">
                                            <img src="https://www.slotcharter.net/wp-content/uploads/2020/02/no-avatar.png" className="avatar_login" />
                                        </a>


                                        <p>{`Hi, ${(userStore! as User).firstName} ${(userStore! as User).lastName}`}
                                            {(userStore! as User).role == "ADMIN" ? (
                                                <a href="/admin" className="feature_textname_a">
                                                    <i className="fa-solid fa-user-shield"></i>
                                                </a>
                                            ) : null}

                                            <a href="#" className="feature_textname_a"
                                                onClick={() => {
                                                    window.confirm("Are you sure want to logout?")
                                                    // dispatch(userActions.logOut())
                                                    // dispatch(userAction.logOut(store.userStore.data))
                                                    localStorage.removeItem("token")
                                                    // localStorage.removeItem("carts")
                                                    window.location.reload()
                                                }}
                                            ><i className="fa-solid fa-arrow-right-from-bracket"></i></a></p>

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

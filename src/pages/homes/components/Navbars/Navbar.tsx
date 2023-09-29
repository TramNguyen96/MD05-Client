import './Navbar.scss';
import { Link, useParams } from 'react-router-dom';
import Search from './Search/Search';
import { useEffect, useState } from 'react';
import api from '~/services/api';
import { Category } from '~/utils/Interfaces/Category';
import { Modal } from 'antd';


export default function Navbar() {
    const { categoryId } = useParams<string>()
    // console.log("categoryId", categoryId);

    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        api.categoryApi.findAll()
            .then(res => {
                if (res.status !== 200) {
                    Modal.warning(res.data.message)
                } else {
                    setCategories(res.data.data)
                }
            })
            .catch(err => {
                console.log("err", err);

            })
    }, [])

    return (
        <div className='nav' >
            <div className="nav_content">
                <div className="left_content">
                    {/* Logo */}

                    <a href="/">
                        <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Flogo.png?alt=media&token=8965d479-df09-4c9f-9d79-03bb5430981f" alt="" />
                    </a>

                </div>
                <div className="middle_content">

                    <Link to="/" className="item" key={Date.now() * Math.random()}>HOME</Link>
                    {
                        categories?.map(category => (
                            <Link to={`/collection/${category.id}`} className="item" key={Date.now() * Math.random()} style={{ textTransform: 'uppercase' }} > {category.title}</Link>
                        ))
                    }

                </div>
                <div className="right_content">
                    {/* Search */}
                    <Search />
                    {/* Wishlist */}
                    <i className="fa-regular fa-heart" style={{ cursor: "pointer", color: "#ccc" }}></i>
                    {/* Cart */}
                    <Link to="/carts" className="item_cart">
                        <i className="fa-solid fa-bag-shopping " style={{ color: "#ccc" }}></i>
                        <span className="item_cart_number" style={{ color: "#ccc" }}>
                            {/* {totalCart} */}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

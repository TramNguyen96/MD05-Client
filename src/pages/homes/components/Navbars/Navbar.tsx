import './Navbar.scss';
import { Link } from 'react-router-dom';
import Search from './Search/Search';


export default function Navbar() {
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
                    {/* {
                        categories.map(category => (
                            <Link to={`/category/${category.id}`} className="item" key={Date.now() * Math.random()} style={{ textTransform: 'uppercase' }} > {category.title}</Link>
                        ))
                    } */}

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

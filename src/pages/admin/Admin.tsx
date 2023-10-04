import { Link, Outlet } from 'react-router-dom'
import './Admin.scss';
import { StoreType } from '~/stores';
import { useSelector } from 'react-redux';
import { User } from '~/utils/Interfaces/User';
import Dashboard from './managers/dashboard/Dashboard';

export default function Admin() {
    const userStore = useSelector((store: StoreType) => {
        return store.userStore
    })

    return (
        <div>
            <>
                <div className="sidebar">
                    <div className="logo-details">
                        <i className="bx bxl-c-plus-plus" />
                        <span className="logo_name">DANIEL WELLINGTON</span>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/admin/dashboard" className="">
                                <i className="bx bx-grid-alt" />
                                <span className="links_name">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/products">
                                <i className="bx bx-box" />
                                <span className="links_name">Product</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/users">
                                <i className="bx bx-user" />
                                <span className="links_name">User</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/receipts">
                                <i className="bx bx-list-ul" />
                                <span className="links_name">Order list</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="bx bx-book-alt" />
                                <span className="links_name">Total order</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="bx bx-message" />
                                <span className="links_name">Messages</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="bx bx-pie-chart-alt-2" />
                                <span className="links_name">Analytics</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="bx bx-coin-stack" />
                                <span className="links_name">Stock</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="bx bx-heart" />
                                <span className="links_name">Favrorites</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="bx bx-cog" />
                                <span className="links_name">Setting</span>
                            </Link>
                        </li>
                        <li className="log_out">
                            <Link to="#">
                                <i className="bx bx-log-out" />
                                <span className="links_name">Log out</span>
                            </Link>
                        </li>
                    </ul>
                </div>



                <section className="home-section">
                    <nav>
                        <div className="sidebar-button">
                            <i className="bx bx-menu sidebarBtn" />
                            <span className="dashboard"></span>
                            <a href="/" className='admin-btn-home' style={{ textDecoration: 'none', color: "#000", fontSize: '15px' }}>
                                <i className="fa-solid fa-house"></i>
                            </a>
                        </div>

                        <div className="search-box">
                            <input type="text" placeholder="Search..." />
                            <i className="bx bx-search" style={{ color: "#fff", backgroundColor: '#000' }} />
                        </div>
                        <div className="profile-details">
                            <img src={(userStore.data! as User).avatar} alt="" />
                            <span className="admin_name">{(userStore.data! as User).firstName} {(userStore.data! as User).lastName}</span>
                        </div>
                    </nav>

                    <Outlet />


                </section>


            </>


        </div>
    )
}

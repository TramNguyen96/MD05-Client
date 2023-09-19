import './Home.scss'
import { Outlet } from 'react-router-dom'
import BeforeNavbar from './components/BeforeNav/BeforeNav'
import Navbar from './components/Navbars/Navbar'
import Footer from './components/Footer/Footer'

export default function Home() {

    return (
        <div className='home_page'>
            <div className='home_page_content'>
                {/* Header */}
                <BeforeNavbar />
                <Navbar />

                {/* Body */}
                <div className='home_page_content_body'>
                    <Outlet />
                </div>


                {/* Footer */}
                <Footer />
            </div>

        </div>
    )
}

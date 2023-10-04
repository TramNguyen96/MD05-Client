import { Link } from 'react-router-dom'
import './Combo.scss'

export default function Combo() {
    return (
        <div className='combo'>
            <div className='combo-left'>
                <img src="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fcombo--home%2Fmini-onyx-evergold-tennishdao.d.png?alt=media&token=06bc0682-08bc-450b-bed3-f6d3558f5661" alt="" />
            </div>

            <div className='combo-right'>
                <Link to={"/collection/b2b23efb-5dae-11ee-891a-00ffa4885ecc"}>
                    <div className="container">
                        <div className="card">
                            <div className="image">
                                <img src="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fcombo--home%2Fi39iqhgip0icggb5zqpv.png?alt=media&token=f65cb555-fbad-4615-bbfa-872cf6c78ec9" height="150px" />
                            </div>
                            <div className="content">
                                <h5>CLASSIC TENNIS BRACELET GOLD</h5>
                                <div className="size">
                                    <h3>Price: $69.00</h3>
                                </div>
                                <a href="#">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to={"/collection/b2b23efb-5dae-11ee-891a-00ffa4885ecc"}>
                    <div className="container">
                        <div className="card">
                            <div className="image">
                                <img src="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fcombo--home%2F6da9dbee1e00513893dd35d029fa7c44550af405.png?alt=media&token=0b170394-5a01-4a2d-b75b-a76acf5e4d85" height="150px" />
                            </div>
                            <div className="content">
                                <h5>ELEVATION RING</h5>
                                <div className="size">
                                    <h3>Price: $79.00</h3>
                                </div>
                                <a href="#">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </Link>


                <Link to={"/collection/b2b251ba-5dae-11ee-891a-00ffa4885ecc"}>
                    <div className="container">
                        <div className="card">
                            <div className="image">
                                <img src="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fcombo--home%2Fs5y0zcatzejkfsf4meh9.png?alt=media&token=2f7ea8f1-3aea-4ab7-8c8b-c04c995f3756" height="150px" />
                            </div>
                            <div className="content">
                                <h5>QUADRO MINI EVERGOLD ONYX</h5>
                                <div className="size">
                                    <h3>Price: $179.00</h3>
                                </div>
                                <a href="#">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </Link>



            </div>
        </div>
    )
}

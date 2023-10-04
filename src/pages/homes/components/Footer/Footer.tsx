import './Footer.scss'

export default function Footer() {
    return (
        <div>
            <>
                <div className="main">
                    <footer
                        id="Footer"
                        style={{ backgroundColor: "#3e4551" }}
                        className="page-footer font-small stylish-color-dark pt-4"
                    >
                        <div
                            style={{ backgroundColor: "#3e4551" }}
                            className="container text-center text-md-left"
                        >
                            <div className="row">
                                <div className="col-md-4 mx-auto">
                                    {/* Content */}
                                    <h5 className="text-uppercase font-weight-bold mt-3 mb-4">
                                        About our Company
                                    </h5>
                                    <hr
                                        className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: 70 }}
                                    />
                                    <p>
                                        Inspired by his new acquaintance’s timeless style, Filip decided to create his own line of watches. Minimalistic and refined, the classic design with interchangeable straps that came to be has become a staple, with truly wide-ranging appeal. A few years on, this design is still part of the fabric of what makes Daniel Wellington so special.
                                    </p>
                                </div>
                                <hr className="clearfix w-100 d-md-none" />
                                <div id="link10" className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase font-weight-bold">Products</h6>
                                    <hr
                                        className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: 70 }}
                                    />
                                    <p>
                                        <a href="#!">Gift Sets</a>
                                    </p>
                                    <p>
                                        <a href="#!">Women's Watch</a>
                                    </p>
                                    <p>
                                        <a href="#!">Men Watch</a>
                                    </p>

                                </div>
                                <hr className="clearfix w-100 d-md-none" />
                                <div id="link10" className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                                    <hr
                                        className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: 70 }}
                                    />
                                    <p>
                                        <a href="#!">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="#!">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a href="#!">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="#!">Help</a>
                                    </p>
                                </div>
                                <hr className="clearfix w-100 d-md-none" />
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                                    <hr
                                        className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: 60 }}
                                    />
                                    <p>
                                        <i className="fas fa-home mr-3" /> New York, USA
                                    </p>
                                    <p>
                                        <i className="fas fa-envelope mr-3" /> danielwellington@dw.com
                                    </p>
                                    <p>
                                        <i className="fas fa-phone mr-3" /> + 91 80254 52xxx
                                    </p>
                                    <p>
                                        <i className="fas fa-print mr-3" /> + 91 80254 55xxx
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        {/* Call to action */}

                        <hr />
                        {/* Social buttons */}
                        <div className="hover-effect1">
                            <ul
                                style={{ backgroundColor: "#3e4551", marginLeft: '37%' }}
                                className="list-unstyled list-inline text-center"
                            >
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/danielwellingtonofficial/?locale=vi_VN" title="Facebook">
                                        <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://twitter.com/itisDW" title="Twitter">
                                        <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/danielwellington/" title="Instagram">
                                        <i className="fa fa-instagram" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.youtube.com/channel/UCY_BDqPMGJaBrxiiazZlEHg" title="Youtube">
                                        <i className="fa fa-youtube" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://se.linkedin.com/company/danielwellington" title="Github">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Copyright */}
                        <div
                            style={{ backgroundColor: "#3e4551" }}
                            className="footer-copyright text-center py-3"
                        >
                            Copyright© 2023: Design and Develop by DW
                        </div>
                    </footer>
                </div>
            </>

        </div>
    )
}

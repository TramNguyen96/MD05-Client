import './Footer.scss'

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="row">
                    <a href="#">
                        <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                        <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                        <i className="fa fa-youtube" />
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter" />
                    </a>
                </div>
                <div className="row">
                    <div className="main">
                        <div className="footer-wrapper">
                            <a
                                className="footer-icon facebook"
                                href="https://www.facebook.com/FinByz"
                                target="_blank"
                            >
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    width="30px"
                                    viewBox="0 0 512 512"
                                    fill="#385C8E"
                                    style={{ enableBackground: "new 0 0 512 512" }}
                                    xmlSpace="preserve"
                                >
                                    <g>
                                        <path d="M134.941,272.691h56.123v231.051c0,4.562,3.696,8.258,8.258,8.258h95.159c4.562,0,8.258-3.696,8.258-8.258V273.78h64.519c4.195,0,7.725-3.148,8.204-7.315l9.799-85.061c0.269-2.34-0.472-4.684-2.038-6.44c-1.567-1.757-3.81-2.763-6.164-2.763h-74.316V118.88c0-16.073,8.654-24.224,25.726-24.224c2.433,0,48.59,0,48.59,0c4.562,0,8.258-3.698,8.258-8.258V8.319c0-4.562-3.696-8.258-8.258-8.258h-66.965C309.622,0.038,308.573,0,307.027,0c-11.619,0-52.006,2.281-83.909,31.63c-35.348,32.524-30.434,71.465-29.26,78.217v62.352h-58.918c-4.562,0-8.258,3.696-8.258,8.258v83.975C126.683,268.993,130.379,272.691,134.941,272.691z" />
                                    </g>
                                </svg>
                            </a>
                            <a
                                className="footer-icon twitter"
                                href="https://twitter.com/FinByz"
                                target="_blank"
                            >
                                <svg
                                    version="1.1"
                                    viewBox="0 0 512 512"
                                    width="35px"
                                    xmlSpace="preserve"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    fill="#2CA7E0"
                                >
                                    <g>
                                        <path
                                            d="M485.98,113.141c-16.923,7.506-35.109,12.578-54.197,14.858    c19.48-11.679,34.445-30.171,41.49-52.208c-18.234,10.814-38.43,18.668-59.925,22.899c-17.213-18.341-41.738-29.799-68.88-29.799    c-52.114,0-94.368,42.25-94.368,94.364c0,7.396,0.834,14.598,2.444,21.505c-78.427-3.936-147.962-41.504-194.504-98.597    c-8.123,13.937-12.777,30.146-12.777,47.441c0,32.739,16.659,61.623,41.98,78.546c-15.469-0.491-30.02-4.735-42.742-11.804    c-0.009,0.395-0.009,0.788-0.009,1.188c0,45.721,32.529,83.859,75.698,92.531c-7.918,2.156-16.255,3.311-24.861,3.311    c-6.081,0-11.992-0.593-17.755-1.693c12.009,37.488,46.858,64.773,88.153,65.533c-32.296,25.312-72.985,40.396-117.198,40.396    c-7.617,0-15.128-0.446-22.511-1.32c41.762,26.775,91.365,42.4,144.655,42.4c173.574,0,268.493-143.794,268.493-268.496    c0-4.091-0.092-8.16-0.273-12.208C457.332,148.684,473.33,132.064,485.98,113.141z"
                                            style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                                        />
                                    </g>
                                </svg>
                            </a>
                            <a
                                className="footer-icon linkedin"
                                href="https://www.linkedin.com/company/finbyz"
                                target="_blank"
                            >
                                <svg
                                    style={{ enableBackground: "new 0 0 64 64" }}
                                    version="1.1"
                                    viewBox="0 0 64 64"
                                    xmlSpace="preserve"
                                    width="35px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    fill="#0072FF"
                                >
                                    <g>
                                        <path d="M8,54.7C8,55.4,8.6,56,9.3,56h9.3c0.7,0,1.3-0.6,1.3-1.3V23.9c0-0.7-0.6-1.3-1.3-1.3H9.3   c-0.7,0-1.3,0.6-1.3,1.3V54.7z" />
                                        <path d="M46.6,22.3c-4.5,0-7.7,1.8-9.4,3.7c-0.4,0.4-1.1,0.1-1.1-0.5l0-1.6c0-0.7-0.6-1.3-1.3-1.3h-9.4   c-0.7,0-1.3,0.6-1.3,1.3c0.1,5.7,0,25.4,0,30.7c0,0.7,0.6,1.3,1.3,1.3h9.5c0.7,0,1.3-0.6,1.3-1.3V37.9c0-1,0-2,0.3-2.7c0.8-2,2.6-4.1,5.7-4.1c4.1,0,6,3.1,6,7.6v15.9c0,0.7,0.6,1.3,1.3,1.3h9.3c0.7,0,1.3-0.6,1.3-1.3V37.4C60,27.1,54.1,22.3,46.6,22.3z" />
                                        <path d="M13.9,18.9L13.9,18.9c3.8,0,6.1-2.4,6.1-5.4C19.9,10.3,17.7,8,14,8c-3.7,0-6,2.3-6,5.4   C8,16.5,10.3,18.9,13.9,18.9z" />
                                    </g>
                                </svg>
                            </a>
                            <a
                                className="footer-icon youtube"
                                href="https://www.youtube.com/c/Finbyz"
                                target="_blank"
                            >
                                <svg
                                    width="35px"
                                    viewBox="0 0 32 32"
                                    xmlSpace="preserve"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <g>
                                        <path
                                            d="M31.67,9.179c0,0-0.312-2.353-1.271-3.389c-1.217-1.358-2.58-1.366-3.205-1.443C22.717,4,16.002,4,16.002,4   h-0.015c0,0-6.715,0-11.191,0.347C4.171,4.424,2.809,4.432,1.591,5.79C0.633,6.826,0.32,9.179,0.32,9.179S0,11.94,0,14.701v2.588   c0,2.763,0.32,5.523,0.32,5.523s0.312,2.352,1.271,3.386c1.218,1.358,2.815,1.317,3.527,1.459C7.677,27.919,15.995,28,15.995,28   s6.722-0.012,11.199-0.355c0.625-0.08,1.988-0.088,3.205-1.446c0.958-1.034,1.271-3.386,1.271-3.386s0.32-2.761,0.32-5.523v-2.588   C31.99,11.94,31.67,9.179,31.67,9.179z"
                                            fill="#E02F2F"
                                        />
                                        <polygon fill="#FFFFFF" points="12,10 12,22 22,16" />
                                    </g>
                                </svg>
                            </a>
                            <a
                                className="footer-icon instagram"
                                href="https://www.instagram.com/finbyz/"
                                target="_blank"
                            >
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    width="35px"
                                    viewBox="0 0 551.034 551.034"
                                    xmlSpace="preserve"
                                >
                                    <g>
                                        <linearGradient
                                            id="SVGID_1_"
                                            gradientUnits="userSpaceOnUse"
                                            x1="275.517"
                                            y1="4.57"
                                            x2="275.517"
                                            y2="549.72"
                                            gradientTransform="matrix(1 0 0 -1 0 554)"
                                        >
                                            <stop offset={0} style={{ stopColor: "#E09B3D" }} />
                                            <stop offset="0.3" style={{ stopColor: "#C74C4D" }} />
                                            <stop offset="0.6" style={{ stopColor: "#C21975" }} />
                                            <stop offset={1} style={{ stopColor: "#7024C4" }} />
                                        </linearGradient>
                                        <path
                                            className="insta-square"
                                            style={{ fill: "url(#SVGID_1_)" }}
                                            d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722
                           c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156
                           C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156
                           c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722
                           c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
                                        />
                                        <linearGradient
                                            id="SVGID_2_"
                                            gradientUnits="userSpaceOnUse"
                                            x1="275.517"
                                            y1="4.57"
                                            x2="275.517"
                                            y2="549.72"
                                            gradientTransform="matrix(1 0 0 -1 0 554)"
                                        >
                                            <stop offset={0} style={{ stopColor: "#E09B3D" }} />
                                            <stop offset="0.3" style={{ stopColor: "#C74C4D" }} />
                                            <stop offset="0.6" style={{ stopColor: "#C21975" }} />
                                            <stop offset={1} style={{ stopColor: "#7024C4" }} />
                                        </linearGradient>
                                        <path
                                            style={{ fill: "url(#SVGID_2_)" }}
                                            d="M275.517,133C196.933,133,133,196.933,133,275.516s63.933,142.517,142.517,142.517
                           S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083
                           s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z"
                                        />
                                        <linearGradient
                                            id="SVGID_3_"
                                            gradientUnits="userSpaceOnUse"
                                            x1="418.31"
                                            y1="4.57"
                                            x2="418.31"
                                            y2="549.72"
                                            gradientTransform="matrix(1 0 0 -1 0 554)"
                                        >
                                            <stop offset={0} style={{ stopColor: "#E09B3D" }} />
                                            <stop offset="0.3" style={{ stopColor: "#C74C4D" }} />
                                            <stop offset="0.6" style={{ stopColor: "#C21975" }} />
                                            <stop offset={1} style={{ stopColor: "#7024C4" }} />
                                        </linearGradient>
                                        <circle
                                            style={{ fill: "url(#SVGID_3_)" }}
                                            cx="418.31"
                                            cy="134.07"
                                            r="34.15"
                                        />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

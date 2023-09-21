import React, { useEffect, useState } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardFooter,
    MDBIcon,
    MDBBtn
} from "mdb-react-ui-kit";
import './ChatBox.scss'
import { Socket, io } from "socket.io-client";

interface Data {
    open: boolean
}
export default function ChatBox(data: Data) {
    const [socketClient, setSocketClient] = useState<null | Socket>(null)
    useEffect(() => {
        if (data.open) {
            /* Connect */
            setSocketClient(io(`http://127.0.0.1:3000`, {
                query: {
                    "token": localStorage.getItem("token")
                }
            }))
        } else {
            /* Disconnect */
            socketClient?.disconnect();
            setSocketClient(null)
        }
    }, [data.open])

    useEffect(() => {
        if (socketClient) {
            socketClient.on('connectStatus', (data: any) => {
                alert(data)
            })
        }
    }, [socketClient])
    return (
        <MDBContainer fluid className="py-5" style={{ backgroundColor: "transparent", zIndex: '10000' }}>
            <MDBRow className="d-flex justify-content-center">
                <MDBCol>
                    <MDBCard id="chat2" style={{ borderRadius: "15px", border: "1px solid grey" }}>
                        <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
                            <h5 className="mb-0">Chat With DW Store</h5>
                            <MDBBtn color="primary" size="sm" rippleColor="dark">
                                X
                            </MDBBtn>
                        </MDBCardHeader>
                        {/* Nơi Render Các Đoạn Chat */}
                        <div
                            style={{ position: "relative", height: "400px", overflowY: "auto" }}
                        >
                            <MDBCardBody>
                                <div className="d-flex flex-row justify-content-start">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                        alt="avatar 1"
                                        style={{ width: "45px", height: "100%" }}
                                    />
                                    <div>
                                        <p
                                            className="small p-2 ms-3 mb-1 rounded-3"
                                            style={{ backgroundColor: "#f5f6f7" }}
                                        >
                                            Hi
                                        </p>
                                        <p
                                            className="small p-2 ms-3 mb-1 rounded-3"
                                            style={{ backgroundColor: "#f5f6f7" }}
                                        >
                                            How are you ...???
                                        </p>
                                        <p
                                            className="small p-2 ms-3 mb-1 rounded-3"
                                            style={{ backgroundColor: "#f5f6f7" }}
                                        >
                                            What are you doing tomorrow? Can we come up a bar?
                                        </p>
                                        <p className="small ms-3 mb-3 rounded-3 text-muted">
                                            23:58
                                        </p>
                                    </div>
                                </div>

                                <div className="divider d-flex align-items-center mb-4">
                                    <p
                                        className="text-center mx-3 mb-0"
                                        style={{ color: "#a2aab7" }}
                                    >
                                        Today
                                    </p>
                                </div>

                                <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                                    <div>
                                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                            Hiii, I'm good.
                                        </p>
                                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                            How are you doing?
                                        </p>
                                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                            Long time no see! Tomorrow office. will be free on sunday.
                                        </p>
                                        <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                                            00:06
                                        </p>
                                    </div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                        alt="avatar 1"
                                        style={{ width: "45px", height: "100%" }}
                                    />
                                </div>

                                <div className="d-flex flex-row justify-content-start mb-4">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                        alt="avatar 1"
                                        style={{ width: "45px", height: "100%" }}
                                    />
                                    <div>
                                        <p
                                            className="small p-2 ms-3 mb-1 rounded-3"
                                            style={{ backgroundColor: "#f5f6f7" }}
                                        >
                                            Okay
                                        </p>
                                        <p
                                            className="small p-2 ms-3 mb-1 rounded-3"
                                            style={{ backgroundColor: "#f5f6f7" }}
                                        >
                                            We will go on Sunday?
                                        </p>
                                        <p className="small ms-3 mb-3 rounded-3 text-muted">
                                            00:07
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex flex-row justify-content-end mb-4">
                                    <div>
                                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                            That's awesome!
                                        </p>
                                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                            I will meet you Sandon Square sharp at 10 AM
                                        </p>
                                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                            Is that okay?
                                        </p>
                                        <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                                            00:09
                                        </p>
                                    </div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                        alt="avatar 1"
                                        style={{ width: "45px", height: "100%" }}
                                    />
                                </div>

                                <div className="d-flex flex-row justify-content-start mb-4">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                        alt="avatar 1"
                                        style={{ width: "45px", height: "100%" }}
                                    />
                                    <div>
                                        <p
                                            className="small p-2 ms-3 mb-1 rounded-3"
                                            style={{ backgroundColor: "#f5f6f7" }}
                                        >
                                            Okay i will meet you on Sandon Square
                                        </p>
                                        <p className="small ms-3 mb-3 rounded-3 text-muted">
                                            00:11
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex flex-row justify-content-end mb-4">
                                    <div>
                                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                            Do you have pictures of Matley Marriage?
                                        </p>
                                        <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                                            00:11
                                        </p>
                                    </div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                        alt="avatar 1"
                                        style={{ width: "45px", height: "100%" }}
                                    />
                                </div>

                                <div className="d-flex flex-row justify-content-start mb-4">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                        alt="avatar 1"
                                        style={{ width: "45px", height: "100%" }}
                                    />
                                    <div>
                                        <p
                                            className="small p-2 ms-3 mb-1 rounded-3"
                                            style={{ backgroundColor: "#f5f6f7" }}
                                        >
                                            Sorry I don't have. i changed my phone.
                                        </p>
                                        <p className="small ms-3 mb-3 rounded-3 text-muted">
                                            00:13
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex flex-row justify-content-end">
                                    <div>
                                        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                            Okay then see you on sunday!!
                                        </p>
                                        <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                                            00:15
                                        </p>
                                    </div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                        alt="avatar 1"
                                        style={{ width: "45px", height: "100%" }}
                                    />
                                </div>
                            </MDBCardBody>
                        </div>
                        <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                alt="avatar 3"
                                style={{ width: "45px", height: "100%" }}
                            />
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="exampleFormControlInput1"
                                placeholder="Type message"
                            ></input>
                            <a className="ms-1 text-muted" href="#!">
                                <MDBIcon fas icon="paperclip" />
                            </a>
                            <a className="ms-3 text-muted" href="#!">
                                <MDBIcon fas icon="smile" />
                            </a>
                            <a className="ms-3" href="#!">
                                <MDBIcon fas icon="paper-plane" />
                            </a>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
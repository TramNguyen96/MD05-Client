// import React, { useEffect, useState } from "react";
// import {
//     MDBContainer,
//     MDBRow,
//     MDBCol,
//     MDBCard,
//     MDBCardHeader,
//     MDBCardBody,
//     MDBCardFooter,
//     MDBIcon,
//     MDBBtn
// } from "mdb-react-ui-kit";
// import './ChatBox.scss'
// import { Socket, io } from "socket.io-client";
// import { useSelector } from "react-redux";
// import { StoreType } from "~/stores";
// import moment from 'moment';
// import { User } from "~/utils/Interfaces/User";

// interface Data {
//     open: boolean
// }
// export default function ChatBox(data: Data) {

//     const userStore = useSelector((store: StoreType) => {
//         return store.userStore
//     })

//     const [inputContent, setInputContent] = useState("");
//     const [messageData, setMessageData] = useState<any[]>([])

//     useEffect(() => {
//         console.log("inputContent", inputContent);

//     }, [inputContent])

//     const [socketClient, setSocketClient] = useState<null | Socket>(null)
//     useEffect(() => {
//         if (data.open) {
//             /* Connect */
//             setSocketClient(io(`http://127.0.0.1:3000`, {
//                 query: {
//                     "token": localStorage.getItem("token")
//                 }
//             }))
//         } else {
//             /* Disconnect */
//             socketClient?.disconnect();
//             setSocketClient(null)
//         }
//     }, [data.open])

//     useEffect(() => {
//         if (socketClient) {
//             socketClient.on('connectStatus', (data: any) => {
//                 // alert(data)
//             })
//         }

//         socketClient?.on("historyMessage", (data: any) => {
//             setMessageData(data)
//         })

//     }, [socketClient])

//     function formatData(data: any) {
//         let result = [];
//         for (let i in data) {
//             if (result.length == 0) {
//                 result.push({
//                     ...data[i],
//                     contents: [{
//                         content: data[i].content,
//                         time: data[i].time
//                     }]
//                 })
//             } else {

//                 if (data[i].type == result[result.length - 1].type) {
//                     result[result.length - 1].contents.push({
//                         content: data[i].content,
//                         time: data[i].time
//                     })
//                 } else {
//                     result.push({
//                         ...data[i],
//                         contents: [{
//                             content: data[i].content,
//                             time: data[i].time
//                         }]
//                     })
//                 }
//             }
//         }

//         return result;
//     }
//     return (
//         <MDBContainer fluid className="py-5" style={{ backgroundColor: "transparent", zIndex: '10000' }}>
//             <MDBRow className="d-flex justify-content-center">
//                 <MDBCol>
//                     <MDBCard id="chat2" style={{ borderRadius: "15px", border: "1px solid grey" }}>
//                         <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
//                             <h5 className="mb-0">Chat With DW Store</h5>
//                             <MDBBtn color="primary" size="sm" rippleColor="dark">
//                                 X
//                             </MDBBtn>
//                         </MDBCardHeader>
//                         {/* Nơi Render Các Đoạn Chat */}
//                         <div
//                             style={{ position: "relative", height: "400px", overflowY: "auto" }}
//                         >
//                             <MDBCardBody>
//                                 {
//                                     formatData(messageData).map(message => {
//                                         console.log("message", message);

//                                         if (message.type == "ADMIN") {
//                                             return (
//                                                 <>
//                                                     <div key={Math.random() * Date.now()} className="d-flex flex-row justify-content-start">
//                                                         <img
//                                                             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
//                                                             alt="avatar 1"
//                                                             style={{ width: "45px", height: "100%" }}
//                                                         />
//                                                         <div>
//                                                             {
//                                                                 message.contents.map((item: any) => (
//                                                                     <p
//                                                                         className="small p-2 ms-3 mb-1 rounded-3"
//                                                                         style={{ backgroundColor: "#f5f6f7" }}
//                                                                     >
//                                                                         {item.content}
//                                                                     </p>
//                                                                 ))
//                                                             }

//                                                             <p className="small ms-3 mb-3 rounded-3 text-muted">
//                                                                 {moment(new Date(Number(message.time))).format('LT')}
//                                                             </p>
//                                                         </div>
//                                                     </div>
//                                                 </>
//                                             )
//                                         } else {
//                                             return (
//                                                 <div className="d-flex flex-row justify-content-end">
//                                                     <div>
//                                                         {
//                                                             message.contents.map((item: any) => (
//                                                                 <p key={Date.now() * Math.random()}
//                                                                     className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
//                                                                     {item.content}
//                                                                 </p>
//                                                             ))
//                                                         }

//                                                         <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
//                                                             {moment(new Date(Number(message.time))).format('LT')}
//                                                         </p>
//                                                     </div>
//                                                     <img
//                                                         src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-shin-cau-be-but-chi-cute.png"
//                                                         alt="avatar 1"
//                                                         style={{ width: "45px", height: "100%" }}
//                                                     />
//                                                 </div>
//                                             )

//                                         }
//                                     })
//                                 }


//                             </MDBCardBody>
//                         </div>
//                         <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
//                             <img
//                                 src={`${userStore && (userStore! as User).avatar}`}
//                                 alt="avatar 3"
//                                 style={{ width: "45px", height: "100%" }}
//                             />
//                             <input
//                                 type="text"
//                                 className="form-control form-control-lg"
//                                 id="exampleFormControlInput1"
//                                 placeholder="Type message"
//                                 value={inputContent}
//                                 onChange={(e) => {

//                                     setInputContent(e.target.value)
//                                 }}
//                             ></input>
//                             <a className="ms-1 text-muted" href="#!">
//                                 <MDBIcon fas icon="paperclip" />
//                             </a>
//                             <a className="ms-3 text-muted" href="#!">
//                                 <MDBIcon fas icon="smile" />
//                             </a>
//                             <span onClick={() => {

//                                 socketClient?.emit('onMessage', {
//                                     socketId: socketClient?.id,
//                                     userId: (userStore! as User).id,
//                                     content: inputContent
//                                 })
//                             }} className="ms-3" style={{ cursor: "pointer" }}>
//                                 <MDBIcon fas icon="paper-plane" />
//                             </span>
//                         </MDBCardFooter>
//                     </MDBCard>
//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//     );
// }




import React, { useEffect, useRef, useState } from "react";
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
import './chatBox.scss'
import { Socket, io } from "socket.io-client";
import moment from 'moment';
import { useSelector } from "react-redux";
import { message } from "antd";
import { StoreType } from "~/stores";
interface Data {
    open: boolean,
    setOpenChat: Function
}
export default function ChatBox(data: Data) {
    const userStore = useSelector((store: StoreType) => {
        return store.userStore
    })
    const [socketClient, setSocketClient] = useState<null | Socket>(null)
    const [messageData, setMessageData] = useState<any[]>([])
    const [inputContent, setInputContent] = useState("");

    const [showSendIcon, setShowSendIcon] = useState(false);

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
            // console.log("vào client")
            socketClient.on('connectStatus', (data: any) => {
                // console.log("data", data)
                //alert(data)
            })

            socketClient.on('historyMessage', (data: any) => {
                // console.log("vào")
                // console.log("data", data);
                setMessageData(data);
            })
        }
    }, [socketClient])

    const sendMessage = () => {
        if (inputContent.trim() !== '') {
            socketClient?.emit('createMessage', {
                socketId: socketClient?.id,
                userId: (userStore! as any).id,
                content: inputContent,
            });
            setInputContent('');
        }
    };

    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    const chatContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messageData]);


    return (
        <MDBContainer fluid className="py-5" style={{ backgroundColor: "transparent" }}>
            <MDBRow className="d-flex justify-content-center">
                <MDBCol>
                    <MDBCard id="chat2" style={{ borderRadius: "15px", border: "1px solid grey" }}>
                        <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
                            <h5 className="mb-0">Chat with Us</h5>
                            <button className="close__chat__button" onClick={() => data.setOpenChat(false)} style={{ fontSize: '20px', backgroundColor: '#f7f7f7' }}>
                                <span className="material-symbols-outlined">
                                    <i className="fa-solid fa-minus"></i>
                                </span>
                            </button>
                        </MDBCardHeader>
                        {/* Nơi Render Các Đoạn Chat */}
                        <div
                            style={{ position: "relative", height: "400px", overflowY: "auto" }}
                        >
                            <div
                                ref={chatContainerRef}
                                style={{ position: "relative", height: "400px", overflowY: "auto" }}
                            >
                                <MDBCardBody>
                                    {
                                        messageData.map(message => {
                                            if (message.adminId != null) {
                                                return (
                                                    <div key={Math.random() * Date.now()} className="d-flex flex-row justify-content-start">
                                                        <img
                                                            src="https://t4.ftcdn.net/jpg/04/14/83/07/360_F_414830738_8D0XSvkNnTyoQD1KqiboRwYMhzqAaxmY.jpg"
                                                            alt="avatar 1"
                                                            style={{ width: "45px", height: "100%" }}
                                                        />
                                                        <div>
                                                            <p
                                                                key={Math.random() * Date.now()}
                                                                className="small p-2 ms-3 mb-1 rounded-3"
                                                                style={{ backgroundColor: "#f5f6f7" }}
                                                            >
                                                                {message.content}
                                                            </p>
                                                            <p className="small ms-3 mb-3 rounded-3 text-muted">
                                                                {moment(new Date(Number(message.time))).format('LT')}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={Math.random() * Date.now()} className="d-flex flex-row justify-content-end">
                                                        <div >
                                                            <p
                                                                key={Math.random() * Date.now()}
                                                                className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary"
                                                                style={{ backgroundColor: "#f5f6f7" }}
                                                            >
                                                                {message.content}
                                                            </p>
                                                            <p className="small ms-3 mb-3 rounded-3 text-muted">
                                                                {moment(new Date(Number(message.time))).format('LT')}
                                                            </p>
                                                        </div>
                                                        <img
                                                            src={`${userStore.data && userStore.data?.avatar}`}
                                                            alt="no Image"
                                                            style={{ width: "45px", height: "45px", borderRadius: "50%" }}
                                                        />
                                                    </div>
                                                )
                                            }
                                        })
                                    }

                                </MDBCardBody>
                            </div>
                        </div>
                        <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
                            <img
                                src={`${userStore.data && userStore.data?.avatar}`}
                                alt="avatar 3"
                                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                            />
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="exampleFormControlInput1"
                                placeholder="Type message"
                                value={inputContent}
                                onChange={(e) => {
                                    setInputContent(e.target.value)
                                }}
                                onKeyPress={handleKeyPress}
                            ></input>
                            <a className="ms-1 text-muted" href="#!">
                                <MDBIcon fas icon="paperclip" />
                            </a>
                            <a className="ms-3 text-muted" href="#!">
                                <MDBIcon fas icon="smile" />
                            </a>
                            {inputContent != "" ? <span onClick={() => {
                                sendMessage()
                                setInputContent("")
                            }} className="ms-3">
                                <MDBIcon fas icon="paper-plane active" />
                            </span> : <span onClick={() => {
                                sendMessage()
                                setInputContent("")
                            }} className="ms-3">
                                <MDBIcon fas icon="paper-plane" />
                            </span>}
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
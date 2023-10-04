import React, { useState } from 'react'
// import Test from '~/pages/homes/Test/Test'
import Carousel from '@pages/homes/components/Carousels/Carousel'
import Combo from '@pages/homes/components/Combo/Combo'
import ShopifyTemplate from '@pages/homes/components/ShopifyTemplates/ShopifyTemplate'
import Category from '@pages/homes/components/Category/Category'
import Offer from '@pages/homes/components/Offer/Offer'
import ChatBox from '~/pages/homes/chatbox/ChatBox'
import { Modal } from 'antd'
import CardCollection from '~/pages/homes/components/CardCollection/CardCollection'
import Seller from '~/pages/homes/components/Seller/Seller'

export default function RouteHomeBody() {
    const [openChat, setOpenChat] = useState(false);
    return (
        <div>
            {
                openChat == false
                    ? <span onClick={() => {
                        Modal.confirm({
                            content: "Open chat box with your account?",
                            onOk: () => {
                                setOpenChat(true)
                            }
                        })
                    }} style={{ position: "fixed", right: "30px", bottom: "30px", fontSize: '35px', fontWeight: 'bold', padding: '11px 18px', borderRadius: '50%', width: '70px', height: '70px', backgroundColor: '#ccc', zIndex: "9999" }}><i className="fa-regular fa-comment-dots" style={{ color: '#00081c' }}></i></span>
                    : <div style={{ width: "400px", position: "fixed", right: 0, bottom: 0 }}>
                        <ChatBox open={openChat} setOpenChat={setOpenChat} />
                    </div>
            }
            <Carousel />
            <CardCollection />
            <Seller />
            {/* New arrival*/}
            <ShopifyTemplate />
            {/* <Test /> */}
            <Combo />
            <Category />
            <Offer />
        </div>
    )
}

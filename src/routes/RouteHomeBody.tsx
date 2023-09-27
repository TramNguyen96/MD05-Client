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
                    ? <button onClick={() => {
                        Modal.confirm({
                            content: "Mở khung chat với tài khoản của bạn?",
                            onOk: () => {
                                setOpenChat(true)
                            }
                        })
                    }} style={{ position: "fixed", right: "50px", bottom: "50px", fontSize: '25px', fontWeight: 'bold', border: '1px solid #000', padding: '10px' }}>Open Chat</button>
                    : <div style={{ width: "400px", position: "fixed", right: 0, bottom: 0 }}>
                        <ChatBox open={openChat} />
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

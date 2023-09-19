import React from 'react'
// import Test from '~/pages/homes/Test/Test'
import Carousel from '@pages/homes/components/Carousels/Carousel'
import Combo from '@pages/homes/components/Combo/Combo'
import ShopifyTemplate from '@pages/homes/components/ShopifyTemplates/ShopifyTemplate'
import Category from '@pages/homes/components/Category/Category'
import Offer from '@pages/homes/components/Offer/Offer'

export default function RouteHomeBody() {
    return (
        <div>
            <Carousel />
            {/* New arrival*/}
            <ShopifyTemplate />
            {/* <Test /> */}
            <Combo />
            <Category />
            <Offer />
        </div>
    )
}

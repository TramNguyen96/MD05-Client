import { useEffect, useState } from 'react'
import './ProductDetail.scss'
// import api from '@/services/apis'
import { useParams } from 'react-router-dom'
// import currency from "currency.js";


interface Product {
    id: string;
    name: string;
    avatar: string;
    price: number;
    des: string;
    categoryId: string;
    productPictures: {
        id: string;
        path: string;
    }[]
}

interface CartItem {
    productId: string;
    quantity: number;
}

export default function ProductDetail() {
    const { productId } = useParams() as { productId: string };

    const [productDetail, setProductDetail] = useState<Product | null>(null)

    const [avatar, setAvatar] = useState('');

    const [quantity, setQuantity] = useState(1);

    // useEffect(() => {
    //     api.productApi.findById(productId)
    //         .then(res => {
    //             setProductDetail(res.data.data)
    //             avatar != res.data.data.avatar ? setAvatar(avatar) : setAvatar(res.data.data.avatar)

    //         })
    //         .catch(err => {
    //             console.log("err", err);

    //             alert("Network Server")
    //         })
    // }, [])

    // useEffect(() => {
    //     console.log("productDetail", productDetail);

    // })

    // function handleAddToCart(productId: string) {
    //     let carts: CartItem[] = JSON.parse(localStorage.getItem("carts") ?? "[]");
    //     if (carts.length == 0) {
    //         // cart rỗng
    //         carts.push({
    //             productId,
    //             quantity: quantity
    //         })
    //     } else {
    //         // cart có sp
    //         let flag: boolean = false;
    //         carts = carts.map(item => {
    //             if (item.productId == productId) {
    //                 item.quantity += 1
    //                 flag = true;
    //             }
    //             return item
    //         })
    //         if (!flag) {
    //             carts.push({
    //                 productId,
    //                 quantity: quantity
    //             })
    //         }
    //     }
    //     localStorage.setItem("carts", JSON.stringify(carts)) // save to local
    // }


    return (
        <div className='product_detail'>
            <div className='product_detail_gallery'>
                <div
                    className="ecommerce-gallery"
                    data-mdb-zoom-effect="true"
                    data-mdb-auto-height="true"
                >
                    <div className="row shadow-5" style={{ width: '450px', height: '400px' }}>
                        <div className="col-12 avatar_large">
                            <div className="lightbox bg-image hover-zoom">
                                <img
                                    // src={avatar == '' ? productDetail?.avatar : avatar}
                                    src='https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fproduct-test%2Fe52b88ce20896801a51f5602a7740ee0493c0f31_800x800.png?alt=media&token=1b6dccff-9f8f-40e5-a06b-816aa73b55cb'
                                    alt="Gallery image 1"
                                    className="ecommerce-gallery-main-img active w-100"
                                />
                            </div>
                        </div>
                        {/* {
                            productDetail?.productPictures.map((picture, index) => (
                                <div className="col-3 mini_pictures" style={{ marginTop: '0.5em' }}>
                                    <img onClick={() => {
                                        setAvatar(picture?.path);
                                    }}
                                        src={picture?.path}
                                        data-mdb-img={picture?.path}
                                        alt="Gallery image 1"
                                        className="active w-100"
                                        data-picture={JSON.stringify(picture)}
                                    />
                                </div>
                            ))
                        } */}

                        <div className="col-3 mini_pictures" style={{ marginTop: '0.5em' }}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fproduct-test%2Fd965a25ddf4dca38d130d8c8e6efb05a451659c2.png?alt=media&token=8e3a9d79-a1b9-4035-8662-92b9f088f900"
                                data-mdb-img="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fproduct-test%2Fd965a25ddf4dca38d130d8c8e6efb05a451659c2.png?alt=media&token=8e3a9d79-a1b9-4035-8662-92b9f088f900"
                                alt="Gallery image 1"
                                className="active w-100"
                            // data-picture={}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fproduct-test%2F59b74c3a450bcb740430b7483593e4efb4d2e2bf.png?alt=media&token=18bbc6a1-a2a2-4762-8651-8bb28f6210cd"
                                data-mdb-img="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fproduct-test%2F59b74c3a450bcb740430b7483593e4efb4d2e2bf.png?alt=media&token=18bbc6a1-a2a2-4762-8651-8bb28f6210cd"
                                alt="Gallery image 2"
                                className="active w-100"
                            // data-picture={}
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fproduct-test%2F9de7c7967dbbbad224ba4ec3f69e1aca52814c36.png?alt=media&token=45ea35f6-8158-42e1-90f6-cf694ea81fe7"
                                data-mdb-img="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fproduct-test%2F9de7c7967dbbbad224ba4ec3f69e1aca52814c36.png?alt=media&token=45ea35f6-8158-42e1-90f6-cf694ea81fe7"
                                alt="Gallery image 3"
                                className="active w-100"
                            // data-picture={}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className='content'>
                {/* <div className='content-name'>{productDetail?.name}</div> */}
                {/* <div className='content-price'>{currency(productDetail?.price!).format()}</div> */}
                <div className='content-quantity'>
                    <button type="button"
                    // onClick={() => {
                    //     if (quantity == 1) {
                    //         alert("You can't buy less than one !")
                    //     }
                    //     if (quantity > 1) {
                    //         setQuantity(quantity - 1)
                    //     }
                    // }}
                    >-</button>
                    <span>{quantity}</span>
                    <button type="button"
                    // onClick={() => {

                    //     setQuantity(quantity + 1)

                    // }}
                    >+</button><br />
                </div>
                <div className='content-text-des' >
                    <p className='content-text-des-title'>DESCRIPTION</p>
                    <p className='content-text-des-detail'>{productDetail?.des}</p>
                </div>
                <div className='add-cart-btn'>
                    <button
                        // onClick={() => {
                        //     handleAddToCart(productDetail?.id!)
                        //     window.location.href = '/carts'
                        // }}
                        type="button"

                    >ADD TO BAGS</button>
                </div>

                <div className='content-text-care'>
                    <p className='content-text-care-title'>DETAILS & CARE</p>
                    <p className='content-text-care-detail'>
                        <ul>
                            <li>Delicate Dry Clean Only</li>
                            <li>We Recommend Cleaning Directly After the Big Day to Avoid Stains</li>
                        </ul>
                    </p>
                </div>

                <div className='content-text-care'>
                    <p className='content-text-care-title'>DELIVERY & RETURNS</p>
                    <p className='content-text-care-detail'>
                        Please visit our Delivery & Returns  page for all shipping costs and full information.
                    </p>
                </div>
            </div>

        </div>

    )
}
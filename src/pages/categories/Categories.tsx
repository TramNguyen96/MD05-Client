import { useEffect, useState } from 'react'
import './Categories.scss'
import api from '~/services/api'
import { Modal } from 'antd'
import { Product } from '~/utils/Interfaces/Product'
import { useDispatch, useSelector } from 'react-redux'
import { StoreType } from '~/stores'
import { productAction } from '~/stores/slices/product.slice'
import { Link, useNavigate } from 'react-router-dom'

export default function Categories() {

    const navigate = useNavigate()
    const [product, setProduct] = useState<Product | null>(null)
    const dispatch = useDispatch();
    const productStore = useSelector((store: StoreType) => store.productStore)

    useEffect(() => {
        api.productApi.findAll()
            .then(res => {
                dispatch(productAction.setDataApi(res.data.data))
            })
            .catch(err => {
                console.log("err", err);

            })
    }, [])

    useEffect(() => {
        console.log("productStore", productStore.data);

    }, [productStore.data])

    return (
        <div className='main'>
            {
                productStore.data?.map((product, index) => (
                    <div className="items" key={product.id} onClick={() => navigate(`/product/${product.id}`)} style={{ cursor: 'pointer' }}>
                        <div className="img-box">
                            {
                                <img
                                    src={product.options[0].pictures[0].avatar}
                                    alt="Awesome Sunglasses"
                                />
                            }

                        </div>
                        <div className="details">
                            <h2 className='details-h2'>
                                {product.name}
                                <br />
                                <span>Men's Collection</span>
                            </h2>
                            {
                                product.options.map(optionProduct => (
                                    <div key={optionProduct.id} className="price">{optionProduct.price}</div>
                                ))
                            }

                            <label>Color</label>
                            <ul className="colors">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <a className='details-a' href="#">Add to cart</a>
                        </div>
                    </div>
                ))
            }
            {/* <div className="items">
                <div className="img-box">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2Fproduct-test%2Fe52b88ce20896801a51f5602a7740ee0493c0f31_800x800.png?alt=media&token=1b6dccff-9f8f-40e5-a06b-816aa73b55cb"
                        alt="Awesome Sunglasses"
                    />
                </div>
                <div className="details">
                    <h2 className='details-h2'>
                        Awesome Sunglasses
                        <br />
                        <span>Men's Collection</span>
                    </h2>
                    <div className="price">149$</div>
                    <label>Size</label>
                    <ul>
                        <li>55-14</li>
                        <li>58-14</li>
                        <li>62-14</li>
                    </ul>
                    <label>Color</label>
                    <ul className="colors">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <a className='details-a' href="#">Add to cart</a>
                </div>
            </div> */}

        </div>
    )
}

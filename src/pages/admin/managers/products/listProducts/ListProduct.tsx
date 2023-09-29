import { useEffect, useState } from 'react'
import './ListProduct.scss'
import api from '~/services/api'
import ProductOption from './productOptions/ProductOption';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '~/stores';
import { productAction } from '~/stores/slices/product.slice';
import { Product } from '~/utils/Interfaces/Product';

export default function ListProduct() {

    const [productId, setProductId] = useState<string | null>(null);

    const dispatch = useDispatch()
    const productStore = useSelector((store: StoreType) => {
        return store.productStore
    })

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
        console.log("productId", productId);

    }, [productId])


    return (
        <div>
            <div className='list_product'>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr className='list_product_thead'>
                            <th style={{ width: '5%' }}>#</th>
                            <th style={{ width: '25%' }}>Product Name</th>
                            {/* <th style={{ width: '15%' }}>Price</th> */}
                            <th style={{ width: '20%' }}>List Pictures</th>
                            <th style={{ width: '20%' }}>Collection</th>
                            <th style={{ width: '20%' }}>Product ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productStore.data?.map((product: Product, index) => (
                                <tr className='list_product_tbody' key={product.id}>

                                    <td>{index + 1}</td>
                                    <td> {product.name}</td>
                                    {/* <td>{product.opti}</td> */}

                                    <td>

                                        <button onClick={() => {
                                            setProductId(product.id)
                                        }} type="button" className="btn btn-primary">
                                            {
                                                productId && <ProductOption productId={productId} setProductId={setProductId} />
                                            }
                                        </button>


                                        {/* {
                                            product.productPictures?.map((picture) => (
                                                <img src={picture.path} />
                                            ))
                                        }
                                        <img src={product.avatar} alt="" /> */}
                                    </td>

                                    <td>{product.categoryId}</td>
                                    <td>{product.id}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

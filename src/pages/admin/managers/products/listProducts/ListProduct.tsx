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
        // console.log("productId truoc", productId);
    }, [productId])

    useEffect(() => {
        console.log("productStore.data", productStore.data);
    }, [productStore.data])


    return (
        <div>
            <div className='list_product'>
                <table className="table table-hover text-center">
                    <thead className="thead-dark">
                        <tr className='list_product_thead'>
                            <th style={{ width: '10%' }}>#</th>
                            <th style={{ width: '30%' }}>Product Name</th>
                            {/* <th style={{ width: '15%' }}>Price</th> */}
                            <th style={{ width: '15%' }}>List Pictures</th>
                            <th style={{ width: '15%' }}>Collection</th>
                            <th style={{ width: '15%' }}>Product ID</th>
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
                                        }} type="button" className="btn btn-outline-danger">
                                            {/* <ProductOption productId={productId} setProductId={setProductId} /> */}

                                            Add Option
                                        </button>
                                    </td>

                                    <td>{product.categoryId}</td>
                                    <td>{product.id}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
            {
                productId && <ProductOption productId={productId} setProductId={setProductId} />
            }
        </div>
    )
}

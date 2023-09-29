import './Products.scss'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '~/services/api'
import { StoreType } from '~/stores'
import { productAction } from '~/stores/slices/product.slice'
import { Category } from '~/utils/Interfaces/Category'
import { Product } from '~/utils/Interfaces/Product'
import { User } from '~/utils/Interfaces/User'
import AddProduct from './addProducts/AddProduct'
import ListProduct from './listProducts/ListProduct'

interface Picture {
    file: File;
    url: string;
}

export default function Products() {
    const userStore = useSelector((store: StoreType) => {
        return store.userStore
    })

    const productStore = useSelector((store: StoreType) => {
        return store.productStore
    })

    const dispatch = useDispatch()

    const [categories, setCategories] = useState([]);
    const [pictures, setPictures] = useState<Picture[]>([]);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [load, setLoad] = useState(false);
    const [formValues, setFormValues] = useState({
        name: "",
        price: "",
        des: ""
    });

    useEffect(() => {
        api.categoryApi.findAll()
            .then(res => {
                setCategories(res.data.data)
            })
            .catch(err => {
                console.log("err", err);
            })

        api.productApi.findAll()
            .then(res => {
                dispatch(productAction.setDataApi(res.data.data))
            })
            .catch(err => {
                console.log("err", err);
            })
    }, [])

    async function addNewProduct(e: React.FormEvent) {
        e.preventDefault();

        let newProduct = {
            categoryId: (e.target as any).categoryId.value,
            name: (e.target as any).name.value,
            des: (e.target as any).des.value,
            price: (e.target as any).price.value,
        }

        api.productApi.create(newProduct)
            .then(res => {
                dispatch(productAction.insertProduct(res.data.data))
            })
            .catch(err => {
                console.log("err", err);
            })
    }

    return (
        <div>
            <div className='pills' style={{ paddingTop: '5.7em', paddingLeft: '15px' }}>
                {/* Pills navs */}
                <ul className="nav nav-pills mb-3" id="ex1" role="tablist" style={{ borderBottom: '1px solid #ccc', backgroundColor: '#e8e3e3' }} >
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link active"
                            id="ex1-tab-1"
                            data-mdb-toggle="pill"
                            href="#ex1-pills-1"
                            role="tab"
                            aria-controls="ex1-pills-1"
                            aria-selected="true"
                            style={{ fontWeight: 'bold', fontSize: '17px', marginTop: '0.8em' }}
                        >
                            Add New Product
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id="ex1-tab-2"
                            data-mdb-toggle="pill"
                            href="#ex1-pills-2"
                            role="tab"
                            aria-controls="ex1-pills-2"
                            aria-selected="false"
                            style={{ fontWeight: 'bold', fontSize: '17px', marginTop: '0.8em' }}

                        >
                            List Product
                        </a>
                    </li>
                    {/* <li className="nav-item" role="presentation">
                        <a
                            className="nav-link"
                            id="ex1-tab-3"
                            data-mdb-toggle="pill"
                            href="#ex1-pills-3"
                            role="tab"
                            aria-controls="ex1-pills-3"
                            aria-selected="false"
                            style={{ fontWeight: 'bold', fontSize: '20px' }}

                        >
                            Tab 3
                        </a>
                    </li> */}
                </ul>
                {/* Pills navs */}
                {/* Pills content */}
                <div className="tab-content" id="ex1-content">
                    <div
                        className="tab-pane fade show active"
                        id="ex1-pills-1"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-1"
                    >
                        <AddProduct />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="ex1-pills-2"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-2"
                    >
                        <ListProduct />
                    </div>
                    {/* <div
                        className="tab-pane fade"
                        id="ex1-pills-3"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-3"
                    >
                        Tab 3 content
                    </div> */}
                </div>
                {/* Pills content */}

            </div>

        </div>
    )
}




import './AddProduct.scss'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import api from '~/services/api'
import { StoreType } from '~/stores'
import { productAction } from '~/stores/slices/product.slice'
import { Category } from '~/utils/Interfaces/Category'
import { Product } from '~/utils/Interfaces/Product'
import { User } from '~/utils/Interfaces/User'

interface Picture {
    file: File;
    url: string;
}

export default function AddProduct() {
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
            <div className='product-manager-content'>
                <h2 className='manager_product_title'>ADD NEW PRODUCT</h2>
                <div >
                    <form
                        onSubmit={(e) => {
                            addNewProduct(e);
                        }}
                    >
                        <div className='manager_product'>
                            <div className='manager_product_form'>
                                <label htmlFor="">Product Name</label><br />
                                <input type="text" name="name" value={formValues.name}
                                    onChange={(e) => {
                                        setFormValues({ ...formValues, name: e.target.value });
                                    }} /><br />

                                <label htmlFor="">Price</label><br />
                                <input type="number" name="price" value={formValues.price}
                                    onChange={(e) => {
                                        setFormValues({ ...formValues, price: e.target.value });
                                    }} /><br />

                                <label htmlFor="">Description</label><br />
                                <input type="text" name="des" value={formValues.des}
                                    onChange={(e) => {
                                        setFormValues({ ...formValues, des: e.target.value });
                                    }} /><br />

                                <label htmlFor="">Collection: </label>
                                <select name='categoryId'>
                                    {
                                        categories.map(category => <option key={Math.random() * Date.now()} value={(category as Category).id}>{(category as Category).title}</option>)
                                    }
                                </select><br />
                            </div>

                            <div className='manager_product_picture'>
                                {/* <div className='manager_product_picture_upload'>
                                        <label htmlFor="images" className="drop-container" id="dropcontainer">
                                            <span className="drop-title">Drop files here</span>
                                            or
                                            <input type="file" name='imgs' multiple id="images" accept="image/*"
                                                onChange={(e) => {
                                                    if (e.target.files) {
                                                        if (e.target.files.length > 0) {
                                                            let tempPictures: Picture[] = [];
                                                            for (let i in e.target.files) {
                                                                if (i == "length") {
                                                                    break;
                                                                }
                                                                tempPictures.push({
                                                                    file: e.target.files[i],
                                                                    url: URL.createObjectURL(e.target.files[i])
                                                                })
                                                            }
                                                            console.log("tempPictures", tempPictures);

                                                            setPictures(tempPictures);

                                                            e.target.value = "";
                                                        }
                                                    }
                                                }}
                                            />
                                        </label>

                                        <div className='manager_product_picture_renderpicture'>
                                            {
                                            pictures.map((picture, index) => (
                                                <img key={Date.now() * Math.random()} src={`${picture.url}`} />
                                            ))
                                        }
                                        </div>
                                    </div> */}
                            </div>
                        </div>

                        <div>
                            {/* {
                                load ?? <Loading />
                            } */}
                            <button type='submit'
                                className='btn_submit register_form_btn'
                            // className={`${load && 'active'} btn_submit register_form_btn `}
                            >


                                <div className='btn_loading'>
                                    {/* <Spin indicator={antIcon} /> */}
                                </div>
                                Add New Product
                            </button>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}


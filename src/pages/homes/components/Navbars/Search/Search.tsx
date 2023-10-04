import { useEffect, useState } from 'react';
import './Search.scss'
import { SearchOutlined } from '@ant-design/icons'
import api from '~/services/api';
import { Product } from '~/utils/Interfaces/Product';
import { Link, useNavigate } from 'react-router-dom';
import currency from 'currency.js';


export default function Search() {
    let timeOut: string | number | NodeJS.Timeout | undefined;
    const [searchStatus, setSearchStatus] = useState(false)
    const [searchData, setSearchData] = useState<Product[]>([])

    const navigate = useNavigate()

    async function searchKeyWord(searchValue: string) {
        clearTimeout(timeOut);
        timeOut = setTimeout(async () => {
            setSearchStatus(true);
            try {
                if (searchStatus) {
                    return;
                }
                await api.productApi.search(searchValue)
                    .then(res => {
                        console.log("res", res.data);

                        if (res.status == 200) {
                            setSearchStatus(false);
                            setSearchData(res.data.data);
                        }
                    })
                    .catch(err => {
                        console.log("err", err);

                    })

            } catch (err) {
                console.log("Error calling API:", err);
            }
        }, 250);
    }

    useEffect(() => {
        console.log("searchData", searchData);
    }, [])

    return (
        <div>
            <>
                <a data-bs-toggle="modal" data-bs-target="#myModal"><i style={{ color: '#ccc' }} className="fa-solid fa-magnifying-glass"></i></a>

                <>
                    {/* The Modal */}
                    <div className="modal" id="myModal">
                        <div className="modal-dialog modal-fullscreen">
                            <div className="modal-content" style={{ width: '1440px' }}>
                                {/* Modal Header */}
                                <div className="modal-header">
                                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {

                                        searchKeyWord(e.target.value)

                                    }}
                                        type="text" placeholder='SEARCH FOR ANYTHING ... ' style={{ width: '100%', height: '50px', padding: '5px', outline: 'none', fontSize: '20px' }} />
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                </div>
                                {/* Modal body */}
                                <div className="modal-body">
                                    {
                                        searchData.map((product) => (
                                            <div className="products" key={product.id} onClick={() => window.open("/product/" + product.id, "_blank")} style={{ cursor: 'pointer' }}>
                                                <div className="img-box">

                                                    <img src={product.options[0].pictures[0].avatar} alt="" />

                                                </div>
                                                <div className="details">
                                                    <div style={{ width: '140px' }}>
                                                        <p className='details-h2' >
                                                            {product.name}
                                                            {/* <span>{product.options[0].category.title}</span> */}
                                                        </p>
                                                    </div>

                                                    <div className="price">{currency(product.options[0].price).format()}</div>

                                                    <div>
                                                        <label>Color</label>
                                                        <ul className="colors">
                                                            <li></li>
                                                            <li></li>
                                                            <li></li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <Link className='details-a' to={`/product/${product.id}`} style={{ textDecoration: 'none', color: '#fff' }}>View More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                {/* Modal footer */}
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-dark"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>


            </>

        </div>
    )
}

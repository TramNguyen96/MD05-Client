import './Search.scss'
import { SearchOutlined } from '@ant-design/icons'


export default function Search() {
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
                                    <input type="text" placeholder='SEARCH FOR ANYTHING ... ' style={{ width: '100%', height: '50px', padding: '5px', outline: 'none', fontSize: '20px' }} />
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                </div>
                                {/* Modal body */}
                                <div className="modal-body">Modal body..</div>
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

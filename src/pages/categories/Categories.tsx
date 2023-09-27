import './Categories.scss'

export default function Categories() {
    return (
        <div>
            <div className="items">
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
                    {/* <label>Size</label>
                    <ul>
                        <li>55-14</li>
                        <li>58-14</li>
                        <li>62-14</li>
                    </ul> */}
                    <label>Color</label>
                    <ul className="colors">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <a className='details-a' href="#">Add to cart</a>
                </div>
            </div>

        </div>
    )
}

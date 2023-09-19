import './Carousel.scss';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
    return (
        <div>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2FCarousel%2Fcarousel_1.jpg?alt=media&token=dd2c6039-13c5-4a21-a5b6-7c40c1d88890'
                    alt='...'
                >
                    {/* <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2FCarousel%2Fcarousel_2.jpg?alt=media&token=9445f21f-6b40-4e76-b717-ab65207e1413'
                    alt='...'
                >
                    {/* <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://firebasestorage.googleapis.com/v0/b/md05-nestjs.appspot.com/o/images%2FCarousel%2Fcarousel_3.jpg?alt=media&token=32591506-837c-435a-8684-b86106b24c1d'
                    alt='...'
                >
                    {/* <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </MDBCarouselItem>
            </MDBCarousel>

            <div className='supportInfor'>
                <div className='supportInfor_item'>
                    <i className="fa-solid fa-truck-fast"></i>
                    <p>Free Shipping</p>
                </div>
                <div className='supportInfor_item'>
                    <i className="fa-brands fa-dropbox"></i>
                    <p>Free Return</p>
                </div>
                <div className='supportInfor_item'>
                    <i className="fa-solid fa-clock-rotate-left"></i>
                    <p>2 years Warranty</p>
                </div>
            </div>

        </div>
    )
}

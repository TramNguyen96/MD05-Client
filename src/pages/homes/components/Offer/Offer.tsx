import './Offer.scss'

export default function Offer() {
    return (
        <div className='offerFooter'>
            <div className='offerFooter-content'>
                <h4>JOIN THE DW MOVEMENT AND ENJOY 10% OFF YOUR FIRST ORDER</h4>
                <p>Be the first to hear about exclusive offers, special editions, and new launches from the Daniel Wellington community. Sign up today, and you'll receive 10% off your first order.</p>
                <input className="form-control" type="text" placeholder="Email" />
                <button>SUBSCRIBE</button><br />
                <small>By signing up, I confirm that I’m 16 years or older, that I want to receive personalised marketing by email and that I have read and understood Daniel Wellington’s
                    <a href="#">Privacy Policy</a>
                    .</small>
            </div>
        </div>
    )
}

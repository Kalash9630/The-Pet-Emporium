import React from 'react'
import { Link } from 'react-router-dom'
import "./Buy.css"
import dog from './image/dog.png'

const Buy = () => {
    return (
        <>
            <div className="wrapper">
                <div className="product-img">
                    <img src={dog} height="420" width="327" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>Dog Food</h1>
                        <h2>Air Dried dog food</h2>
                        <p>Our dog food is crafted with premium,<br /> of peeled fruits and vegetables as<br /> wholesome ingredients for optimal nutrition.<br /> Tailored to meet your dog's dietary needs,<br /> it's a delicious and balanced meal every time. </p>
                    </div>
                    <div className="product-price-btn">
                        <p className="span1">$ 7.0</p>
                        <Link className='proceed' to="/Shop/dogfood" style={{ textDecoration: "none", textAlign: 'center', lineHeight: '50px' ,fontFamily:'serif'}}>Checkout</Link>
                    </div>
                    <div style={{ marginTop: "3%", float: "right", fontSize: "12px" }}><Link to="/">Back to Home Page</Link></div>
                </div>
            </div>
        </>
    );
}
export default Buy;
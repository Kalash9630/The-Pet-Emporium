import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import "./Shop.css"
import card_img from './image/card_img.png'
import { useState } from 'react';
import axios from 'axios';

const Shop = () => {
    const [fullname, setFullname] = useState('');
    const [emailorder, setEmailorder] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [nameoncard, setNameoncard] = useState('');
    const [cardnumber, setCardnumber] = useState('');
    const [expmonth, setExpmonth] = useState('');
    const [expyear, setExpyear] = useState('');
    const [cvv, setCvv] = useState('');
    const [orderplaced, setOrderPlaced] = useState();
    let {productname} = useParams();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/Shop', {
                productname,
                fullname,
                emailorder,
                address,
                city,
                state,
                pincode,
                nameoncard,
                cardnumber,
                expmonth,
                expyear,
                cvv,
            });
            setFullname('');
            setEmailorder('');
            setAddress('');
            setCity('');
            setState('');
            setPincode('');
            setNameoncard('');
            setCardnumber('');
            setExpmonth('');
            setExpyear('');
            setCvv('');
            if (response.status == 200) {
                setOrderPlaced(true)
            }
        }
        catch (error) {
            console.error('Error in shop', error);
            alert('An error occurred in shopping page.');
        }
    };
    return (
        <div>
            {orderplaced && <Navigate to='/Thank'/>}
            <div className="container11">

                <form onSubmit={handleSignup} method='post'>

                    <div className="row1">

                        <div className="col1">

                            <h3 className="title">billing address</h3>

                            <div className="inputBox">
                                <span className='shop-span'>full name :</span>
                                <input required type="text" onChange={(e) => setFullname(e.target.value)} />
                            </div>
                            <div className="inputBox">
                                <span className='shop-span'>email :</span>
                                <input required type="email" onChange={(e) => setEmailorder(e.target.value)} />
                            </div>
                            <div className="inputBox">
                                <span className='shop-span'>address :</span>
                                <input required type="text" onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="inputBox">
                                <span className='shop-span'>city :</span>
                                <input required type="text" onChange={(e) => setCity(e.target.value)} />
                            </div>

                            <div className="flex">
                                <div className="inputBox">
                                    <span className='shop-span'>state :</span>
                                    <input required type="text" onChange={(e) => setState(e.target.value)} />
                                </div>
                                <div className="inputBox">
                                    <span className='shop-span'>Pincode :</span>
                                    <input required type="text" onChange={(e) => setPincode(e.target.value)} />
                                </div>
                            </div>

                        </div>

                        <div className="col1">

                            <h3 className="title">payment</h3>

                            <div className="inputBox">
                                <span className='shop-span'>cards accepted :</span>
                                <img src={card_img} alt="" />
                            </div>
                            <div className="inputBox">
                                <span className='shop-span'>name on card :</span>
                                <input required type="text" onChange={(e) => setNameoncard(e.target.value)} />
                            </div>
                            <div className="inputBox">
                                <span className='shop-span'>credit card number :</span>
                                <input required type="number" placeholder="xxxx-xxxx-xxxx-xxxx" onChange={(e) => setCardnumber(e.target.value)} />
                            </div>
                            <div className="inputBox">
                                <span className='shop-span'>exp month :</span>
                                <input required type="text" placeholder='xx' onChange={(e) => setExpmonth(e.target.value)} />
                            </div>

                            <div className="flex">
                                <div className="inputBox">
                                    <span className='shop-span'>exp year :</span>
                                    <input required type="number" placeholder='xx' onChange={(e) => setExpyear(e.target.value)} />
                                </div>
                                <div className="inputBox">
                                    <span className='shop-span'>CVV :</span>
                                    <input required type="text" placeholder="xxx" onChange={(e) => setCvv(e.target.value)} />
                                </div>
                            </div>

                        </div>

                    </div>
                    <button type='submit' className='submit-btn'>Click to Order</button>
                    <div style={{ marginTop: "3%", float: "right", fontSize: "15px" }}><Link to="/">Back to Home Page</Link></div>
                </form>

            </div>
        </div>
    );
}
export default Shop;
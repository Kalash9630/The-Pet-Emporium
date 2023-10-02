import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cart.css'
import dogfood from './image/dog.png'
import catfood from './image/cat1.png'

function Cart() {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        // Fetch data from the server when the component mounts
        const temp = localStorage.getItem('loggedInUser');

        axios.post('https://the-pet-emporium-server.onrender.com/Cart', { temp })
            .then(response => {
                // Set the fetched data in the component state
                setCartData(response.data);
                // console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-gray fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mt-3 mb-2" style={{ paddingLeft: "85%" }} id="mynavbar">
                        <Link className="btn-login" to="/" style={{ textDecoration: "none", color: '#130f40 ' }}>Back to Home Page</Link>
                    </div>
                </div>
            </nav>


            {(cartData && cartData.length !== 0) ?
                <div className='container-fluid' style={{ backgroundColor: 'darkgrey', height: '100vh', width: '100%' }} >
                    < h1 className="text-center" style={{ paddingTop: '3%', fontSize: '4vw', color: '#333333' }
                    }> Past Orders</h1 >
                    <div className="container mt-5" style={{ width: '70%' }}>
                        <table rules="none" cellSpacing="100px" style={{ marginLeft: '43%', marginBottom: '3%' }}>
                            <tr  >
                                <th style={{ color: 'white' }}><h2 style={{ fontSize: '2.5vw' }}>Item</h2></th>
                                <th style={{ paddingLeft: '190%' }}><h2 style={{ fontSize: "2.5vw", color: 'white' }}>Price</h2></th>
                            </tr>
                        </table>

                        {cartData.map((item, index) => (

                            <div className="card mt-5" style={{ borderRadius: "26px", boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)' }}>
                                <div className="image" >
                                    {
                                        (item.productname === 'dogfood') ?
                                            <img src={dogfood} alt="X" style={{ width: '35%', borderRadius: '26px', marginLeft: '7%' }} /> : <img src={catfood} alt="X" style={{ width: '35%', borderRadius: '26px', marginLeft: '11%' }} />
                                    }
                                </div>
                                <div className="info" style={{ marginLeft: '-25%' }}>
                                    <div className="productname" >
                                        <h2 style={{ fontWeight: 'bolder', fontSize: '2.7vw', textTransform: 'uppercase' }}>{item.productname}</h2>
                                    </div>
                                    <div className="date" style={{ fontSize: '1.5vw' }}><span style={{ color: 'gray' }}>Date:</span> <strong>{item.date.substring(0, 10)}</strong></div>
                                </div>
                                <div className="price" style={{ marginRight: '13%', color: 'gray' }}><h2 style={{ fontSize: ' 2.7vw' }}>$ 7  </h2></div>
                            </div>
                        ))}

                    </div>
                </div> : < h1 className="text-center" style={{ paddingTop: '3%', fontSize: '4vw', color: '#333333' }
                }> No Past Orders to Show</h1 >
            }

        </>



    );
}

export default Cart;

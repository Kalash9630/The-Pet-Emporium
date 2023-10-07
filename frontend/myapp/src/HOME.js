import React from 'react'
import './HOME.css'
import about_img from './image/about_img.png'
import bottom_wave from './image/bottom_wave.png'
import cat_food from './image/cat_food.png'
import dog_food from './image/dog_food.png'
import shop_now_cat from './image/shop_now_cat.png'
import shop_now_dog from './image/shop_now_dog.png'
import top_wave from './image/top_wave.png'
import contact_img from './image/contact_img.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import profile from './image/profile.png'
import logo from './image/logo.png'


const HOME = () => {
    const [emailname, setEmailname] = useState('');
    const [emailmessage, setEmailmessage] = useState('');
    const [emailtext, setEmailtext] = useState('');
    const [emailcontact, setEmailcontact] = useState('');

    const handleEmailmessage = async (e) => {
        e.preventDefault();
        if (emailcontact.toString().length !== 10) {
            alert('Contact Number should have 10 digits.');
            return;
        }
        try {
            const result = await axios.post('https://the-pet-emporium-server.onrender.com/HOME', {
                emailname,
                emailmessage,
                emailtext,
                emailcontact,
            });

            if (result.status === 200) {
                setEmailname('');
                setEmailmessage('');
                setEmailtext('');
                setEmailcontact('');
                alert('Message sent Successfully.')
            }
        }
        catch (error) {
            console.error('Error in sending message :', error);
            alert('An error occurred in sending message.');
        }
    };

    const handleCart = async (event) => {
        // event.preventDefault();
        let temp = localStorage.getItem('loggedInUser');
        try {
            const response = await axios.post('http://localhost:5000/Cart', {
                temp
            });

        } catch (error) {
            console.log(error)
        }
    }

    const loggedInUser = localStorage.getItem('loggedInUser');
    const history = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        history.apply('/'); // Redirect to home page after logout
    };
    function handleShop(event) {
        if (!loggedInUser) {
            event.preventDefault();
            alert('Please Login or SignUp to Buy our products.');
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light text-dark bg-light fixed-top" style={{ fontSize: '16px' }}>
                <div className="container-fluid ">
                    <a className="navbar-brand p-3" href="#home" style={{marginLeft:'1%'}}><img src={logo} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav " style={{ paddingLeft: "31%",marginTop:'0.5%' ,fontSize:'19px'}}>

                            <li className="nav-item">
                                <a className="nav-link active colo pr-3" aria-current="page" href="#home">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active colo pr-3" aria-current="page" href="#about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active colo pr-3" aria-current="page" href="#shop">Shop</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active colo pr-3" aria-current="page" href="#services">Services</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#contact">ContactUs</a>
                            </li>
                            {
                                loggedInUser !== null && (
                                    <div className='d-flex dropdown' style={{ paddingLeft: '65%' }}>

                                        <img src={profile} alt='X' />
                                        <span style={{ color: 'black', textDecoration: 'none', textTransform: 'none', fontSize: '22px', paddingLeft: '11%', paddingTop: '3%' }}>{loggedInUser}</span>

                                        <div className="dropdown-content ">
                                            <Link to="/" onClick={handleLogout}>Logout</Link>
                                            <Link to="/Cart" onClick={handleCart}>View Orders</Link>
                                        </div>

                                    </div>
                                )
                            }

                            {
                                loggedInUser === null && (
                                    <>
                                        <li className="nav-item" style={{ paddingLeft: "57%",marginTop:'0.5%' }}>
                                            <Link className="nav-link active btn-login" aria-current="page" to="/Logn" style={{width:'fit-content',float:'right',marginRight:'15%',marginBottom:'10px'}} >Login</Link>
                                        </li>
                                        <li className="nav-item" style={{ paddingLeft: "4%",marginTop:'0.5%' }}>
                                            <Link className="nav-link active btn-login" aria-current="page" style={{width:'fit-content',float:'right',marginRight:'5%'}} to="/Signup">SignUp</Link>
                                        </li>
                                    </>
                                )
                            }


                        </ul>
                    </div>

                </div>
            </nav>
            {/* <div className='pb-5'></div> */}
            <div style={{ paddingBottom: "5.2%" }}></div>

            {/* <!-- home section starts  --> */}
            <section className="home" id="home">

                <div className="content">
                    <h3> <span>hi</span> welcome to our pet palace </h3>
                    <a href="#shop" className="btn1">shop now</a>
                </div>

                <img src={bottom_wave} className="wave" alt="" />

            </section>

            {/* <!-- home section ends --> */}
            {/* <!-- about section starts  --> */}

            <section className="about" id="about">

                <div className="image">
                    <img src={about_img} alt="" />
                </div>

                <div className="content">
                    <h3>premium <span>pet food</span> manufacturer</h3>
                    <p>At our pet service shop, we understand that your pets are an important part of your family. That's why we only offer the best products from premium pet manufacturers that are committed to providing high-quality and safe products for your furry friends.</p>
                    <Link to="/Rabout" className="btn2">Read More</Link>
                </div>

            </section>

            {/* <!-- about section ends --> */}

            {/* <!-- dog and cat food banner section starts --> */}
            <div id="shop">
                <h1 className="heading"> our <span> products </span> </h1>
                <div className="dog-food">

                    <div className="image">
                        <img src={dog_food} alt="" />
                    </div>

                    <div className="content">
                        <h3> <span>air dried</span> dog food </h3>
                        <p>Our dog food is made from high-quality ingredients to support your dog's optimal health. We offer a variety of options to suit every budget and dietary need, including grain-free and special health options.</p>
                        <div className="amount">$ 7.00</div>

                        <Link to="/Buy"> <img src={shop_now_dog} alt="" onClick={handleShop} /> </Link>
                    </div>

                </div>

                <div className="cat-food">

                    <div className="content">
                        <h3> <span>air dried</span> cat food </h3>
                        <p>we offer a wide variety of premium cat food options to suit every dietary need. Our cat food is made from only the best ingredients to provide essential nutrition and delicious taste. Shop our selection today and give your cat the gift of optimal health and happiness!</p>
                        <div className="amount">$ 7.00</div>
                        <Link to="/Buy1" onClick={handleShop}> <img src={shop_now_cat} alt="" /> </Link>
                    </div>

                    <div className="image">
                        <img src={cat_food} alt="" />
                    </div>

                </div>
            </div>
            {/* <!-- dog and cat food banner section ends --> */}

            <section className="services" id="services">

                <h1 className="heading"> Our <span>Services</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-dog"></i>
                        <h3>Dog Boarding</h3>
                        <Link to="/Dog" className="btn2">Read More</Link>
                    </div>

                    <div className="box">
                        <i className="fas fa-cat"></i>
                        <h3>Cat Boarding</h3>
                        <Link to="/Cat" className="btn2">Read More</Link>
                    </div>

                    <div className="box">
                        <i className="fas fa-bath"></i>
                        <h3>Spa & Grooming</h3>
                        <Link to="/Spa" className="btn2">Read More</Link>
                    </div>

                    <div className="box">
                        <i className="fas fa-drumstick-bite"></i>
                        <h3>Healthy Meal</h3>
                        <Link to="/Meal" className="btn2">Read More</Link>
                    </div>

                    <div className="box">
                        <i className="fas fa-baseball-ball"></i>
                        <h3>Activity Exercise</h3>
                        <Link to="/Exercis" className="btn2">Read More</Link>
                    </div>

                    <div className="box">
                        <i className="fas fa-heartbeat"></i>
                        <h3>Health Care</h3>
                        <Link to="/Health" className="btn2">Read More</Link>
                    </div>

                </div>

            </section>

            <section className="contact" id="contact">

                <div className="image">
                    <img src={contact_img} alt="" />
                </div>

                <form onSubmit={handleEmailmessage} method='post'><h3>Contact Us</h3>
                    <input required type="text" placeholder="Your Name" className="box" onChange={(e) => setEmailname(e.target.value)} value={emailname} />
                    <input required type="email" placeholder="Email Address" className="box" onChange={(e) => setEmailmessage(e.target.value)} value={emailmessage} />
                    <input required type="number" placeholder="Mobile Number" className="box" onChange={(e) => setEmailcontact(e.target.value)} value={emailcontact} />
                    <textarea required name="" placeholder="Your Message" id="" cols="30" rows="10" onChange={(e) => setEmailtext(e.target.value)} value={emailtext}></textarea>
                    <input type="submit" value="send message" className="btn2" /></form>
            </section>

            <section className="footer">

                <img src={top_wave} alt="" />

                <div className="share">
                    <a href="#home" className="btn2"> <i className="fab fa-facebook-f"></i> facebook </a>
                    <a href="#home" className="btn2"> <i className="fab fa-twitter"></i> twitter </a>
                    <a href="#home" className="btn2"> <i className="fab fa-instagram"></i> instagram </a>
                    <a href="#home" className="btn2"> <i className="fab fa-linkedin"></i> linkedin </a>
                    <a href="#home" className="btn2"> <i className="fab fa-pinterest"></i> pinterest </a>
                </div>

                <div className="credit"> Created By <span>  CEO - KALASH SHAH  </span> | All Rights Reserved! </div>

            </section>
        </>
    );
}

export default HOME;

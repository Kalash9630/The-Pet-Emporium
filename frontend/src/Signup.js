import React from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import "./Signup.css"
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');
    const [authenticate, setAuthenticate] = useState(false);


    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/Signup', {
                username,
                email,
                password,
                contact,
            });

            localStorage.setItem('loggedInUser', username);
            setUsername('');
            setEmail('');
            setPassword('');
            setContact('');
            setAuthenticate(true);


        }
        catch (error) {
            console.error('Error signing up:', error);
            alert('An error occurred in signing in.');
        }
    };

    return (
        <div className='back1'>
            {authenticate && <Navigate to='/' />}

            <div className="login-page">
                <h2 className="reg">Register</h2><br></br>
                <div className="form">
                    <form class="login-form pb-3 " onSubmit={handleSignup} method='post'>
                        <input required type="text" placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)} />
                        <input required type="email" placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)} />
                        <input required type="password" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <input required type="number" placeholder="Contact Number"
                            onChange={(e) => setContact(e.target.value)} />
                        <button type="submit">Create Account</button>
                        <p className="message">Alread Registered?  <Link to="/Logn">Sign In to your Account</Link></p>
                        <div style={{ marginTop: "6%", float: "right", fontSize: "13px" }}><Link to="/">Back to Home Page</Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup;
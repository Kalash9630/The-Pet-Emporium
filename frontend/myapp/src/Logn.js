import React from 'react';
import "./Login.css"
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Logn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authenticate, setAuthenticate] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://the-pet-emporium-server.onrender.com/Logn', {
                username,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                localStorage.setItem('loggedInUser', username);
                setUsername('');
                setPassword('');
                setAuthenticate(true);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Login failed.');
        }
    };

    return (
    <>
        {authenticate && <Navigate to='/' />}

        <div className='back'>
            <div className="login-page">
                <h2 className="reg1">Login</h2><br></br>
                <div className="form1">
                    <form className="login-form1 pb-3" onSubmit={handleLogin} method='post'>
                        <input required type="text" placeholder="Username" value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                        <input required type="password" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Login</button>
                        <p className="message1">Not registered? <Link to="/Signup">Create an account</Link></p>
                        <div style={{ marginTop: "6%", float: "right", fontSize: "14px" }}><Link to="/">Back to Home Page</Link></div>
                        <div style={{paddingTop:'20%', fontSize:'15px'}}>
                            
                            <div style={{float:"left"}}>For Quick Login ( Use this )</div>
                            <ul >
                                <li style={{float:"left",textTransform:'none'}}>Username : dummy</li><br/><br/>
                                <li style={{float:"left",textTransform:'none'}}>Password : 123</li>
                                <li style={{float:"left",textTransform:'none'}}>Gmail : dummy1111@gmail.com</li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
}
export default Logn;
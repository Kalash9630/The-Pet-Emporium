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
            const response = await axios.post('http://localhost:5000/Logn', {
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

    return (<div>
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
                        <div style={{ marginTop: "6%", float: "right", fontSize: "12px" }}><Link to="/">Back to Home Page</Link></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Logn;
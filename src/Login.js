import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Importing the user icon from Font Awesome
import './login.css';

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent default form submission
        if (id === 'admin' && password === 'admin123') {
            navigate('/admin-dashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <div className="icon-container">
                <FaUserCircle size={100} color="#4CAF50" />
            </div>
            <form onSubmit={handleLogin} className="login-form">
                <input type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)} className="login-input"/>
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="login-input"/>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default Login;

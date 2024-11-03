// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
            navigate('/dashbord'); // Redirect to home or dashboard
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;

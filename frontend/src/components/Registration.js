// src/components/Registration.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './registration.css'

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await axios.post('http://localhost:5000/api/auth/register', { email, password });
            alert('Registration successful!');
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit">Register</button>
        </form>
    );
};

export default Registration;

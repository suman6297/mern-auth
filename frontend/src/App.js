// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashbord from './components/dashbord';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashbord" element={<Dashbord />} />
            </Routes>
        </Router>
    );
};

export default App;

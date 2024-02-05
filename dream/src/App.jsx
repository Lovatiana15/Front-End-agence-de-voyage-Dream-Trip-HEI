import React from 'react';
import NavMenu from './components/navbar/NavMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Signup from './pages/login/signup';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<NavMenu />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;

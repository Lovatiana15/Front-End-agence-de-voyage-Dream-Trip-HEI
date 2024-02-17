import React from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from './pages/UserProfile/UserProfile';
import Signup from './pages/login/signup';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/profil" element={<UserProfile />}/>
                <Route path="/sign" element={<Signup />}/>
            </Routes>
        </Router>
    );
}

export default App;

import React from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from './pages/UserProfile/UserProfile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/profil" element={<UserProfile />}/>
            </Routes>
        </Router>
    );
}

export default App;

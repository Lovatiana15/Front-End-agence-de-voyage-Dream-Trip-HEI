import React from 'react';
import NavMenu from './components/navbar/NavMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<NavMenu />}/>
            </Routes>
        </Router>
    );
}

export default App;

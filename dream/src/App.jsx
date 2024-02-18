import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from './pages/UserProfile/UserProfile';
import Signup from './pages/login/signup';
import CarRent from './pages/Booking/CarRent';

// Créez un thème personnalisé avec la couleur principale définie sur orange
const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(206, 141, 20)', // Code hexadécimal pour l'orange
        },
        // Vous pouvez également définir d'autres couleurs si nécessaire
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profil" element={<UserProfile />} />
                    <Route path="/sign" element={<Signup />} />
                    <Route path="/carRent" element={<CarRent />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;

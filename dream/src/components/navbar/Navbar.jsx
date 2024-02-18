import React, { useState } from 'react';
import { AppBar, Toolbar, Avatar, Modal, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/logo-removebg-preview.jpg';
import Login from '../../pages/login/login';
import Signup from '../../pages/login/signup';
import HomeBar from './HomeBar';
import ServiceBar from './ServiceBar';
import AboutUsBar from './AboutUsBar';
import ContactUsBar from './ContactUsBar';
import Button from '@mui/material/Button';

function Navbar() {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [signupModalOpen, setSignupModalOpen] = useState(false);

    const handleLoginModalOpen = () => {
        setLoginModalOpen(true);
    };

    const handleLoginModalClose = () => {
        setLoginModalOpen(false);
    };

    const handleSignupModalOpen = () => {
        setSignupModalOpen(true);
    };

    const handleSignupModalClose = () => {
        setSignupModalOpen(false);
    };
    return (
        <AppBar sx={{ color: 'white' }}>
            <Toolbar sx={{ backgroundColor: 'rgb(206,   141,   20)', display: 'flex', justifyContent: 'space-between' }}>
                <Link to='/'>
                    <Avatar alt="" src={Img1} />
                </Link>
                <div style={{ display: 'flex', flexDirection: 'row', gap:   10 }}>
                    <HomeBar />
                    <ServiceBar />
                    <AboutUsBar />
                    <ContactUsBar />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap:   10 }}>
                    <Button onClick={handleLoginModalOpen} variant='contained' sx={{ backgroundColor: 'rgb(206,   141,   20)', color: 'white' }}>Login</Button>
                    <Button onClick={handleSignupModalOpen} variant='contained' sx={{ backgroundColor: 'rgb(206,   141,   20)', color: 'white' }}>Sign up</Button>
                </div>
            </Toolbar>
            {/* Modal de connexion */}
            <Modal open={loginModalOpen} onClose={handleLoginModalClose}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '110vh',
                        backdropFilter: 'blur(3px)',
                        backgroundColor: 'rgba(255,  255,  255,  0.3)',
                        zIndex:  9999,
                    }}>
                    <Paper elevation={2} sx={{ position: 'relative', p:  3, backgroundColor: 'rgba(0,  0,  0,  0.6)' }}>
                        <Button onClick={handleLoginModalClose} style={{ position: 'absolute', top:  4, right:  4, fontSize: '25px', color: 'white' }}>
                            x
                        </Button>
                        <Login handleSignupModalOpen={handleSignupModalOpen} handleLoginModalClose={handleLoginModalClose} />
                    </Paper>
                </Box>
            </Modal>

            {/* Modal d'inscription */}
            <Modal open={signupModalOpen} onClose={handleSignupModalClose}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                        backdropFilter: 'blur(3px)',
                        backgroundColor: 'rgba(255,  255,  255,  0.3)',
                        zIndex:  9999,
                    }}>
                    <Paper elevation={3} sx={{ position: 'relative', p:  3, backgroundColor: 'rgba(0,  0,  0,  0.5)' }}>
                        <Button onClick={handleSignupModalClose} style={{ position: 'absolute', top:  4, right:  4, fontSize: '25px', color: 'white' }}>
                            x
                        </Button>
                        <Signup handleLoginModalOpen={handleLoginModalOpen} handleSignupModalClose={handleSignupModalClose} />
                    </Paper>
                </Box>
            </Modal>
        </AppBar>
    );
};

export default Navbar;

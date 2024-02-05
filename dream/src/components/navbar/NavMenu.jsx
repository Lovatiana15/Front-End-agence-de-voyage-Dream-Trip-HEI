import React from 'react';
import { AppBar, Toolbar, Avatar } from '@mui/material';
import Img1 from '../../assets/logo-removebg-preview.jpg';
import HomeBar from './HomeBar';
import ServiceBar from './ServiceBar';
import AboutUsBar from './AboutUsBar';
import ContactUsBar from './ContactUsBar';
import Login from '../../pages/login/login';
import Signup from '../../pages/login/signup';


const Navbar = () => {
    return (
        <AppBar  >
            <Toolbar sx={{ backgroundColor: 'rgb(206, 141, 20)', display: 'flex', justifyContent: 'space-between' }} >
                <Avatar alt="" src={Img1} />
                <div style={{ display: 'flex', flexDirection: 'row', gap:10 }}>
                    <HomeBar />
                    <ServiceBar />
                    <AboutUsBar />
                    <ContactUsBar />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap:10 }}>
                    <Login/>
                    <Signup/>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

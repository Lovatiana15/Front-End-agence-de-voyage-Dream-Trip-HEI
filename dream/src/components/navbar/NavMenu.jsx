import React from 'react';
import { AppBar, Toolbar, Avatar } from '@mui/material';
import Img1 from '../../assets/logo-removebg-preview.jpg';
import HomeBar from './HomeBar';
import ServiceBar from './ServiceBar';
import AboutUsBar from './AboutUsBar';
import ContactUsBar from './ContactUsBar';


const Navbar = () => {
    return (
        <AppBar  >
            <Toolbar sx={{ backgroundColor: 'rgb(206, 141, 20)', display: 'flex', justifyContent: 'space-between' }} >
                <Avatar alt="" src={Img1} />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap:10 }}>
                    <HomeBar />
                    <ServiceBar />
                    <AboutUsBar />
                    <ContactUsBar />
                </div>
                <div>
                    {/**button sign up, login */}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

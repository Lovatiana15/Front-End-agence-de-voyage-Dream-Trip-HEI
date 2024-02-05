import React from 'react';
import { AppBar, Toolbar, Avatar } from '@mui/material';
import Img1 from '../../assets/logo-removebg-preview.jpg';
import HomeBar from './HomeBar';
import ServiceBar from './ServiceBar';
import AboutUsBar from './AboutUsBar';
import ContactUsBar from './ContactUsBar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function Navbar (){
    return (
        <AppBar  >
            <Toolbar sx={{ backgroundColor: 'rgb(206, 141, 20)', display: 'flex', justifyContent: 'space-between' }} >
                <Avatar alt="" src={Img1} />
                <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <HomeBar />
                    <ServiceBar />
                    <AboutUsBar />
                    <ContactUsBar />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <Button variant='contained' sx={{ backgroundColor: 'rgb(206, 141, 20)' }}>Login</Button>
                    </Link>
                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                        <Button variant='contained' sx={{ backgroundColor: 'rgb(206, 141, 20)' }}>Sign up</Button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

import React from 'react';
import { AppBar, Toolbar, Avatar } from '@mui/material';
import Img1 from '../../assets/logo-removebg-preview.jpg';
import HomeBar from './HomeBar';
import ServiceBar from './ServiceBar';


const Navbar = () => {
    return (
        <AppBar  >
            <Toolbar sx={{ backgroundColor: 'rgb(206, 141, 20)'}} >
                <Avatar alt="" src={Img1} />
                <div style={{ marginLeft: '650px' , display: 'flex', flexDirection: 'row'}}>
                    <HomeBar />
                    <ServiceBar/>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

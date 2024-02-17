import React from 'react';
import { AppBar, Toolbar, Avatar } from '@mui/material';
import ServiceBar from '../../components/navbar/ServiceBar';
import AboutUsBar from '../../components/navbar/AboutUsBar';
import ContactUsBar from '../../components/navbar/ContactUsBar';
import HomeBar from '../../components/navbar/HomeBar';
import Img1 from '../../assets/logo-removebg-preview.jpg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function NavbarUser() {
    return (
        <div>
            <AppBar  >
                <Toolbar sx={{ backgroundColor: 'rgb(206, 141, 20)', display: 'flex', justifyContent: 'space-between' }} >
                    <Link to="/">
                        <Avatar alt="" src={Img1} />
                    </Link>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <HomeBar />
                        <ServiceBar />
                        <AboutUsBar />
                        <ContactUsBar />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <Link to="/profil/user">
                            <Avatar alt="utilisateur" />
                        </Link>
                        <Button variant='contained' sx={{ backgroundColor: 'rgb(206, 141, 20)' }}>Login out</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavbarUser;
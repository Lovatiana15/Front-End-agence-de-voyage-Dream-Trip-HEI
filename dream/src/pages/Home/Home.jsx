import React from 'react';
import Navbar from '../../components/navbar/NavMenu';
import Header from './Header';
import Divider from '@mui/material/Divider';
import Footer from '../Footer/Footer';
import Testimonials from './Testimonials';

function Home() {
    return (
        <div >
            <Navbar />
            <Header/>
            <Divider/>
            <Testimonials/>
            <Footer />
        </div>

    );
};

export default Home;
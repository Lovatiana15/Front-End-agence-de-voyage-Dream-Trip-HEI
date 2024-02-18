import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from './Header';
import Footer from '../Footer/Footer';
import Testimonials from './Testimonials';
import Banner from './Banner';
import Destination from './Destination';

function Home() {
    return (
        <div >
            <Navbar />
            <Header/>
            <Banner/>
            <Destination/>
            <Testimonials/>
            <Footer />
        </div>

    );
};

export default Home;
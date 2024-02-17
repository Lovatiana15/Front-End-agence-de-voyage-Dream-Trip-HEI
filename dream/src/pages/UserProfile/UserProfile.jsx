import React from 'react';
import NavbarUser from './NavbarUser';
import Header from '../Home/Header';
import Footer from '../Footer/Footer';
import Testimonials from '../Home/Testimonials';
import Banner from '../Home/Banner';
import Destination from '../Home/Destination';
function UserProfile() {
    return (
        <div>
            <NavbarUser/>
            <Header/>
            <Banner/>
            <Destination/>
            <Testimonials/>
            <Footer />
        </div>
    );
}

export default UserProfile;
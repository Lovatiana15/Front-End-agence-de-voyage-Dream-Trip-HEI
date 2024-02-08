import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography, Button, Link as MuiLink } from '@mui/material';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import SearchSection from '../search/SearchSection';
import img from '../../assets/dream.jpg';
import img2 from '../../assets/image1.jpg';
import img3 from '../../assets/image2.jpg';

const carouselImages = [
    {
        id: 1,
        imageUrl: img,
        title: { h1: 'Welcome to Dream Trip', span: ' Dream-trip' },
        subtitle: 'Here you will find all your travel plans for tomorrow',
        button: 'Search',
        link: '/search'
    },
    {
        id: 2,
        imageUrl: img2,
        title: { h1: 'Become a member', span: 'loyal' },
        subtitle: 'Register now and receive price reductions',
        button: 'Register',
        link: '/signup'
    },
    {
        id: 3,
        imageUrl: img3,
        title: { h1: 'Visit our destinations by', span: ' Category' },
        subtitle: 'Exquisite selection of your dream trips',
        button: 'Contact us',
        link: '/contact'
    }
];

const headerStyle = css`
width:  100%;
height:  75vh;
margin-top: 10vh;
`;

const slideStyle = css`
width:  100%;
height:  75vh;
background-size: cover;
position: relative;
`;

const textContainerStyle = css`
width:  100%;
height:  75vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: rgba(0,  0,  0,  0.5); // Adjust opacity and color as needed
`;

const titleStyle = css`
font-size:  35px;
margin:  0;
color: white;
font-weight: bold;
`;

const subtitleStyle = css`
font-size:  25px;
margin:  0;
  color: #ccc; // Adjust color as needed
text-align: center;
`;

const buttonStyle = css`
padding:  5px  10px;
border-radius:  4px;
margin-top:  3rem;
color: white;
font-weight: bold;
font-size:  18px;
background-color: #ff9800;
`;

function Header() {
    return (
        <Box sx={headerStyle}>
            <Carousel autoPlay interval={4000} transitionDuration={1500}>
                {carouselImages.map((el) => (
                    <Box key={el.id} sx={slideStyle} style={{ backgroundImage: `url(${el.imageUrl})` }}>
                        <Box sx={textContainerStyle}>
                            <Typography variant="h1" sx={titleStyle}>
                                {el.title.h1}
                                <span style={{ color: '#f57c00' }}>{el.title.span}</span>
                            </Typography>
                            <Typography variant="body1" sx={subtitleStyle}>
                                {el.subtitle}
                            </Typography>
                            <MuiLink component={Link} to={el.link}>
                                <Button sx={buttonStyle}>{el.button}</Button>
                            </MuiLink>
                        </Box>
                    </Box>
                ))}
            </Carousel>
            <SearchSection/>
        </Box>
    );
}

export default Header;

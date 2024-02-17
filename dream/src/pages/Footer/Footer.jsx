import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <Box sx={{ backgroundColor: 'rgb(206,  141,  20)', padding: '20px   0', marginTop: '20px' }}>
            <Container maxWidth="lg">
                <Box sx={{ borderBottom: '1px solid #000', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Box sx={{ flex: '1   1 auto', marginBottom: '20px' }}>
                        <Typography variant="h6" component="div" sx={{ marginBottom: '10px', color: 'white' }}>
                            About Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                            We are a travel agency passionate about exploration and adventure.
                        </Typography>
                    </Box>
                    <Box sx={{ flex: '1   1 auto', marginBottom: '20px' }}>
                        <Typography variant="h6" component="div" sx={{ marginBottom: '10px', color: 'white' }}>
                            Contact
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                            <Link href="mailto:contact@dream-trip.com" underline="hover" sx={{ color: 'white' }}>
                                contact@dream-trip.com
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{ flex: '1   1 auto', marginBottom: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6" component="div" sx={{ marginBottom: '10px', color: 'white' }}>
                            Follow Us
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <IconButton href="https://www.facebook.com/dreamtrip" target="_blank" rel="noopener noreferrer" sx={{ color: 'white' }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton href="https://www.instagram.com/dreamtrip" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', marginLeft: '10px' }}>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/company/dreamtrip" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', marginLeft: '10px' }}>
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                        &copy; {new Date().getFullYear()} Dream Trip. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;

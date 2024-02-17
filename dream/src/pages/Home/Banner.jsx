import React from 'react';
import { Container, Card, Typography, CardMedia, CardContent, Button, Link } from '@mui/material';
import img from '../../assets/baner1.jpg';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/sign'); // Assurez-vous que '/sign' est la route qui affiche le formulaire d'inscription popup
    };
    return (
        <Container sx={{ mt: 15, gap: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography component="h2" variant="h4" color="text.primary">
                Offers
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Promotions, deals, and special offers for you
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Card sx={{ display: 'flex', flexDirection: 'row', mr: 5 }}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            Take your longest vacation yet
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Browse properties offering long-term stays, many at reduced monthly rates.
                        </Typography>
                        <Link to="/sign">
                            <Button variant='contained' onClick={handleSignUpClick} sx={{ backgroundColor: 'rgb(206, 141, 20)', mt: 1 }}>Sign up</Button>
                        </Link>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="210"
                        src={img}
                        alt="green  iguana"
                    />
                </Card>
                <Card sx={{
                    display: 'flex'
                }}>
                    <CardContent style={{ backgroundImage: `url(${'./Baner2.jpg'})`, color: 'white', backgroundSize: 'cover' }}>
                        <Typography gutterBottom variant="h5" component="div" >
                            New year, new adventures
                        </Typography>
                        <Typography variant="body2" >
                            Save 15% or more when you book and stay before April 1, 2024
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </Container>
    );
}

export default Banner;

import React from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';

function Destination() {
    return (
        <Container sx={{ mt:  6, gap:  1, display: 'flex', flexDirection: 'column', width: 'fullWidth' }}>
            <Typography component="h2" variant="h4" color="text.primary" sx={{ backgroundColor: 'rgba(255,  255,  255,  0.8)', padding: '4px' }}>
                Trending destinations
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ backgroundColor: 'rgba(255,  255,  255,  0.8)', padding: '4px' }}>
                Most popular choices for travelers from Madagascar
            </Typography>
            <Box sx={{
                width: 'fullWidth',
                height:  250,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                gap:  4
            }}>
                <Card>
                    <CardContent style={{ backgroundImage: `url(${'./Tana.jpg'})`, color: 'white', backgroundSize: 'cover', height: '100%', width:  400 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color:'black',backgroundColor: 'rgba(255,  255,  255,  0.8)', padding: '4px' }}>
                            Antananarivo
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent style={{ backgroundImage: `url(${'./Toliary.jpg'})`, color: 'white', backgroundSize: 'cover', height: '100%', width:  400 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color:'black',backgroundColor: 'rgba(255,  255,  255,  0.8)', padding: '4px' }}>
                            Toliary
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent style={{ backgroundImage: `url(${'./Nosy.jpg'})`, color: 'white', backgroundSize: 'cover', height: '100%', width:  400 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color:'black',backgroundColor: 'rgba(255,  255,  255,  0.8)', padding: '4px' }}>
                            Nosy Be
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{
                width: 'fullWidth',
                height:  300,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                gap:  4,
                mt:  2
            }}>
                <Card>
                    <CardContent style={{ backgroundImage: `url(${'./Morondava.jpg'})`, color: 'white', backgroundSize: 'cover', height: '100%', width:  600 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{color:'black', backgroundColor: 'rgba(255,  255,  255,  0.8)', padding: '4px' }}>
                            Morondava
                        </Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent style={{ backgroundImage: `url(${'./Janga.jpg'})`, color: 'white', backgroundSize: 'cover', height: '100%', width:  600 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color:'black',backgroundColor: 'rgba(255,  255,  255,  0.8)', padding: '4px' }}>
                            Mahajanga
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default Destination;

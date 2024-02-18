import * as React from 'react';
import { CardHeader, CardContent, Avatar, Typography, Box, Container, Card } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import img2 from '../../assets/perso2.jpg';
import img1 from '../../assets/perso1.jpg';
import img3 from '../../assets/perso3.jpg';
import img4 from '../../assets/perso4.jpg';
import img5 from '../../assets/perso5.jpg';
import img6 from '../../assets/perso6.jpg';

const userTestimonials = [
    {
        avatar: <Avatar alt="Remy Sharp" src={img1} />,
        name: 'Remy Sharp',
        occupation: 'Senior Engineer',
        testimonial:
            'I chose dream-trip for my European adventure and I was absolutely delighted with the experience. The staff were incredibly welcoming and went above and beyond to ensure every detail was perfect. I highly recommend their service to anyone looking for a reliable and quality travel agency'
    },
    {
        avatar: <Avatar alt="Travis Howard" src={img2} />,
        name: 'Travis Howard',
        occupation: 'Lead Product Designer',
        testimonial:
            'I selected dream-trip for my Caribbean getaway, and it was a dream come true. Their team was incredibly knowledgeable and went out of their way to ensure that my vacation was tailored to my preferences. The itinerary was well-planned, and the local experiences they arranged were truly enriching. I would highly recommend dream-trip to anyone seeking a personalized and memorable travel adventure.',
    },
    {
        avatar: <Avatar alt="Cindy Baker" src={img3} />,
        name: 'Cindy Baker',
        occupation: 'CTO',
        testimonial:
            'I chose dream-trip for my journey to the Pacific and I was impressed by their expertise and dedication. They made my trip not only enjoyable but also educational and culturally enriching. I recommend their agency to anyone looking for an unforgettable travel experience.',
    },
    {
        avatar: <Avatar alt="Remy Sharp" src={img4} />,
        name: 'Julia Stewart',
        occupation: 'Senior Engineer',
        testimonial:
            'My trip to Africa with dream-trip was a dream. They organized everything impeccably and showed me incredible places I would never have found on my own. I am extremely satisfied with my choice and I will certainly return with them for my future trips.',
    },
    {
        avatar: <Avatar alt="Jeans Boatre" src={img5} />,
        name: 'Jeans Boatre',
        occupation: 'Product Designer',
        testimonial:
            'My journey of discovery in Asia with dream-trip was an incredible adventure. They organized everything from accommodation to food, and every aspect of my trip was exceptional. I can t wait to travel with them again.',
    },
    {
        avatar: <Avatar alt="Cindy Baker" src={img6} />,
        name: 'Daniel Wolf',
        occupation: 'CDO',
        testimonial:
            'I used dream-trip for my South American adventure and I was surprised by the quality of their service. They made every stage of my trip memorable and showed an attention to detail that is rare to find. I am extremely satisfied with my choice and I will certainly return with them for my future trips.',
    },
];

const whiteLogos = [
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
    'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
    width: '64px',
    opacity: 0.3,
};
function Testimonials() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const columns = isSmallScreen ? 1 : 3;
    const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

    return (
        <div>
            <Container
                id="testimonials"
                sx={{
                    pt: { xs: 4, sm: 12 },
                    pb: { xs: 8, sm: 16 },
                    mt: 4,
                    width: 'fullWidth',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                    backgroundColor: 'whitesmoke'

                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography component="h2" variant="h4" color="text.primary">
                        Testimonials
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        See what our customers love about our products. Discover how we excel in
                        efficiency, durability, and satisfaction. Join us for quality, innovation,
                        and reliable support.
                    </Typography>
                </Box>
                <Masonry columns={columns} spacing={2}>
                    {userTestimonials.map((testimonial, index) => (
                        <Card key={index} sx={{ p: 1, backgroundColor: 'rgb(228, 228, 228)' }}>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {testimonial.testimonial}
                                </Typography>
                            </CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    pr: 2,
                                }}
                            >
                                <CardHeader
                                    avatar={testimonial.avatar}
                                    title={testimonial.name}
                                    subheader={testimonial.occupation}
                                />
                                <img src={logos[index]} alt={`Logo ${index + 1}`} style={logoStyle} />
                            </Box>
                        </Card>
                    ))}
                </Masonry>
            </Container>
        </div>
    );
}

export default Testimonials;
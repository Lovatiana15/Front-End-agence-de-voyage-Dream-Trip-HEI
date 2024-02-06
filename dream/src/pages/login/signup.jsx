import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import {
    TextField,
    Grid,
    Button,
    FormControl,
    Box,
    Snackbar,
    Alert
} from '@mui/material';

function Signup({ handleLoginModalOpen, handleSignupModalClose }) {
    const handleLinkClick = () => {
        handleLoginModalOpen();
        handleSignupModalClose();
    };
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            firstName,
            lastName,
            email,
            address,
            phone,
            password,
            confirmPassword
        };

        axios.post('/api/signup', userData) //ty le endpoint le back tokony andefasana le save
            .then(() => {
                navigate('/home'); //ty le endpoint le page apres le s'inscrire
                setSuccessMessage('Inscription réussie !');
            })
            .catch(error => {
                console.error(error);
                setSuccessMessage('Une erreur est survenue lors de l\'inscription.');
            });
    };

    return (
        <div>
            <Grid >
                <Box sx={{
                    py: 3,
                    px: 4,
                    gap: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ color: 'orange', fontSize: '30px' }}>Sign up</p>
                    </div>
                    <FormControl component='form' onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                            <TextField
                                size='small'
                                name='First-name'
                                type='text'
                                variant='outlined'
                                id='First-name'
                                label='First name'
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                sx={{
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'orange',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'orange',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: 'white',
                                    },
                                    mb: 2
                                }}
                            />
                            <TextField
                                size='small'
                                name='LastName'
                                type='text'
                                variant='outlined'
                                id='LastName'
                                label='Last name'
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                sx={{
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'orange',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'orange',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: 'white',
                                    },
                                    mb: 2
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                            <TextField
                                size='small'
                                name='email'
                                type='email'
                                variant='outlined'
                                id='email'
                                label='Email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                sx={{
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'orange',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'orange',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: 'white',
                                    },
                                    mb: 2
                                }}
                            />
                            <TextField
                                size='small'
                                name='Address'
                                type='text'
                                variant='outlined'
                                id='Address'
                                label='Address'
                                value={address} // Assurez-vous que le nom de la variable est 'address'
                                onChange={e => setAddress(e.target.value)} 
                                sx={{
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'orange',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'orange',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: 'white',
                                    },
                                    mb: 2
                                }}
                            />
                        </div>

                        <TextField
                            size='small'
                            name='Phone'
                            type='number'
                            variant='outlined'
                            id='Phone'
                            label='Phone number'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            sx={{
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'orange',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'orange',
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiOutlinedInput-input': {
                                    color: 'white',
                                },
                                mb: 2
                            }}
                        />
                        <TextField
                            size='small'
                            name='password'
                            type='password'
                            variant='outlined'
                            id='password'
                            label='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            sx={{
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'orange',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'orange',
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiOutlinedInput-input': {
                                    color: 'white',
                                },
                                mb: 2
                            }}
                        />
                        <TextField
                            size='small'
                            name='Key'
                            type='password'
                            variant='outlined'
                            label='Confirm password'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            sx={{
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'orange',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'orange',
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiOutlinedInput-input': {
                                    color: 'white',
                                },
                                mb: 2
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ color: 'white' }}
                        >
                            Sign up
                        </Button>
                    </FormControl>
                    <Snackbar open={!!successMessage} autoHideDuration={6000} onClose={() => setSuccessMessage('')}>
                        <Alert onClose={() => setSuccessMessage('')} severity="success">
                            {successMessage}
                        </Alert>
                    </Snackbar>
                    <p className='text-white underline mt-3'>
                        <span onClick={handleLinkClick}>I have an account</span>
                    </p>
                </Box>
            </Grid>
        </div>
    );
};

export default Signup;
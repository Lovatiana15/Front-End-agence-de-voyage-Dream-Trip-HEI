import {
    Alert,
    Box,
    Button,
    FormControl,
    Grid,
    Snackbar,
    TextField
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ handleLoginModalOpen, handleSignupModalClose }) {
    const handleLinkClick = () => {
        handleLoginModalOpen();
        handleSignupModalClose();
    };
    const [username, setUsername] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            username,
            userLastName,
            email,
            phoneNumber,
            password,

            address


        };

        axios.post('https://backend-production-87a6.up.railway.app/api/v1/user/save', userData)
            .then(() => {
                navigate('/profil'); 
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
                                name='username'
                                type='text'
                                variant='outlined'
                                id='username'
                                label='user name'
                                value={username}
                                onChange={e => setUsername(e.target.value)}
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
                                name='userLastName'
                                type='text'
                                variant='outlined'
                                id='userLastName'
                                label='userLastName'
                                value={userLastName}
                                onChange={e => setUserLastName(e.target.value)}
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
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
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
                    <p className='text-green underline mt-3'>
                        <span onClick={handleLinkClick} className='text-orange'>I have an account</span>
                    </p>
                </Box>
            </Grid>
        </div>
    );
};

export default Signup;
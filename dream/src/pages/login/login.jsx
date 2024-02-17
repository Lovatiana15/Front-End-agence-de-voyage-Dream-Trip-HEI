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

function Login({ handleSignupModalOpen, handleLoginModalClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adminKey, setAdminKey] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLinkClick = () => {
        handleSignupModalOpen();
        handleLoginModalClose();
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const userCredentials = {
            email,
            password,
            key: adminKey
        };

        axios.post('https://backend-production-321f.up.railway.app//api/v1/user/login', userCredentials)
            .then(response => {
                if (response.status === 200 && response.data.status) {
                    navigate('/profil');
                } else {
                    setErrorMessage('Email, mot de passe ou clé d\'administrateur incorrecte.');
                }
            })
            .catch(error => {
                console.error(error);
                setErrorMessage('Une erreur est survenue lors de la connexion.');
            });
    };

    return (
        <div>
            <Grid>
                <Box sx={{
                    py: 3,
                    px: 4,
                    gap: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ color: 'orange', fontSize: '30px' }}>Login</p>
                    </div>
                    <FormControl component='form' onSubmit={handleSubmit}>
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
                            variant='outlined'
                            label='Key-admin'
                            value={adminKey}
                            onChange={e => setAdminKey(e.target.value)}
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
                            style={{ backgroundColor: 'green', color: 'white' }}
                        >
                            Login
                        </Button>
                    </FormControl>
                    {errorMessage && (
                        <Snackbar open={true} autoHideDuration={6000} onClose={() => setErrorMessage('')}>
                            <Alert onClose={() => setErrorMessage('')} severity="error">
                                {errorMessage}
                            </Alert>
                        </Snackbar>
                    )}
                    <p className='text-white underline mt-3'>
                        <span onClick={handleLinkClick}>I dont have an account</span>
                    </p>
                </Box>
            </Grid>
        </div>
    );
}

export default Login;
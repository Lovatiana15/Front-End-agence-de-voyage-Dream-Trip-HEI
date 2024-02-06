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

function Login({ handleSignupModalOpen, handleLoginModalClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keyAdmin, setKeyAdmin] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
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
            keyAdmin
        };

        axios.post('/api/signup', userCredentials) //ty le endpoint le back tokony andefasana le save
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
                            value={keyAdmin}
                            onChange={e => setKeyAdmin(e.target.value)}
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
                    <Snackbar open={!!successMessage} autoHideDuration={6000} onClose={() => setSuccessMessage('')}>
                        <Alert onClose={() => setSuccessMessage('')} severity="success">
                            {successMessage}
                        </Alert>
                    </Snackbar>
                    <p className='text-white underline mt-3'>
                        <span onClick={handleLinkClick}>I dont have an account</span>
                    </p>
                </Box>
            </Grid>
        </div>
    );
}

export default Login;
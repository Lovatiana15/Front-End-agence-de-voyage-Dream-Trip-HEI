import React from 'react';
import {
    TextField,
    Grid,
    Button,
    FormControl,
    Box
} from '@mui/material';

function Signup({ handleLoginModalOpen, handleSignupModalClose }) {
    const handleLinkClick = () => {
        handleLoginModalOpen();
        handleSignupModalClose();
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
                    <FormControl component='form' >
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                            <TextField
                                size='small'
                                name='email'
                                type='email'
                                variant='outlined'
                                id='email'
                                label='First name'
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
                                    mb:2
                                }}
                            />
                            <TextField
                                size='small'
                                name='email'
                                type='email'
                                variant='outlined'
                                id='email'
                                label='Last name'
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
                                    mb:2
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
                                    mb:2
                                }}
                            />
                            <TextField
                                size='small'
                                name='email'
                                type='email'
                                variant='outlined'
                                id='email'
                                label='Address'
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
                                    mb:2
                                }}
                            />
                        </div>

                        <TextField
                            size='small'
                            name='email'
                            type='email'
                            variant='outlined'
                            id='email'
                            label='Phone number'
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
                                mb:2
                            }}
                        />
                        <TextField
                            size='small'
                            name='password'
                            type='password'
                            variant='outlined'
                            id='password'
                            label='Password'
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
                                mb:2
                            }}
                        />
                        <TextField
                            size='small'
                            name='Key'
                            variant='outlined'
                            label='Confirm password'
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
                                mb:2
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
                    <p className='text-white underline mt-3'>
                        <span  onClick={handleLinkClick}>I have an account</span>
                    </p>
                </Box>
            </Grid>
        </div>
    );
};

export default Signup;
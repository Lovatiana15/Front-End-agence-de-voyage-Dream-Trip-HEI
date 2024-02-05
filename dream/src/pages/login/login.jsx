import React from 'react';
import {
    TextField,
    Grid,
    Button,
    FormControl,
    Box
} from '@mui/material';
import { MoodOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function login() {
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
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <p style={{ color:'orange', fontSize:'25px'}}>Login</p>
                        <MoodOutlined color='primary' />
                    </div>
                    <FormControl component='form' >
                        <TextField
                            size='small'
                            name='email'
                            type='email'
                            variant='outlined'
                            id='email'
                            label='Email'
                            sx={{ color: 'orange', mb: 2 }}
                        />
                        <TextField
                            size='small'
                            name='password'
                            type='password'
                            variant='outlined'
                            id='password'
                            label='Password'
                            sx={{ color: 'orange', mb: 2 }}
                        />
                        <TextField
                            size='small'
                            name='Key'
                            variant='outlined'
                            label='Key-admin'
                            sx={{ color: 'orange', mb: 2 }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ color: 'white' }}
                        >
                            Login
                        </Button>
                    </FormControl>
                    <p className='text-blue-500 hover:underline mt-3'>
                        <Link to={'/login/registration'}>I dont have an account</Link>
                    </p>
                </Box>
            </Grid>
        </div>
    );
}

export default login;
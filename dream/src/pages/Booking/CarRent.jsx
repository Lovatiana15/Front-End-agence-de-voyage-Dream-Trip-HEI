import React, { useState } from 'react';
import {
    TextField,
    Alert,
    Snackbar,
    Grid,
    Button,
    FormControl,
    Box
} from '@mui/material';
import { MoodOutlined } from '@mui/icons-material';
import NavbarUser from '../UserProfile/NavbarUser';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CarRent() {
    const [lieuDepart, setLieuDepart] = useState('');
    const [lieuArriver, setLieuArriver] = useState('');
    const [DateDepart, setDateDepart] = useState('');
    const [DateArriver, setDateArriver] = useState('');
    const [personNumber, setPersonNumber] = useState('');
    const [carType, setCarType] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        //atao mifanaka amn le back any reto valeur reto 
        const userData = {
            lieuDepart,
            lieuArriver,
            DateDepart,
            DateArriver,
            personNumber,
            carType
        };

        axios.post('https://backend-production-87a6.up.railway.app/api/v1/user/save', userData)
            .then(() => {
                navigate('/profil');
                setSuccessMessage('rent success !!');
            })
            .catch(error => {
                console.error(error);
                setErrorMessage('An error occurrend when renting.');
            });
    };
    return (
        <div>
            <NavbarUser />
            <Grid >
                <Box sx={{
                    py: 3,
                    px: 4,
                    gap: 2,
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ color: 'orange', fontSize: '25px' }}>Car Rent</p>
                        <MoodOutlined color='primary' />
                    </div>
                    <FormControl component='form' onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                            <TextField
                                size='small'
                                name='email'
                                type='text'
                                variant='outlined'
                                id='lieuDepart'
                                label='lieu-Depart'
                                value={lieuDepart}
                                onChange={e => setLieuDepart(e.target.value)}
                                sx={{ color: 'orange', mb: 2 }}
                            />
                            <TextField
                                size='small'
                                name='email'
                                type='email'
                                variant='outlined'
                                id='lieuArriver'
                                label='lieu-Arriver'
                                value={lieuArriver}
                                onChange={e => setLieuArriver(e.target.value)}
                                sx={{ color: 'orange', mb: 2 }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                            <TextField
                                size='small'
                                name='email'
                                type='date'
                                variant='outlined'
                                id='DateDepart'
                                label='Date-Depart'
                                value={DateDepart}
                                onChange={e => setDateDepart(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ color: 'orange', mb: 2, width: '100%' }}
                            />
                            <TextField
                                size='small'
                                name='email'
                                type='date'
                                variant='outlined'
                                id='DateArriver'
                                label='Date-Arriver'
                                value={DateArriver}
                                onChange={e => setDateArriver(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ color: 'orange', mb: 2, width: '100%' }}
                            />
                        </div>

                        <TextField
                            size='small'
                            name='personNumber'
                            type='number'
                            variant='outlined'
                            id='personNumber'
                            label='person-Number'
                            value={personNumber}
                            onChange={e => setPersonNumber(e.target.value)}
                            sx={{ color: 'orange', mb: 2 }}
                        />
                        <TextField
                            size='small'
                            name='carType'
                            type='password'
                            variant='outlined'
                            id='carType'
                            label='Car-Type'
                            value={carType}
                            onChange={e => setCarType(e.target.value)}
                            sx={{ color: 'orange', mb: 2 }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ color: 'white' }}
                        >
                            Rent
                        </Button>
                    </FormControl>
                    <Snackbar open={!!successMessage} autoHideDuration={6000} onClose={() => setSuccessMessage('')}>
                        <Alert onClose={() => setSuccessMessage('')} severity="success">
                            {successMessage}
                        </Alert>
                    </Snackbar>
                    <Snackbar open={!!errorMessage} autoHideDuration={6000} onClose={() => setErrorMessage('')}>
                        <Alert onClose={() => setErrorMessage('')} severity="error">
                            {errorMessage}
                        </Alert>
                    </Snackbar>
                </Box>
            </Grid>
        </div>
    );
}

export default CarRent;
import React, { useState } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';

const SearchSection = () => {
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSearch = () => {
        console.log('Destination:', destination);
        console.log('Dates de début et de fin:', startDate, endDate);
    };

    return (
        <Box py={2} px={5} bgcolor="white">
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={2} md={4}>
                    <TextField
                        size='small'
                        name='Destination'
                        type='text'
                        label="Destination"
                        variant="outlined"
                        fullWidth
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        sx={{
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'orange',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'orange',
                            },
                            '& .MuiInputLabel-root': {
                                color: 'black',
                            },
                            '& .MuiOutlinedInput-input': {
                                color: 'black',
                            },
                            mb: 2
                        }}
                    />
                </Grid>
                <Grid item xs={2} md={3}>
                    <TextField
                        size='small'
                        label="Start date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'orange',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'orange',
                            },
                            '& .MuiInputLabel-root': {
                                color: 'black',
                            },
                            '& .MuiOutlinedInput-input': {
                                color: 'black',
                            },
                            mb: 2
                        }}
                    />
                </Grid>
                <Grid item xs={2} md={3}>
                    <TextField
                        size='small'
                        label="End date"
                        type="date"
                        variant="outlined"
                        fullWidth
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'orange',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'orange',
                            },
                            '& .MuiInputLabel-root': {
                                color: 'black',
                            },
                            '& .MuiOutlinedInput-input': {
                                color: 'black',
                            },
                            mb: 2
                        }}
                    />
                </Grid>
                <Grid item xs={2} py={2}>
                    <Button
                        size='small'
                        variant="contained"
                        color="success"
                        onClick={handleSearch}
                        fullWidth
                        style={{ borderRadius: '20px', width: '90px' }}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SearchSection;

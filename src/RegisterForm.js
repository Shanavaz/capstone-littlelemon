import React, { useState } from 'react';
import { TextField, Button, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import RegistrationDetails from './RegistrationDetails'

function RegisterForm() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        noofguest: '',
        occasion: ''
    });
    const [showTable, setShowTable] = useState(false);

    const handleBackButton = () => {
        setShowTable(false);
        setFormData({
            date: '',
            time: '',
            noofguest: '',
            occasion: ''
        })
    };

    const handleChange = (e) => {
        console.log(e.target)
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        setShowTable(true);
        // You can add your form submission logic here
    };

    return (
        showTable ?
            <RegistrationDetails formData={formData} handleBackButton={handleBackButton} /> :
            <Box
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 500, margin: 'auto', mt: 5 }
                }
                onSubmit={handleSubmit}
            >
                <Typography variant="h3" component="div" gutterBottom>
                    Little Lemon Table Registration
                </Typography>
                <InputLabel id="choose-date-label">Choose Date</InputLabel>
                <TextField
                    name="date"
                    type="date"
                    variant="outlined"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <InputLabel id="choose-time-label">Choose Time</InputLabel>
                <Select
                    labelId="choose-time-select-label"
                    id="time-select"
                    value={formData.time}
                    name="time"
                    onChange={handleChange}
                    label="Choose Time"
                    required
                >
                    <MenuItem value="17:00">17:00</MenuItem>
                    <MenuItem value="18:00">18:00</MenuItem>
                    <MenuItem value="19:00">19:00</MenuItem>
                    <MenuItem value="20:00">20:00</MenuItem>
                    <MenuItem value="21:00">21:00</MenuItem>
                    <MenuItem value="22:00">22:00</MenuItem>
                </Select>
                <InputLabel id="no-of-guests-label">Number of guests</InputLabel>
                <TextField
                    name="noofguest"
                    type="number"
                    variant="outlined"
                    value={formData.noofguest}
                    onChange={handleChange}
                    required
                />
                <InputLabel id="no-of-guests-label">Occasion</InputLabel>
                <Select
                    labelId="occasion-select-label"
                    id="occasion-select"
                    value={formData.occasion}
                    name="occasion"
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="Birthday">Birthday</MenuItem>
                    <MenuItem value="Anniversary">Anniversary</MenuItem>
                </Select>
                <Button type="submit" variant="contained" color="primary">
                    Make Your reservation
                </Button>
            </Box >

    );
}

export default RegisterForm;

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box } from '@mui/material';


function RegistrationDetails(props) {
    return (
        <Box
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 500, margin: 'auto', mt: 5 }
            }
        >
            <TableContainer component={Paper} sx={{ maxWidth: 700, margin: "auto", mt: 5 }}>
                <Typography variant="h6" align="center" sx={{ mb: 2, mt: 1 }}>
                    Hotel Registration Details
                </Typography>
                <Table aria-label="hotel registration table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><strong>Check-In Date</strong></TableCell>
                            <TableCell align="center"><strong>Check-In Time</strong></TableCell>
                            <TableCell align="center"><strong>No Of Guests</strong></TableCell>
                            <TableCell align="center"><strong>Occasion</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{props.formData.date}</TableCell>
                            <TableCell align="center">{props.formData.time}</TableCell>
                            <TableCell align="center">{props.formData.noofguest}</TableCell>
                            <TableCell align="center">{props.formData.occasion}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Button variant="contained" color="primary" onClick={props.handleBackButton}>
                Back To Register
            </Button>
        </Box>
    );
}

export default RegistrationDetails;

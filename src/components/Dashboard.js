import React from 'react';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";

import Team from './Team';

const Dashboard = () => {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Teams
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs="auto">
                    <Team name={"Front-end Developers"}/>
                </Grid>
                <Grid item xs="auto">
                    <Team name={"Back-end Developers (Java)"}/>
                </Grid>
                <Grid item xs="auto">
                    <Team name={"User Experience"}/>
                </Grid>
                <Grid item xs="auto">
                    <Team name={"UI Designers"}/>
                </Grid>
                <Grid item xs="auto">
                    <Team name={"Human Resources"}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
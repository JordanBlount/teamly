import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';

import Team from '../pages/Team';
import Employee from '../pages/Employee';

const Dashboard = () => {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Switch>
                <Route exact path="/">
                    <Team />
                </Route>
                <Route exact path="/employees">
                    <Employee />
                </Route>
            </Switch>
        </Box>
    );
};

export default Dashboard;
import React from 'react';
import { Switch, Route, useParams, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';

import TeamTab from '../pages/TeamTab';
import EmployeeTab from '../pages/EmployeeTab';

import Team from '../pages/Team';
import Employee from '../pages/Employee';

const Dashboard = () => {

    const params = useParams();
    const history = useHistory();

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Switch>
                <Route exact path="/">
                    <TeamTab all={true}/>
                </Route>
                <Route path='/teams/:id'>
                    {/* TODO: Add the individual team page here. */}
                    <Team/>
                </Route>
                <Route exact path="/employees">
                    <EmployeeTab all={true}/>
                </Route>
                <Route path='/employees/:id'>
                    {/* TODO: Add my individual employee page here. */}
                    <Employee />
                </Route>
            </Switch>
        </Box>
    );
};

export default Dashboard;
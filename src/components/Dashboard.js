import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';

import Team from '../pages/Team';
import Employee from '../pages/Employee';

const Dashboard = () => {

    const params = useParams();

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Switch>
                <Route exact path="/">
                    <Team all={true}/>
                </Route>
                <Route path='/teams/:id'>
                    {/* TODO: Add the individual team page here. */}
                    <Team all={true} id={}/>
                </Route>
                <Route exact path="/employees">
                    <Employee all={true}/>
                </Route>
                <Route path='/employees/:id'>
                    {/* TODO: Add my individual employee page here. */}
                    <Employee all={false} id={} />
                </Route>
            </Switch>
        </Box>
    );
};

export default Dashboard;
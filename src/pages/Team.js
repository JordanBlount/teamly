import React from 'react';
import Grid from "@mui/material/Grid";

import TeamCard from '../components/TeamCard';
import Heading from '../components/Heading';


const Team = () => {
    return (
        <div class="page team">
            <Heading name="Teams" />
            <Grid container spacing={3}>
                <Grid item xs="auto">
                    <TeamCard name={"Front-end Developers"}/>
                </Grid>
                <Grid item xs="auto">
                    <TeamCard name={"Back-end Developers (Java)"}/>
                </Grid>
                <Grid item xs="auto">
                    <TeamCard name={"User Experience"}/>
                </Grid>
                <Grid item xs="auto">
                    <TeamCard name={"UI Designers"}/>
                </Grid>
                <Grid item xs="auto">
                    <TeamCard name={"Human Resources"}/>
                </Grid>
            </Grid>  
        </div>
    );
};

export default Team;
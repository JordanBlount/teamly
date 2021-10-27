import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Heading from '../components/Heading'
import ApiServices from '../services/ApiServices';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { red, green, blue, orange, deepPurple } from '@mui/material/colors';

const Team = (props) => {

    const params = useParams();

    const [team, setTeam] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        ApiServices.getTeamById(params.id).then((response) => {
            console.log(response.data);
            setTeam(response.data);
        });
        ApiServices.getMembersByTeamId(params.id).then((response) => {
            console.log(response.data);
            setMembers(response.data);
        });
    }, []);

    return (
        <div>
            <Heading name={team.teamDescription} />

            <Heading name={"Members"} />
            <Grid container spacing={3}>
                {members.map((member) => (
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="teamMemberIcon">
                                        {`${member.firstName[0].toUpperCase()}${member.lastName[0].toUpperCase()}`}
                                    </Avatar>
                                }
                                title={member.completeName}
                                subheader={member.jobPosition}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Team;
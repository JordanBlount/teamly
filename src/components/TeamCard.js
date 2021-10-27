import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red, green, blue, orange, deepPurple } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useHistory } from 'react-router';

function TeamCard(props) {

    const history = useHistory();

    const firstTwo = (name) => {
        return name.split(' ').map((x, idx) => {
            if(idx < 2) {
                return x[0].toUpperCase();
            }
        }
        ).join("");
    }

    const getColor = (teamType) => {
        switch(teamType) {
            case 1:
                return blue[500];

            case 3:
                return orange[500];

            case 4:
                return deepPurple[500];

            case 10:
                return green[500];

            default: 
                return red[500];
        }
    }

    return (
        // This sets the minimum width of a card. The means our cards can never get bigger than this.
        <Card sx={{ minWidth: 275 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: getColor(props.team.teamType) }} aria-label="teamLeaderIcon">
                        {firstTwo(props.team.teamDescription)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.team.teamDescription}
                subheader={props.team.teamName}
            />
            <CardContent>
                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.team.teamDescription}
                </Typography> */}
                {/* <Typography variant="body2">
                    Team Leader: {props.team.teamLeader}
                </Typography> */}
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => history.push(`/teams/${props.team.id}`)}>More</Button>
            </CardActions>
        </Card>
    );
}

export default TeamCard;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router';

function TeamCard(props) {

    const history = useHistory();

    return (
        // This sets the minimum width of a card. The means our cards can never get bigger than this.
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.team.teamDescription}
                </Typography>
                <Typography variant="body2">
                    Team Leader: {props.team.teamLeader}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => history.push(`/teams/${props.team.id}`)}>More</Button>
            </CardActions>
        </Card>
    );
}

export default TeamCard;

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Team(props) {

    return (
        // This sets the minimum width of a card. The means our cards can never get bigger than this.
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant="body2">
                    Team Leader: Jordan Blount
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">More</Button>
            </CardActions>
        </Card>
    );
}

export default Team;

import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { red, green, blue, orange, deepPurple } from '@mui/material/colors';

import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { CardActionArea } from '@mui/material';

import Heading from '../components/Heading';

import ApiServices from '../services/ApiServices';

const EmployeeTab = () => {

    const params = useParams();
    const history = useHistory();

    const [members, setMembers] = useState([]);
    //const [tableData, setTableData] = useState([]);

    useEffect(() => {
        ApiServices.getMembers().then((response) => {
            console.log(response.data);
            setMembers(response.data);
        });
    }, []);

    // TODO: Make this give a random color out for each person
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
        <div className="page employee">
            {/* <Heading name="Employees" /> */}
            {/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Position</TableCell>
                            <TableCell align="right">Team</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.position}</TableCell>
                                <TableCell align="right">{row.team}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}
            <Heading name={"Members"} />
            <Grid container spacing={3}>
                {members.map((member) => (
                    <Grid item xs={12} md={6} lg={4}>
                        <CardActionArea
                            onClick={() => history.push(`/employees/${member.id}`)}
                        >
                            <Card>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="teamMemberIcon">
                                            {`${member.firstName[0].toUpperCase()}${member.lastName[0].toUpperCase()}`}
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings"

                                            // Stops the settings icon from causing the 
                                            // card area to trigger
                                            onMouseDown={event => event.stopPropagation()}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                event.preventDefault();
                                                console.log("Button clicked");
                                            }}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={member.completeName}
                                    subheader={member.jobPosition}
                                />
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default EmployeeTab;
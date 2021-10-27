import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Heading from '../components/Heading';

import ApiServices from '../services/ApiServices';

const EmployeeTab = () => {

    const params = useParams();

    const [members, setMembers] = useState([]);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        ApiServices.getMembers().then((response) => {
            console.log(response.data);
            setMembers(response.data);
        });
    }, []);

    return (
        <div className="page employee">
            <Heading name="Employees" />
            <TableContainer component={Paper}>
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
            </TableContainer>
        </div>
    );
};

export default EmployeeTab;
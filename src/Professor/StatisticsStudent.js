import { TableBody, TableRow } from '@mui/material';
import React, {Component} from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

function createData(last_name, first_name, userName, firstQRCode, secondQRCode, lastQRCode) {
    return {last_name, first_name, userName, firstQRCode, secondQRCode, lastQRCode};
}

class StatisticsStudent extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nume</TableCell>
                            <TableCell align="right">Prenume</TableCell>
                            <TableCell align="right">user</TableCell>
                            <TableCell align="right">Prezenta inceput</TableCell>
                            <TableCell align="right">Prezenta mijloc</TableCell>
                            <TableCell align="right">Prezenta sfarsit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> 
                        {rows.map((row) => (
                            <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{row.last_name}</TableCell>
                            <TableCell align="right">{row.first_name}</TableCell>
                            <TableCell align="right">{row.userName}</TableCell>
                            <TableCell align="right">{row.firstQRCode}</TableCell>
                            <TableCell align="right">{row.secondQRCode}</TableCell>
                            <TableCell align="right">{row.lastQRCode}</TableCell>
                          </TableRow>
                        ))}
                    </ TableBody>
                </ Table>
            </ TableContainer>    
            </>
        );
    }
}

export default StatisticsStudent;
import * as React from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import { makeStyles } from '@mui/styles';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import info from './MOCK_DATA (4).json';

const useStyles = makeStyles({
  root: {
   margin: '10px 10px',
   border: '1px solid black'
   },
  rowStyle: {
    '&:hover': {backgroundColor:"#ccc"},
    textDecoration: 'none'
  } 
});

const BasicTable = () => {
  const classes = useStyles();
  return (
    <>
    <h1 >Tenants Management</h1>
    <TableContainer component={Paper} className={classes.root}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >

            <TableCell align="center" >Id</TableCell>
            <TableCell align="center" >Apartment Name</TableCell>
            <TableCell align="center" >Rent</TableCell>
            <TableCell align="center" >Total Rooms</TableCell>
            <TableCell align="center" >Rooms Available</TableCell>
            <TableCell align="center" >Tenants</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {info.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              component={Link} to={`/details/${row.id}`} key={row.id}
              className={classes.rowStyle}
            >
              
              <TableCell component="th" scope="row" align="center">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.apartment_name}
              </TableCell>

              <TableCell align="center">{row.rent}</TableCell>
              <TableCell align="center">{row.rooms}</TableCell>
              <TableCell align="center">{row.rooms - row.tenants.length}</TableCell>
              <TableCell align="center">{row.tenants.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default BasicTable;
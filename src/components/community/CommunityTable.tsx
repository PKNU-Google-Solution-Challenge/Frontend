import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F8E7C8',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const CommunityTable = () => {
  return (
    <TableContainer>
      <Table
        sx={{ width: '100%', boxShadow: 0 }}
        aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align='right'>Calories</StyledTableCell>
            <StyledTableCell align='right'>Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align='right'>Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align='right'>Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                component='th'
                scope='row'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.calories}</StyledTableCell>
              <StyledTableCell align='right'>{row.fat}</StyledTableCell>
              <StyledTableCell align='right'>{row.carbs}</StyledTableCell>
              <StyledTableCell align='right'>{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommunityTable;
import { styled } from '@mui/material/styles';
import {
  TableContainer,
  Table as TableWrapper,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  tableCellClasses,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { blue } from '@mui/material/colors';

const StyledTableHeaderCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: blue[900],
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
}));

function Table({ columns, children }) {
  return (
    <TableContainer component={Paper}>
      <TableWrapper>
        <TableHead>
          <TableRow>
            {columns.map((item, index) => (
              <StyledTableHeaderCell key={index} align="center">
                {item}
              </StyledTableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </TableWrapper>
    </TableContainer>
  );
}

export default Table;

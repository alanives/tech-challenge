import { memo } from 'react';
import { TableRow as Row, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

const StyledTableRow = styled(Row)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: grey[50],
  },
  '&:hover': {
    backgroundColor: blue[50],
  },
}));

function TableRow({ data }) {
  return (
    <StyledTableRow data-testid="table-row">
      {data.map((item, index) => (
        <TableCell key={index}>{item}</TableCell>
      ))}
    </StyledTableRow>
  );
}

export default memo(TableRow);

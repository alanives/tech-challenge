import { TableRow, TableCell, Typography, Box } from '@mui/material';

function TableZeroState({ colSpan }) {
  return (
    <TableRow>
      <TableCell align="center" colSpan={colSpan}>
        <Box sx={{ p: 3 }}>
          <Typography align="center">No data found.</Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
}

export default TableZeroState;

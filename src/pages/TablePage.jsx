import { useState } from 'react';
import { useOutletContext } from 'react-router';
import { debounce } from 'debounce';

import { Box } from '@mui/material';

import Table from '../components/Table';
import TableZeroState from '../components/TableZeroState';
import TableRow from '../components/TableRow';
import SearchBox from '../components/SearchBox';

const columns = [
  'Account Name',
  'Amount',
  'Currency Name',
  'Transaction Type',
  'Transaction Description',
  'Credit Card Number',
  'Credit Card Issuer',
  'Credit Card Name',
];

/**
 * The table page.
 */
function TablePage() {
  const [query, setQuery] = useState('');
  const { data } = useOutletContext();

  function search(query) {
    setQuery(query);
  }

  const rows = query
    // joins all transaction data in one single string
    // and search for query in it
    ? data.filter((item) => {
        return Object.values(item)
          .join(' ')
          .toLowerCase()
          .includes(query.toLowerCase());
      })
    : data;

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        {/* Debounces search fn for 1 second */}
        <SearchBox search={debounce(search, 1000)} />
      </Box>
      <Box>
        <Table columns={columns}>
          {rows.length === 0 ? (
            <TableZeroState colSpan={columns.length} />
          ) : (
            rows.map((item) => (
              <TableRow
                key={Object.values(item).join(',')}
                data={Object.values(item)}
              />
            ))
          )}
        </Table>
      </Box>
    </Box>
  );
}

export default TablePage;

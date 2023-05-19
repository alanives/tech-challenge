import { useEffect, useState } from 'react';
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';

function SearchBox({ search }) {
  const [text, setText] = useState();

  useEffect(() => {
    search(text);
  }, [text, search]);

  return (
    <FormControl sx={{ width: 400 }} variant="outlined">
      <InputLabel htmlFor="searchbox">Search</InputLabel>
      <OutlinedInput
        id="searchbox"
        type="text"
        endAdornment={
          <InputAdornment
            sx={{ borderRight: `1px solid ${grey[100]}` }}
            position="end"
          >
            <IconButton aria-label="search" edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        label="Search"
        placeholder="Search by account"
        onChange={(e) => setText(e.target.value)}
      />
    </FormControl>
  );
}

export default SearchBox;

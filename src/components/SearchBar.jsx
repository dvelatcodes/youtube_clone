import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper
      component='form'
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        mr: { sm: 5 },
        pl: 2,
        boxShadow: 'none',
      }}
      onSubmit={() => {}}
    >
      <input
        className='search-bar'
        placeholder='search...'
        value=''
        onChange={() => {}}
      />
      <IconButton
        type='submit'
        sx={{ color: 'red', p: '10px' }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

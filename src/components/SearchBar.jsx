import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`search/${searchTerm}`);
    }

    setSearchTerm('');
  };
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
      onSubmit={handleSubmit}
    >
      <input
        className='search-bar'
        placeholder='search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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

import React from 'react';
import { Stack } from '@mui/material';
import { logo } from '../utils/constant';
import { Link } from 'react-router-dom';
import { SearchBar } from './index';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      sx={{ backgroundColor: '#000', top: 0, justifyContent: 'space-between' }}
    >
      <Link style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt='logo'
          height={45}
        />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;

import React from 'react';
import { categories } from '../utils/constant';
import { Box } from '@mui/material';

const vary = 'New';
const Sidebar = () => (
  <Box
    direction='row'
    sx={{
      overflowY: 'auto',
      flexDirection: { md: 'column' },
      height: { sx: 'auto', md: '92%' },
    }}
  >
    {categories.map((category) => (
      <button
        className='category-btn'
        style={{ backgroundColor: category.name === vary && '#FC1503' }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === vary ? 'white' : 'red',
            marginRight: '15px',
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            color: 'white',
            opacity: category.name === vary ? '1' : '0.8',
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Box>
);

export default Sidebar;

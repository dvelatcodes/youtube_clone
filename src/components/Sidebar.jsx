import React from 'react';
import { categories } from '../utils/constant';
import { Box, Stack } from '@mui/material';

const vary = 'New';
const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction={{ xs: 'row', md: 'column' }}
    sx={{
      overflowY: 'auto',
      height: { xs: 'auto', md: '92%' },
    }}
  >
    {categories.map((category) => (
      <button
        className='category-btn'
        style={{
          backgroundColor: category.name === selectedCategory && '#FC1503',
        }}
        key={category.name}
        onClick={() => setSelectedCategory(category.name)}
      >
        <span
          style={{
            color: category.name === selectedCategory ? 'white' : 'red',
            marginRight: '15px',
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            color: 'white',
            opacity: category.name === selectedCategory ? '1' : '0.8',
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;

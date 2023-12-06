import { useState, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { Sidebar, Videos } from './index';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: {
            sx: 'auto',
            md: '92vh',
            borderRight: '1px solid #3d3d3d',
            px: { sx: 0, md: 2 },
          },
        }}
      >
        <Sidebar />
        <Typography
          variant='body2'
          className='copyright'
          sx={{ color: '#fff', mt: 1.5 }}
        >
          Dvelat Codes &copy; 2023
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{ height: '90vh', overflow: 'auto', flex: 2 }}
      >
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white' }}
        >
          New <span style={{ color: '#F35103' }}>Videos</span>
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;

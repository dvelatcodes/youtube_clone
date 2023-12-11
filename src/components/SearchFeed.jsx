import { useState, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { Sidebar, Videos } from './index';
import { dataFromApi } from '../utils/apiFetch';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();
  useEffect(() => {
    dataFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, []);
  return (
    <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
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
          Search Results for:{' '}
          <span style={{ color: '#F35103' }}>{searchTerm}</span> Videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;

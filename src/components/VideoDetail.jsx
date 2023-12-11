import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { dataFromApi } from '../utils/apiFetch';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Videos } from './index';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    // call for clicked video information using id
    dataFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    // call for related videos using id
    dataFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return 'Loading...';
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <Typography
              color='#fff'
              variant='h5'
              fontWeight='bold'
              padding={2}
            >
              {title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ color: '#fff' }}
              py={1}
              px={2}
            >
              <Link to={`channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color='#fff'
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ color: 'grey', fontSize: '12px', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack
                direction='row'
                alignItems='center'
                gap='20px'
              >
                <Typography
                  variant='body1'
                  sx={{ opacity: '0.7px' }}
                >
                  {parseInt(viewCount).toLocaleString()}
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ opacity: '0.7px' }}
                >
                  {parseInt(likeCount).toLocaleString()}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          py={{ md: 1, xs: 5 }}
          px={2}
          justifyContent='center'
          alignItems='center'
        >
          <Videos
            videos={videos}
            direction='column'
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;

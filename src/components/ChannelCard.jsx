import { Link } from 'react-router-dom';
import { CardContent, CardMedia, Box, Typography, Card } from '@mui/material';
import { demoProfilePicture, demoChannelTitle } from '../utils/constant';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { md: '320px', xs: '356px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails.high.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title || demoChannelTitle}
          sx={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            mb: 2,
            border: '1px solid #e3e3e3',
          }}
        />
        <Typography>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ color: 'gray', fontSize: 14, ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}{' '}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;

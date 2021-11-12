import { Avatar, Box, Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = (props) => {
  const { name, review, rating, img } = props.review;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 400,
          overflow: 'hidden',
        },
      }}
    >
      <Paper elevation={3} sx={{ textAlign: 'center' }}>
        <Box sx={{ py: 2 }}>
          <Avatar
            alt="Cindy Baker"
            src={img}
            sx={{ width: '70px', height: '70px', mx: 'auto' }}
          />
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom component="div">
            {name}
          </Typography>
        </Box>
        <Box>
          <Rating name="read-only" value={rating} readOnly />
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography
            variant="p"
            gutterBottom
            component="div"
            sx={{
              textAlign: 'justify',
              fontFamily: 'Courgette',
              lineHeight: '24px',
            }}
          >
            {review}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Review;

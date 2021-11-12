import { Box, CircularProgress, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    fetch('http://morning-beach-20247.herokuapp.com/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setSuccess(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ backgroundColor: '#F0F0F0', padding: '20px 0' }}>
      <h1 className="section-heading">Reviews</h1>
      {success && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {reviews.map((review) => (
          <Grid item xs={4} sm={4} md={4} key={review._id}>
            <Review review={review} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Reviews;

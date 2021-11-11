import { TextField, Box } from '@mui/material';
import React from 'react';

const Review = () => {
  return (
    <div>
      <h1>Add Your Review</h1>

      <form>
        <Box>
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </Box>
      </form>
    </div>
  );
};

export default Review;

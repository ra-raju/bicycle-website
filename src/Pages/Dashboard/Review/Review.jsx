import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
  const [rating, setRating] = useState('');
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  console.log(user);

  const onSubmit = (data) => {
    const review = { ...data, rating, email: user.email, img: user.photoURL };
    console.log(review);

    fetch('http://localhost:8000/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
    reset();
    setRating('');
  };

  const handleChange = (event) => {
    setRating(event.target.value);
  };
  return (
    <div className="dashboard">
      <h1>Add Your Review</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            sx={{ width: ' 300px', my: 2 }}
            {...register('name')}
            required
          />
        </Box>
        <Box>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Rating
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={rating}
              onChange={handleChange}
              autoWidth
              label="Age"
              required
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <TextField
            id="filled-multiline-flexible"
            label="Review"
            multiline
            rows={4}
            variant="filled"
            required
            sx={{ width: ' 300px', my: 2 }}
            {...register('review')}
          />
        </Box>
        <Box>
          <Button variant="contained" type="submit">
            Contained
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Review;

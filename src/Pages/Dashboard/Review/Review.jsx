import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
  const [rating, setRating] = useState('');
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    const review = { ...data, rating, email: user.email, img: user.photoURL };

    fetch('https://morning-beach-20247.herokuapp.com/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setOpen(true);
          reset();
          setRating('');
        }
      })
      .catch((err) => console.log(err.message));
  };

  const handleChange = (event) => {
    setRating(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="dashboard">
      <h1 className="section-heading">Add Your Review</h1>

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
              <MenuItem value={0}>0</MenuItem>
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
            Send
          </Button>
        </Box>
      </form>
      {open && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Rating added successfully"
          action={action}
        />
      )}
    </div>
  );
};

export default Review;

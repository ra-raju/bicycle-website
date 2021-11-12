import CloseIcon from '@mui/icons-material/Close';
import { Alert, Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = React.useState(true);

  const onSubmit = (data) => {
    console.log(data);

    fetch('https://morning-beach-20247.herokuapp.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setSuccess(true);
          setOpen(true);
          reset();
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="dashboard">
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          {' '}
          <TextField
            sx={{ width: '300px', my: 1 }}
            label="Img url"
            variant="standard"
            required
            type="url"
            {...register('img')}
          />
        </Box>
        <Box>
          {' '}
          <TextField
            sx={{ width: '300px', my: 1 }}
            label="Title"
            variant="standard"
            required
            type="text"
            {...register('title')}
          />
        </Box>
        <Box>
          {' '}
          <TextField
            sx={{ width: '300px', my: 1 }}
            label="Description"
            variant="standard"
            required
            type="text"
            {...register('description')}
          />
        </Box>
        <Box>
          {' '}
          <TextField
            sx={{ width: '300px', my: 1 }}
            label="Price"
            variant="standard"
            required
            type="number"
            {...register('price')}
          />
        </Box>
        <Box>
          {' '}
          <TextField
            sx={{ width: '300px', my: 1 }}
            label="Rating"
            variant="standard"
            placeholder="1 to 5"
            required
            type="number"
            {...register('rating')}
          />
        </Box>
        <Button variant="contained" type="submit">
          Submit
        </Button>
        {success && (
          <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Product Added Successfully !!
              </Alert>
            </Collapse>
          </Box>
        )}
      </form>
    </div>
  );
};

export default AddProduct;

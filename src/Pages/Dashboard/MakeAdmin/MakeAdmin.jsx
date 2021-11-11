import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch('http://localhost:8000/user/admin', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="dashboard adminpage">
      <h1>Make an Admin</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ my: 2 }}>
          <TextField
            id="standard-basic"
            label="Email"
            type="email"
            variant="standard"
            sx={{ width: '300px' }}
            required
            {...register('email')}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ mx: 'auto', textAlign: 'center', width: '300px' }}
          type="submit"
        >
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;

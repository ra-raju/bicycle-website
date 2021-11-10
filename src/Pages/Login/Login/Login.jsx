import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import login from '../../../images/login.jpg';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="registration">
      <Typography variant="h4" gutterBottom component="div" sx={{ my: 2 }}>
        Login
      </Typography>

      <Grid container spacing={2} sx={{ height: '500px' }}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <TextField
                sx={{ width: '300px', my: 2 }}
                label="Email"
                variant="outlined"
                type="email"
                required
                {...register('email')}
              />
            </Box>
            <Box>
              <TextField
                sx={{ width: '300px', my: 2 }}
                label="Password"
                variant="outlined"
                type="password"
                required
                {...register('password')}
              />
            </Box>

            <Box>
              <Button variant="contained" type="submit">
                Contained
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item xs={12} md={6} sx={{ height: '500px' }}>
          <img src={login} alt="" className="login-img" />
        </Grid>
      </Grid>
    </section>
  );
};

export default Login;

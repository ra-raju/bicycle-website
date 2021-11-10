import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.jpg';
import Navigation from '../../Sharedpage/Navigation/Navigation';

const Login = (props) => {
  console.log(props);
  const { signInWithPassword, loading, signInWithGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signInWithPassword(data.email, data.password, location, history);
  };
  return (
    <>
      <Navigation />

      <section className="registration">
        <Typography variant="h4" gutterBottom component="div" sx={{ my: 2 }}>
          Login
        </Typography>

        <Grid container spacing={2} sx={{ height: '500px' }}>
          <Grid item xs={12} md={5}>
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
                  Login
                </Button>
              </Box>
              {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                  <CircularProgress />
                </Box>
              )}
            </form>
            <Box>
              <Typography>
                Create a new account?{' '}
                <Button variant="text">
                  <Link to="/register" style={{ textDecoration: 'none' }}>
                    Registration
                  </Link>
                </Button>
              </Typography>

              <Typography>Login with -</Typography>
              <span onClick={() => signInWithGoogle(location, history)}>
                <i
                  className="fab fa-google"
                  style={{
                    fontSize: 25,
                    backgroundColor: '#ddd',
                    padding: '7px',
                    borderRadius: '2px',
                    color: 'blue',
                  }}
                ></i>
              </span>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} sx={{ height: '500px' }}>
            <img src={login} alt="" className="login-img" />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Login;

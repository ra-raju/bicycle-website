import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.jpg';
import Footer from '../../Sharedpage/Footer/Footer';
import Navigation from '../../Sharedpage/Navigation/Navigation';
import './Register.css';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [checkPass, setCheckPass] = useState(false);
  const history = useHistory();

  const { signUpWithPassword, loading } = useAuth();
  const onSubmit = (data) => {
    const { name, email, password, re_password } = data;
    if (password === re_password) {
      console.log(data);
      signUpWithPassword(email, password, name, history);
    } else {
      setCheckPass(true);
    }
  };
  return (
    <>
      <Navigation />
      <section className="registration">
        <Typography variant="h4" gutterBottom component="div" sx={{ my: 2 }}>
          Registration
        </Typography>

        <Grid container spacing={2} sx={{ height: '500px' }}>
          <Grid item xs={12} md={5}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <TextField
                  sx={{ width: '300px', my: 2 }}
                  label="Name"
                  variant="outlined"
                  type="text"
                  required
                  {...register('name')}
                />
              </Box>
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
                <TextField
                  sx={{ width: '300px', my: 2 }}
                  label="Re-enter Password"
                  variant="outlined"
                  type="password"
                  required
                  {...register('re_password')}
                />
                {checkPass && (
                  <Alert
                    sx={{ width: '300px', my: 2, mx: 'auto' }}
                    severity="error"
                  >
                    Password not matched
                  </Alert>
                )}
              </Box>

              <Box>
                <Button variant="contained" type="submit">
                  Registration
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
                Already Registered? please{' '}
                <Button variant="text">
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    Login here
                  </Link>
                </Button>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} sx={{ height: '500px' }}>
            <img src={login} alt="" className="login-img" />
          </Grid>
        </Grid>
      </section>
      <Footer />
    </>
  );
};

export default Register;

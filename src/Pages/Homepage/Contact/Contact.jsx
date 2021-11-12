import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Grid, Snackbar, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useForm } from 'react-hook-form';
import contact from '../../../images/contact-us.jpg';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [open, setOpen] = React.useState(false);
  const onSubmit = (data) => {
    fetch('https://morning-beach-20247.herokuapp.com/message', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          setOpen(true);
        }
      })
      .catch((err) => console.log(err));
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
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <h1 className="section-heading">Contact us</h1>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} sx={{ mx: 'auto' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ textAlign: 'center' }}>
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                sx={{ width: '300px', my: 2 }}
                type="text"
                {...register('name')}
              />
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                sx={{ width: '300px', my: 2 }}
                type="email"
                {...register('email')}
              />
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <TextField
                id="filled-basic"
                label="Message"
                variant="filled"
                multiline
                rows={4}
                sx={{ width: '300px', my: 2 }}
                type="text"
                {...register('message')}
              />
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" type="submit" sx={{ width: '300px' }}>
                Submit
              </Button>
            </Box>
          </form>
          {open && (
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message="send success"
              action={action}
            />
          )}
        </Grid>
        <Grid item sm={12} md={6}>
          <img src={contact} alt="" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;

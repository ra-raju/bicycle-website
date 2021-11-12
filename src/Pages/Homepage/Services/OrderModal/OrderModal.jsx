import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function OrderModal({ open, handleClose, service }) {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newData = {
      ...data,
      service_name: service.title,
      price: service.price,
      img: service.img,
      status: 'Pending',
    };
    console.log(newData);

    fetch('https://morning-beach-20247.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.insertedId) {
          handleClose();
          reset();
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            sx={{ my: 2, textAlign: 'center' }}
            component="h2"
          >
            Place Your Order
          </Typography>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <TextField
                sx={{ my: 1, width: '70%' }}
                label="Your Name"
                variant="standard"
                defaultValue={user.displayName}
                {...register('user_name')}
              />
            </Box>
            <Box>
              <TextField
                sx={{ my: 1, width: '70%' }}
                label="Email"
                variant="standard"
                defaultValue={user.email}
                {...register('email')}
              />
            </Box>
            <Box>
              <TextField
                sx={{ my: 1, width: '70%' }}
                label="Phone"
                variant="standard"
                required
                type="tel"
                {...register('phone')}
              />
            </Box>
            <Box>
              <TextField
                sx={{ my: 1, width: '70%' }}
                type="number"
                label="Quantity"
                variant="standard"
                {...register('quantity')}
              />
            </Box>
            <Box>
              <TextField
                sx={{ my: 1, width: '70%' }}
                label="Address"
                variant="standard"
                required
                type="text"
                maxRows={4}
                multiline
                {...register('address')}
              />
            </Box>
            <Box>
              <Button variant="contained" color="primary" type="submit">
                Place Order
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

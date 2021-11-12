import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Snackbar,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';

const ManangeOrder = () => {
  const [orders, setOrders] = useState([]);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://morning-beach-20247.herokuapp.com/allorders')
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, [orders]);

  const handleDeleteOrder = (id) => {
    const process = window.confirm(
      'Are you sure you want to delete this order?'
    );
    if (process) {
      const uri = `https://morning-beach-20247.herokuapp.com/orders/${id}`;

      fetch(uri, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remainingOrder = orders.filter((order) => order._id !== id);
            setOrders(remainingOrder);
          }
        })
        .catch((err) => console.log(err.meaaage));
    }
  };

  const handleUpdateStatus = (id) => {
    fetch(`https://morning-beach-20247.herokuapp.com/order/update/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'Approved' }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          setSuccess(true);
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
    <div>
      <h1>Manage All Orders</h1>

      {success && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="status update successfully"
          action={action}
        />
      )}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Products</TableCell>
              <TableCell sx={{ fontWeight: 700 }} align="right">
                Quantity
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }} align="right">
                Price
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }} align="right">
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: 700 }} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.service_name}
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right" sx={{ color: 'blue' }}>
                  {row.status}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleDeleteOrder(row._id)}
                    sx={{ my: 1 }}
                  >
                    Remove order
                  </Button>
                  <br />
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleUpdateStatus(row._id)}
                  >
                    Update Status
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {loading && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            my: 2,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default ManangeOrder;

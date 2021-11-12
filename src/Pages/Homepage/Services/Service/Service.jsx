import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import React from 'react';
import OrderModal from '../OrderModal/OrderModal';
import './Service.css';

const Service = (props) => {
  const { img, title, description, rating, price } = props.service;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={img} alt="" />
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{description.slice(0, 90)}</p>
          <p className="card-price">
            <span>
              <i className="fas fa-dollar-sign dollar-icon"></i>
            </span>{' '}
            {price}
          </p>
          <Box
            sx={{
              my: 2,
            }}
          >
            <Rating name="read-only" value={parseFloat(rating)} readOnly />
          </Box>
        </div>
        <div className="card-action">
          <Button variant="contained" type="submit" onClick={handleOpen}>
            Buy Now
          </Button>
        </div>
      </div>

      <OrderModal
        open={open}
        handleClose={handleClose}
        service={props.service}
      />
    </div>
  );
};

export default Service;

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import React from 'react';
import './Service.css';

const Service = (props) => {
  console.log(props.service);
  const { img, title, description, rating, price } = props.service;

  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={img} alt="" />
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{description.slice(0, 100)}</p>
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
            <Rating name="read-only" value={rating} readOnly />
          </Box>
        </div>
        <div className="card-action">
          <Button variant="contained">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Service;

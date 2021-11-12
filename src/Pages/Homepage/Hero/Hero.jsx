import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../../images/hero.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <div className="hero-content">
            <h1 className="hero-heading">
              Ride Your Bike <br /> to Havean with Us
            </h1>
            <p className="hero-para">
              Our shop provides varities of bicycle with best design and cheap
              price. Adjust your funds and needs, to realize healthy and fit
              body.
            </p>
            <Button variant="contained">
              <Link
                to="/products"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                All Products
              </Link>
            </Button>
          </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <img src={hero} alt="" className="hero-img" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;

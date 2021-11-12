import React from 'react';
import Navigation from '../../Sharedpage/Navigation/Navigation';
import Hero from '../Hero/Hero';
import Reviews from '../Reviews/Reviews/Reviews';
import Services from '../Services/Services/Services';

const Homepage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Services />
      <Reviews />
    </div>
  );
};

export default Homepage;

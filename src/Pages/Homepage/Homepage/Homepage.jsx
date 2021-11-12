import React from 'react';
import Navigation from '../../Sharedpage/Navigation/Navigation';
import Contact from '../Contact/Contact';
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
      <Contact />
    </div>
  );
};

export default Homepage;

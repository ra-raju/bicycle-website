import React from 'react';
import Footer from '../../Sharedpage/Footer/Footer';
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
      <Footer />
    </div>
  );
};

export default Homepage;

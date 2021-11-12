import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import Service from '../../Homepage/Services/Service/Service';
import Navigation from '../../Sharedpage/Navigation/Navigation';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://morning-beach-20247.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Navigation />
      <Container>
        <Typography variant="h3" gutterBottom component="div">
          {' '}
          Our Products
        </Typography>
        <Box sx={{ flexGrow: 1, my: 3 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.map((service) => (
              <Grid item xs={4} sm={4} md={4} key={service._id}>
                <Service service={service} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Products;

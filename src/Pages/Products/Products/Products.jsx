import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Sharedpage/Navigation/Navigation';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/products')
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
            {products.map((product) => (
              <Grid item xs={4} sm={4} md={4} key={product._id}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Products;

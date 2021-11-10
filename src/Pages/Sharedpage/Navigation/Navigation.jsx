import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

export default function Navigation() {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Runner Cycle
          </Typography>

          <NavLink
            to="/products"
            style={{
              textDecoration: 'none',
              color: 'white',
              // marginRight: '5px',
              marginLeft: 'auto',
            }}
          >
            Products
          </NavLink>

          {user.email ? (
            <Box>
              <span>{user.displayName}</span>
              <Button color="inherit" onClick={logOut}>
                Logout
              </Button>
            </Box>
          ) : (
            <Button color="inherit">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

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
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Runner Cycle
            </Link>
          </Typography>

          <Box sx={{ mx: 5 }}>
            <NavLink
              to="/products"
              style={{
                textDecoration: 'none',
                color: 'white',
                marginRight: '5px',
              }}
            >
              Products
            </NavLink>
          </Box>

          {user.email ? (
            <Box>
              <NavLink
                to="/dashboard"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  marginRight: '20px',
                }}
              >
                Dashboard
              </NavLink>
              <span>{user.displayName}</span>
              <Button color="inherit" onClick={logOut} sx={{ mr: 3 }}>
                Logout
              </Button>
            </Box>
          ) : (
            <Button color="inherit" sx={{ mr: 2 }}>
              <Link
                to="/login"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  marginRight: '5px',
                }}
              >
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

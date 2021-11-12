import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css';

export default function Navigation() {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appbar">
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

          <Box sx={{ mx: 3 }}>
            <NavLink
              to="/"
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
            >
              Home
            </NavLink>
          </Box>
          <Box sx={{ mx: 3 }}>
            <NavLink
              to="/products"
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
            >
              Products
            </NavLink>
          </Box>

          {user.email ? (
            <>
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
              </Box>

              <Box sx={{ mr: 2 }}>
                <span>{user.displayName}</span>
              </Box>
              <Avatar alt="Remy Sharp" src={user.photoURL} />
              <Button color="inherit" onClick={logOut} sx={{ mx: 2 }}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" sx={{ mr: 2 }}>
              <Link
                to="/login"
                style={{
                  textDecoration: 'none',
                  color: 'white',
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

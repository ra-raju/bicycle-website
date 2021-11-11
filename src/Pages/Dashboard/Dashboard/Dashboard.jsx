import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManangeOrder from '../ManageOrder/ManangeOrder';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import ProductAdd from '../ProductAdd/ProductAdd';
import Review from '../Review/Review';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Divider />
      {/*  add link here */}
      <Box sx={{ my: 2, textAlign: 'center' }}>
        <Button variant="contained" size="small">
          <Link
            to={`${url}/`}
            style={{ textDecoration: 'none', color: 'white', width: '120px' }}
          >
            {' '}
            Home
          </Link>
        </Button>
      </Box>
      <Box sx={{ my: 2, textAlign: 'center' }}>
        <Button variant="contained" size="small">
          <Link
            to={`${url}/pay`}
            style={{ textDecoration: 'none', color: 'white', width: '120px' }}
          >
            {' '}
            Pay
          </Link>
        </Button>
      </Box>
      <Box sx={{ my: 2, textAlign: 'center' }}>
        <Button variant="contained" size="small">
          <Link
            to={`${url}/review`}
            style={{ textDecoration: 'none', color: 'white', width: '120px' }}
          >
            {' '}
            Review
          </Link>
        </Button>
      </Box>
      {/* admin panal */}
      <Box sx={{ my: 2, textAlign: 'center' }}>
        <Button variant="contained" size="small">
          <Link
            to={`${url}/manageorder`}
            style={{ textDecoration: 'none', color: 'white', width: '120px' }}
          >
            {' '}
            Manage Order
          </Link>
        </Button>
      </Box>
      <Box sx={{ my: 2, textAlign: 'center' }}>
        <Button variant="contained" size="small">
          <Link
            to={`${url}/productadd`}
            style={{ textDecoration: 'none', color: 'white', width: '120px' }}
          >
            {' '}
            Add Product
          </Link>
        </Button>
      </Box>
      <Box sx={{ my: 2, textAlign: 'center' }}>
        <Button variant="contained" size="small">
          <Link
            to={`${url}/admin`}
            style={{ textDecoration: 'none', color: 'white', width: '120px' }}
          >
            {' '}
            Make Admin
          </Link>
        </Button>
      </Box>
      <Box sx={{ my: 2, textAlign: 'center' }}>
        <Button variant="contained" size="small">
          <Link
            to={`${url}/manageproduct`}
            style={{ textDecoration: 'none', color: 'white', width: '120px' }}
          >
            {' '}
            Manage Product
          </Link>
        </Button>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <MyOrders />
          </Route>
          <Route path={`${path}/pay`}>
            {' '}
            <Pay />
          </Route>
          <Route path={`${path}/review`}>
            {' '}
            <Review />
          </Route>
          <Route path={`${path}/manageorder`}>
            {' '}
            <ManangeOrder />
          </Route>
          <Route path={`${path}/productadd`}>
            {' '}
            <ProductAdd />
          </Route>
          <Route path={`${path}/admin`}>
            {' '}
            <MakeAdmin />
          </Route>
          <Route path={`${path}/manageproduct`}>
            {' '}
            <Pay />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

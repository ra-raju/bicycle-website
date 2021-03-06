import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Homepage from './Pages/Homepage/Homepage/Homepage';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Notfound from './Pages/Notfound/Notfound';
import AddProduct from './Pages/PostServer/AddProduct/AddProduct';
import Products from './Pages/Products/Products/Products';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/home" component={Homepage} />
            <Route path="/addproduct" component={AddProduct} />
            <PrivateRoute path="/products">
              <Products />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>

            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="*" component={Notfound} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

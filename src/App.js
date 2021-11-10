import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/Homepage/Homepage';
import AddProduct from './Pages/PostServer/AddProduct/AddProduct';
import Products from './Pages/Products/Products/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/products" component={Products} />

          {/* </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

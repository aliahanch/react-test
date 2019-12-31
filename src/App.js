import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart/cart";
import Default from "./components/Default";
import Navbar2 from "./components/Navbar2";
import comm from "./ss/comm"

function App() {
  return (
      <React.Fragment>
        <Navbar2 />
          <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route path="/comm" component={comm} />
              {/*<Route path="/store" component={Store} />*/}
              <Route component={Default} />
          </Switch>
      </React.Fragment>
  );
}

export default App;

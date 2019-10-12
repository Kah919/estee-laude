import React from 'react';
import Home from './components/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aids from './components/aids';
import Breast from './components/breast';
import Ocean from './components/ocean';
import Product from './components/product';
import Product1 from './components/productInfo';
import Product2 from './components/productInfo2';
import Product3 from './components/productInfo3';

import Influencers from './components/influencers';



function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/Aids" render={() => <Aids />} />
            <Route path="/Breast" render={() => <Breast />} />
            <Route path="/Ocean" render={() => <Ocean />} />
            <Route path="/influencers" render={() => <Influencers />} />
            <Route path="/product2" render={() => <Product2 />} />
            <Route path="/product3" render={() => <Product3 />} />

            <Route path="/" render={() => <Product1 />} />
          </Switch>
      </Router >
    </div>
  );
}

export default App;

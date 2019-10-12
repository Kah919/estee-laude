import React from 'react';
import Home from './components/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aids from './components/aids';
import Breast from './components/breast';
import Ocean from './components/ocean';
import Product from './components/product';
import Test from './components/productInfo';
import Influencers from './components/influencers';



function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/Aids" render={() => <Aids />} />
            <Route path="/Breast" render={() => <Breast />} />
            <Route path="/Ocean" render={() => <Ocean />} />
            <Route path="/test" render={() => <Test />} />
            <Route path="/influencers" render={() => <Influencers />} />
            <Route path="/" render={() => <Home />} />
          </Switch>
      </Router >
    </div>
  );
}

export default App;

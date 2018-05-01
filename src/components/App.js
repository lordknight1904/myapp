import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Product from './Product/Product';
import Category from './Category/Category';
import CustomHelmet from './CustomHelmet/CustomHelmet';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CustomHelmet />
        <Header key="header" />
        <Switch key="switch">
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            path="/product"
            component={Product}
          />
          <Route
            path="/category"
            component={Category}
          />
        </Switch>
        <Footer key="footer" />
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Helmet from 'react-helmet';
import Home from './Home/Home';
import Header from './Header/Header';

const App = props => (
  <div>
    <Helmet
      key="helmet"
      title="MyApp"
      titleTemplate=""
      meta={[
        { charset: 'utf-8' },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ]}
    />
    <Header key="header" />
    <Switch key="switch">
      <Route
        exact
        path="/"
        component={Home}
      />
    </Switch>
  </div>
);

export default App;

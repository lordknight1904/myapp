import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home/Home';
import Header from './Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { app } = this.props;
    return (
      <div>
        <Helmet
          key="helmet"
          title={app.title}
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
            {
              name: 'description',
              content: app.description,
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
  }
}

App.propTypes = {
  app: PropTypes.object.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(App);

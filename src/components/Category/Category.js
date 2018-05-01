import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import Grid from 'material-ui/Grid';
import logo from '../../logo.svg';
import { fetchTitle, setPage } from '../../reducers/App/app';

// import './Category.css';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    // const { app } = this.props;
    return (
      <div className="App" style={{ marginBottom: '20px' }}>
        <header
          className="App-header"
          style={{ height: '100vh' }}
        >
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>
          Category Detail
        </h2>
        <div className="content">
          <Grid container spacing={16}>
            <Grid item md sm xs={12}>
              images
            </Grid>
            <Grid item md sm xs={12}>
              info
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  app: PropTypes.object.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setPage,
      fetchTitle,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Category);

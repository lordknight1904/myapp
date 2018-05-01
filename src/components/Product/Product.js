import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import Grid from 'material-ui/Grid';
import logo from '../../logo.svg';
import { fetchTitle, setHelmet } from '../../reducers/App/app';

// import './Product.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.setHelmet('Product', 'Product Page');
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
          Product Detail
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

Product.propTypes = {
  app: PropTypes.object.isRequired,
  setHelmet: PropTypes.func.isRequired,
};

const mapStateToProps = ({ app }) => ({
  app,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setHelmet,
      fetchTitle,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Product);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from 'material-ui/Grid';
import { fetchTitle, setPage } from '../../reducers/App/app';

// import './Product.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    // setInterval();
  }
  render() {
    const { app } = this.props;
    return (
      <Grid container spacing={16}>
        <Grid item md sm xs={12}>
          images
        </Grid>
        <Grid item md sm xs={12}>
          info
        </Grid>
      </Grid>
    );
  }
}

Product.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Product);

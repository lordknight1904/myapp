import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { fetchTitle, setPage } from '../../reducers/App/app';

import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Link
        to="/product"
      >
        <Card className="cardContainer">
          <CardMedia
            className="cardMedia"
            image="images/aokhoac.jpg"
          />
          <CardContent className="itemContent">
            <Typography
              align="left"
              gutterBottom
              variant="display1"
            >
              Clothes
            </Typography>
            <Typography
              align="justify"
              variant="headline"
            >
              300.000đ
            </Typography>
          </CardContent>
        </Card>
      </Link>
    );
  }
}

Item.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Item);

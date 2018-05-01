import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { fetchTitle, setPage } from '../../reducers/App/app';

import './Item.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Card className="cardContainer">
        <CardMedia
          className="cardMedia"
          image="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent className="itemContent">
          <Typography align="left" gutterBottom variant="display1">
            Lizard
          </Typography>
          <Typography align="justify" variant="headline">
            300.000đ
          </Typography>
        </CardContent>
      </Card>
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

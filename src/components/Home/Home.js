import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import logo from '../../images/banner.jpg';
import '../App.css';
import Item from '../Item/Item';
import { fetchTitle, setHelmet } from '../../reducers/App/app';

class Home extends Component {
  componentDidMount() {
    const { app } = this.props;
    this.props.setHelmet(app.appName, app.appName);
  }
  render() {
    return (
      <div className="App" style={{ marginBottom: '20px' }}>
        <div id="homeBanner" className="homeBanner" />
        <h2>
          Top Choices
        </h2>
        <div className="content">
          <Grid container spacing={16}>
            {
              [0, 1, 2, 3, 4, 5].map(index => (
                <Grid key={index} item md={4} sm={6} xs={12}>
                  <Item />
                </Grid>
              ))
            }
          </Grid>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);

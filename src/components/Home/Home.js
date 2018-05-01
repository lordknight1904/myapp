import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import logo from '../../logo.svg';
import '../App.css';
import Item from '../Item/Item';

class Home extends Component {
  render() {
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

export default Home;

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { fetchTitle, setPage } from '../../reducers/App/app';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shrink: false,
      open: false,
    };
    this.shrink = false;
  }
  componentDidMount() {
    if (window) {
      window.addEventListener('scroll', this.onScroll);
    }
  }
  onScroll = (event) => {
    if (window) {
      const document = event.target.documentElement;
      const { scrollTop } = document;
      const { innerHeight } = window;
      if (scrollTop > innerHeight) {
        if (!this.shrink) {
          this.setState({ shrink: true });
          this.shrink = true;
        }
      } else if (this.shrink) {
        this.setState({ shrink: false });
        this.shrink = false;
      }
    }
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  handleSwitchPage = () => {
    this.props.setPage(this.props.app.page !== 'cart' ? 'cart' : 'store');
  };

  render() {
    const { app } = this.props;
    const { shrink, open } = this.state;
    return (
      <div
        id="appFrame"
        className="appFrame"
      >
        <AppBar
          className={
            classNames({
              appBarShift: open,
              appBarScrolled: shrink,
              appBarExpanded: !shrink,
              appBarShiftLeft: open,
            })}
          position="fixed"
        >
          <Toolbar className={`toolBar ${shrink ? 'toolBarScrolled' : 'toolBarExpanded'}`}>
            <IconButton
              className={classNames('menuButton', open && 'hide', shrink && 'menuButtonScrolled', !shrink && 'menuButtonExpanded')}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className="flex"
            >
              <Link to="/" className="titleLink">
                {app.appName}
              </Link>
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit" onClick={this.handleSwitchPage}>{app.page !== 'cart' ? 'Cart' : 'Store'}</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: 'drawerPaper',
          }}
        >
          <div className={`drawerHeader ${shrink ? 'drawerHeaderScrolled' : 'drawerHeaderExpanded'}`}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Product" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Sales" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="#simple-list"
            >
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

Header.propTypes = {
  app: PropTypes.object.isRequired,
  setPage: PropTypes.func.isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);

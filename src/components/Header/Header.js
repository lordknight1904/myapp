import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from 'material-ui/Drawer';
// import List from 'material-ui/List';
// import { MenuItem } from 'material-ui/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
// import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { fetchTitle, setPage } from '../../reducers/App/app';

import './Header.css';

// const drawerWidth = 240;
// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   flex: {
//     flex: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
//   hide: {
//     display: 'none',
//   },
//   appBar: {
//     backgroundColor: 'transparent',
//     color: 'white',
//     boxShadow: 'none',
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   toolBarScrolled: {
//     minHeight: '35px',
//   },
//   menuButtonScrolled: {
//     height: '35px',
//     webkitTransition: 'height 0.5s',
//     transition: 'height 0.5s',
//   },
//   appBarScrolled: {
//     backgroundColor: '#3f51b5',
//     color: 'black',
//     boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
//     webkitTransition: 'backgroundColor 0.5s, box-shadow 0.5s',
//     transition: 'background-color 0.5s, box-shadow 0.5s',
//   },
//   appFrame: {
//     zIndex: 1,
//     overflow: 'hidden',
//     position: 'relative',
//     display: 'flex',
//     width: '100%',
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   'appBarShift-left': {
//     marginLeft: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//   },
//   drawerPaper: {
//     position: 'fixed',
//     width: drawerWidth,
//   },
// });

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
              className='flex'
            >
              {app.title}
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

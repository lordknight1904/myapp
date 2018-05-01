import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  onEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  onNewsLetter = () => {
    this.setState({ email: '' });
  };
  render() {
    const { app } = this.props;
    return (
      <footer className="content footerContainer">
        <Grid
          className="footer"
          container
          justify="center"
          spacing={16}
        >
          <Grid
            className="footerColumn"
            item
            md
            sm
            xs={12}
          >
            <h3>About</h3>
            <p>How we complete you</p>
            <p>Return Policy</p>
            <p>Products Warranty</p>
          </Grid>
          <Grid
            className="footerColumn"
            item
            md
            sm
            xs={12}
          >
            <h3>{`@${app.title.replace(/\s/g, '')}`}</h3>
            <p>Facebook</p>
            <p>Twitter</p>
          </Grid>
          <Grid
            className="footerColumn"
            item
            md
            sm
            xs={12}
          >
            <h3>Register for Newsletter</h3>
            <FormGroup>
              <InputGroup>
                <FormControl className="" type="text" placeholder="Email" onChange={this.onEmail} value={this.state.email} />
                <InputGroup.Button>
                  <Button className="footerEmailSignUp" onClick={this.onNewsLetter}>Sign Up</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </Grid>
        </Grid>
        <Grid
          className="footer"
          container
          justify="center"
          spacing={16}
        >
          <Grid
            className="textAlignCenter"
            item
            md
            sm
            xs
          >
            <p>&copy; 2018 &middot; Ngo Anh Khoa &middot; Horizon Inc.</p>
          </Grid>
        </Grid>
      </footer>
    );
  }
}

Footer.propTypes = {
  app: PropTypes.objectOf(PropTypes.string).isRequired,
};
const mapStateToProps = ({ app }) => ({
  app,
});
export default connect(mapStateToProps)(Footer);

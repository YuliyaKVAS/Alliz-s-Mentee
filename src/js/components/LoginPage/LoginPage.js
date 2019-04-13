import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '../TextField';
import Button from '../Button';
import styles from './LoginPage.less';

const coursesLink = props => <Link to="/courses" {...props} />;

class LoginPage extends React.PureComponent {
  state = {
    email: '',
    password: ''
  };

  handleChangeFieldValue = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  handleClickLogin = () => {
    localStorage.setItem('token', this.state.email);
  };

  render() {
    return (
      <div className={styles.logInForm}>
        <TextField
          label="Email"
          variant="outlined"
          onChange={event => this.handleChangeFieldValue(event, 'email')}
          value={this.state.email}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          onChange={event => this.handleChangeFieldValue(event, 'password')}
          value={this.state.password}
        />
        <Button
          color="primary"
          variant="outlined"
          disabled={!this.state.email || !this.state.password}
          onClick={this.handleClickLogin}
          component={coursesLink}
        >
        Log in
        </Button>
      </div>
    );
  }
}

export default LoginPage;

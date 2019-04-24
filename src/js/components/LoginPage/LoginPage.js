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

  handleChangeFieldValue = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClickLogin = () => {
    localStorage.setItem('token', this.state.email);
  };

  render() {
    return (
      <div className={styles.logInForm}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          onChange={e => this.handleChangeFieldValue(e)}
          value={this.state.email}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          onChange={e => this.handleChangeFieldValue(e)}
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

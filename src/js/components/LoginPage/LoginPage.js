import React from 'react';
import TextField from '../TextField';
import Button from '../Button';
import styles from './LoginPage.less';
import { authUser, getUsers } from '../../services';


const renderUserList = temp => temp.map(item => (
  <div key={item.id}>
    <span><b>Login:</b> {item.login} </span>
    <span><b>Password:</b> {item.password}</span>
    <hr />
  </div>
));
class LoginPage extends React.PureComponent {
  state = {
    email: '',
    password: '',
    users: []
  };

  componentDidMount() {
    getUsers()
      .then((res) => {
        const users = res.slice(0, 5);
        this.setState({ users });
      });
  }

  handleChangeFieldValue = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  handleClickLogin = () => {
    authUser(this.state.email, this.state.password)
      .then(() => this.props.history.push('/courses'))
      .then(() => this.props.setAuth(true))
      .then(() => this.setState({ email: '', password: '' }));
  };

  render() {
    return (
      <div className={styles.logInForm}>
        {renderUserList(this.state.users)}
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
        >
        Log in
        </Button>
      </div>
    );
  }
}

export default LoginPage;

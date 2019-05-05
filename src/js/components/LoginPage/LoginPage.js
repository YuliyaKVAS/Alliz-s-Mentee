import React from 'react';
import contextConsumer from '../ApiContext/ContextConsumer';
import TextField from '../TextField';
import Button from '../Button';
import { logInForm } from './LoginPage.less';
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

  handleChangeFieldValue = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClickLogin = setAuth => () => {
    const { email, password } = this.state;
    const userLogin = email.trim();
    const userPassword = password.trim();
    authUser(userLogin, userPassword)
      .then(() => this.props.history.push('/courses'))
      .then(() => setAuth(true))
      .then(() => this.setState({ email: '', password: '' }));
  };

  render() {
    const { email, password, users } = this.state;
    const { context } = this.props;
    return (
      <div className={logInForm}>
        {renderUserList(users)}
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          onChange={e => this.handleChangeFieldValue(e)}
          value={email}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          onChange={e => this.handleChangeFieldValue(e)}
          value={password}
        />
        <Button
          color="primary"
          variant="outlined"
          disabled={!email || !password}
          onClick={this.handleClickLogin(context.setAuth)}
        >
         Log in
        </Button>
      </div>
    );
  }
}

export default contextConsumer(LoginPage);

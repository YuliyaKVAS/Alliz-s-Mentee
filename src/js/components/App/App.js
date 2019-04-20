import React, { PureComponent } from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
import { isUserAuth} from '../../helpers';
import Header from '../Header';
import Footer from '../Footer';
import Courses from '../Courses';
import LoginPage from '../LoginPage';
import ErrorPage from '../ErrorPage';
import ProtectedRoute from '../ProtectedRoute';

/* eslint-disable */
class App extends PureComponent {
  state = {
    isAuth: false
  };

  componentDidMount() {
    this.setState({isAuth: isUserAuth()});
  }
  render() {
    const authProps = {
      isAuth: this.state.isAuth,
      setAuth: (isLogin) => this.setState({isAuth: isLogin})  
    }
    return (
      <Router>
        <Header 
          {...authProps}
        />
        <Switch>
          <Route
            path="/"
            exact
            {...authProps}
          >
            <Redirect to="/courses" {...authProps}/>
          </Route>
          <Route
            path="/login"
            {...authProps}
            //component={LoginPage}
            component={(props) => <LoginPage {...authProps} {...props}/>}
          />
          <Route
            path="/courses"
            component={(props) => <Courses {...authProps} {...props}/>}
            {...authProps}          
          />
          <Route component={ErrorPage} />
        </Switch>

        <Footer />
      </Router>
    )
  }
}
// const App = () => (
//   <Router>
//     <Header />
//     <Switch>
//       <Route
//         path="/"
//         exact
//       >
//         <Redirect to="/courses" />
//       </Route>
//       <Route
//         path="/login"
//         component={LoginPage}
//       />
//       <Route
//         path="/courses"
//         component={Courses}
//       />
//       <Route component={ErrorPage} />
//     </Switch>

//     <Footer />
//   </Router>
// );

export default App;

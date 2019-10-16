import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Main from "./Main";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import './App.css';

class App extends Component {

  render() {
    return ( 

      <div>
        <BrowserRouter>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/forgot_password" component={ForgotPassword} />
          <Route exact path="/api/v1/passwords/reset" component={ResetPassword} />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;




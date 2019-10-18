import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import login_logo from '../login_logo.svg';
import axios from "axios";

class ResetPassword extends Component {
  constructor (props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      button: true,
      errors: {
        password: '',
        confirmPassword: ''
      },
      match: false
    } 
    this.handleSubmit = this.handleSubmit.bind(this) 
  }

  // On change jquery validations
  handleChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'password': 
        errors.password = value.length < 6 ? '* Password must have a mimimum of 6 characters.' : '';
      break;

      case 'confirmPassword': 
        errors.confirmPassword = value.length < 6 ? '* Password must have a mimimum of 6 characters.' : '';
      break;

      default:
      break;
    }

    this.setState({
      [event.target.name]: event.target.value
    });

    if(this.firstInput.value === this.secondInput.value){
      this.setState({
          match: true
      });
    }

    if(this.firstInput.value !== this.secondInput.value){
      this.setState({
          match: false
      });
    }
  }
  
  // On load find user_reset_password_token by url
  componentDidMount(){
    const query = new URLSearchParams(this.props.location.search);
    const token = query.get('reset_password_token')
    console.log(token)//123  
  }

  // Redirect login page
  success(){
   window.location.href = 'http://10.90.90.110:8000/login';
  }
  
  //Password update onclick
  handleSubmit = (e) => {
    e.preventDefault()

    if(this.state.errors.password.length > 0 || this.state.errors.confirmPassword.length > 0){
      return;
    }

    var password = document.getElementById('user-password').value;
    var confirmPassword= document.getElementById('user-cpassword').value;
    const query = new URLSearchParams(this.props.location.search);

    const token = query.get('reset_password_token')
    console.log(token)//123
    
    // perform all neccassary validations
    if (password !== confirmPassword) {
       return;
    }
    else {
      const data= {
        "reset_password_token" :token,
        "password": password 
      };

      axios.put("http://10.90.90.110:3000/api/v1/passwords/update", data, {
                  headers: { 'Content-Type': 'application/json'},    
      })
      .then(response => {
        if(response.status === 204){
          this.success();
        }    
      })
      .catch((error) => {
        console.log(error, "error")
      });
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className="App" id="header" ref="iScroll">
        <div className="client-side-wrapper" data-client-style-quiz="" data-client-style-quiz-root-path="/interior-design-style-quiz">
          <div className="app">
            <div className="quiz_div">
              <div className="" id="total_div">

                <div className="curtain role-temp" data-action-name="login" data-controller-name="users">
                  <div className="curtain-top-bar">
                    <div className="logo full">
                      <a href="/">
                        <img src={login_logo} alt="login_logo" className=""/> 
                      </a>
                    </div>
                  </div>
                  
                  <div className="curtain-menu menu-hidden">
                    <ul>
                      <li className="nav-float-right login-signup">
                        <a href="/login">Log In<span className="hidden-mobile"> /</span></a>
                        <a href="/signup" className="hidden-mobile"><strong>Sign Up</strong></a>
                      </li>
                    </ul>
                  </div>
                </div>

                <section className="marble-background">
                  <div className="registration-container">
                    <div className="registration-aside registration-aside-no-padding">
                      <div className="registration-aside-content">
                        <img alt="" className="registration-aside-poster loaded" src="https://s3.amazonaws.com/static.havenly.com/content/MorganLevy-0183+2.png" data-was-processed="true"/>
                      </div>
                    </div>

                    <div className="onboarding-form" style={{height:'520px',  width: '600px'}}>
                      <h1 className="sign-up-for-havenly">Create a new Password</h1>
                      <h3 className="everyone-deserves">Password must have more than 6 characters.</h3>

                      <form onSubmit={this.handleSubmit}>
          
                        <div className="infield-input" data-js-infield-label-input="">
                          <div className="form-group password">
                            <input ref={input => { this.firstInput = input }} onChange={this.handleChange} name="password" placeholder="Password" className="form-control"  autoComplete="off" type="password" id="user-password" required/>
                               {errors.password.length > 0 && 
                              <span className='error'>{errors.password}</span>}
                          </div>
                        </div>

                        <div className="infield-input" data-js-infield-label-input="">
                          <div className="form-group confirmPassword">
                            <input  ref={input => { this.secondInput = input }} onChange={this.handleChange} name="confirmPassword" placeholder="Confirm Password" className="form-control"  autoComplete="off" type="password" id="user-cpassword" required/>
                              {this.state.match === false ? (
                                   <span className='error' >Passwords Must Match</span>
                                ):(
                                  <span className='error' style={{ color: 'green' }}>Passwords Match!</span>
                                  )}
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="text-center">
                            <input id="reset-password-btn" disabled={!this.state.match}className="form-submit btn btn-primary register-submit" title="Reset Your Password" value="Reset Your Password" type="submit"/>
                          </div>
                        </div>

                        <div className="reset-success-block">
                          <div className="empty-append"></div>
                        </div>

                        <div className="sign-in-links">
                          <a href="/login">Sign In </a>&nbsp;<span className="no-underline"> | </span>&nbsp;
                          <a href="/signup">Sign Up</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
                
              </div>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

export default ResetPassword;
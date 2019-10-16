import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import login_logo from '../login_logo.svg';
import axios from "axios";

const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      button: false,
      formValid: false,
      errorCount: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }  
    }
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = value.length < 1 ? '* Please enter your name..' : '';
      break;

      case 'email':
        errors.email = validEmailRegex.test(value) ? '' : '* Please enter a valid email address.';
      break;

      case 'password': 
        errors.password = value.length < 6 ? '* Password must have a mimimum of 6 characters.' : '';
      break;

      default:
        break;
    }
    this.setState({errors, [name]: value});
  }

  hideAlert = event => {
    this.setState({
      button: false
    });
  }

  handleSubmit  = event =>  {
    event.preventDefault();

    if(this.state.errors.email.length > 0 || this.state.errors.password.length > 0){
      return;
    }

    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    const data = {
      user: {  
              "name": name,
              "username": name,
              "email": email, 
              "password": password
            }
    };

    axios.post("http://10.90.90.110:3000/api/v1/users", data).then(response => {
      if(response.status=== 201){
        window.location.href = 'http://10.90.90.110:8000/login';
      }
    }) 
    .catch((error) => {
      this.setState({
        button :true
      })
    })
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
                          
                    <div className="curtain-hamburger">
                      <span></span>
                      <span></span>
                      <span></span>
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

                { this.state.button? 
                  <div  className="alert alert-danger text-center alert-dismissable fade in" >
                    <button type="button" className="close" data-dismiss="alert" onClick={() => this.hideAlert()}><span>&times;</span>
                      </button>
                     <img alt="" src={"../assets/danger.png"} className="loading" data-was-processed="true"/>
                          This email already exists. Would you like to login instead?
                  </div>  : null
                }
                <section className="marble-background">
                  <div className="registration-container">
                    <div className="registration-aside registration-aside-no-padding sign_up_">
                      <div className="registration-aside-content">
                        <img alt="" className="registration-aside-image loading" src="https://s3.amazonaws.com/static.havenly.com/content/signup-and-login/aside-ez-signup.jpg" data-was-processed="true"/>
                        <span className="registration-aside-headline underline">WHAT'S NEXT</span>
                        <ul className="large">
                          <li className="checked">
                            <span className="check-circle">✓</span>
                            <span>Sign up for Havenly</span>
                          </li>
                          <li>
                            <span className="check-circle"></span>
                            <span>Find your perfect designer</span>
                          </li>
                          <li>
                            <span className="check-circle"></span>
                            <span>Choose and pay for a design package</span>
                          </li>
                          <li>
                            <span className="check-circle"></span>
                            <span>Collaborate to design your dream room!</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="onboarding-form">
                      <h1 className="sign-up-for-havenly">Sign Up for Havenly</h1>
                      <h3 className="everyone-deserves">Everyone deserves a beautiful home.</h3>
                        <form onSubmit={this.handleSubmit}>
                          <div >
                            <input type="hidden" name="_method" value="POST"/>
                          </div>

                          <div className="infield-input" data-js-infield-label-input="">
                            <div className="form-group fullName">
                              <input  onChange={this.handleChange} name="fullName" placeholder="Name" className="form-control" id="user-name"  autoComplete="off" maxLength="128" type="name" required/>
                             {errors.fullName.length > 0 && 
                              <span className='error'>{errors.fullName}</span>}
                            </div>
                          </div>

                          <div className="infield-input" data-js-infield-label-input="">
                            <div className="form-group email">
          
                              <input   onChange={this.handleChange} name="email" className="form-control" id="user-email"  autoComplete="off" maxLength="128"  placeholder="Email" required/>
                                {errors.email.length > 0 && 
                                <span className='error'>{errors.email}</span>}

                            </div>
                          </div>

                          <div className="infield-input" data-js-infield-label-input="">
                            <div className="form-group password">
                             
                              <input   onChange={this.handleChange} name="password" placeholder="Password" className="form-control"  autoComplete="off" type="password" id="user-password" required/>
                               {errors.password.length > 0 && 
                              <span className='error'>{errors.password}</span>}

                            </div>            
                          </div>

                          <div className="text-left">
                            <a href="/forgot_password" className="accent light-link password-reset">Forgot your password?</a> 
                          </div>

                          <input type="hidden" name="data[User][timezone]" id="timezone" value="Asia/Kolkata"/>            <input type="hidden" name="csrf_token" value="de5c5d034dd6e31af7d89cc778e06341410b2e041aa0888331de9b22ceb0eb66"/>
                          <input type="hidden" name="data[User][experiment_variations]" id="activeVariations" value=""/>
                          <input type="hidden" name="data[User][preferred_designer_id]" id="preferredDesigner"/>

                          <div className="form-group">
                            <div className="text-center">
                            <input className="form-submit btn btn-primary login-button register-submit" title="Click here to Sign Up" type="submit" value="Sign Up"/>
                            </div>
                          </div>            
                        </form>
                        <p className="already-user">
                           Already have an account?
                            <a className="sign-in" href="/login">Sign In</a>
                        </p>
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

export default SignUp;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import login_logo from '../login_logo.svg';
import axios from "axios";


const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Login extends Component {

  constructor (props) {
    super(props);
     this.state = {
      username: "",
      password: "",
      email: "",
      button: false,
      errors: {
        email: '',
        password: '',
      }
      
    }
    this.hideAlert = this.hideAlert.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : '* Please enter a valid email address.';
        break;
      case 'password': 
        errors.password = 
          value.length < 6
            ? '* Password must have a mimimum of 6 characters.'
            : '';
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


  handleSubmit = event => {
    event.preventDefault();

    if(this.state.errors.email.length > 0 || this.state.errors.password.length > 0){
        return;
    }
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    const data =  {
                    "email": email, 
                    "password": password
                  };

    axios.post("http://10.90.90.110:3000/api/v1/auth/login",data,{
          headers:{
                    'Content-Type': 'application/json'
                  },    
    })
    .then(response => {
      console.log(response);
      localStorage.setItem('user_token', response.data.token)
      localStorage.setItem('user_email', response.data.email)
      localStorage.setItem('user_name', response.data.username)
      localStorage.setItem('user_id', response.data.user_id)

      localStorage.removeItem("image_ids")
      localStorage.removeItem("name")
      localStorage.removeItem("room_ids")
      localStorage.removeItem("user_type")
      localStorage.removeItem("img_counter")
      localStorage.removeItem("counter")
      localStorage.removeItem("email")
      localStorage.removeItem("image_type")
      localStorage.removeItem("room_value")

      if(response.status === 200){
        this.props.history.push('/')
      }   
    })
    .catch((error) => {
      console.log(error, "error")
      this.setState({
        button :true
      })
    });
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
                
                { 
                  this.state.button? 
                  <div  className="alert alert-danger text-center alert-dismissable fade in" >
                    <button type="button" className="close" data-dismiss="alert" onClick={() => this.hideAlert()}><span>&times;</span>
                    </button>
                     <img alt="" src={"../assets/danger.png"} className="loading" data-was-processed="true"/>
                          Invalid Email or password
                  </div>  : null
                }
             
                <section className="marble-background">
                  <div className="registration-container">
                    <div className="registration-aside registration-aside-no-padding">
                      <div className="registration-aside-content">
                        <img alt="signin" className="registration-aside-poster loaded" src="https://s3.amazonaws.com/static.havenly.com/content/signup-and-login/MorganLevy-0160.jpg" data-was-processed="true"/>
                      </div>
                    </div>

                    <div className="onboarding-form">
                      <h1 className="sign-up-for-havenly">Welcome back!</h1>
                      <h3 className="everyone-deserves">Sign in to your Havenly account.</h3>
                      
                      <form onSubmit={this.handleSubmit} >
                        
                        <div className="infield-input" data-js-infield-label-input="">
                          <div className="form-group">
                           
                            <input  onChange={this.handleChange} placeholder="Email" name="email" className="form-control" id="user-email"  autoComplete="off" maxLength="128"  required/>
                              {errors.email.length > 0 && 
                                <span className='error'>{errors.email}</span>}
                          </div>
                        </div>

                        <div className="infield-input" data-js-infield-label-input="">
                          <div className="form-group">
                            <input  onChange={this.handleChange} placeholder="Password" name="password" className="form-control"  autoComplete="off" type="password" id="user-password" required/>
                           {errors.password.length > 0 && 
                              <span className='error'>{errors.password}</span>}
                          </div>
                        </div>

                        <div className="text-left">
                          <a href="/forgot_password" className="accent light-link password-reset">Forgot your password?</a>
                        </div>
                        
                        <div className="form-group">
                          <div className="text-center">
                          <input className="form-submit btn btn-primary login-button register-submit" title="Click here to Log In" type="submit" value="Sign In"/>
                          </div>
                        </div>            
                      </form>

                      <p className="already-user">
                          Don't have an account?
                          <a className="sign-in" href="/signup">Sign Up</a>
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

export default Login;
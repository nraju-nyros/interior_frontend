import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import login_logo from '../login_logo.svg';
import axios from "axios";

const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class ForgotPassword extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: "",
      button: true,
      success_msg: false,
      formValid: false,
      errorCount: null,
      errors: {
        email: ''
      } 
    }
    this.handleSubmit = this.handleSubmit.bind(this) 
  }

  update(e){
    e.preventDefault();

    this.setState({
      email: e.target.value
    },() => {
              this.setState({
                button :true,
                success_msg: false
              })
               
              const { name, value } = event.target;
              let errors = this.state.errors;

              switch (name) {
                case 'email': 
                  errors.email = validEmailRegex.test(value)? '': '* Please enter a valid email address.';
                  break;
                
                default:
                  break;
              }
                this.setState({errors, [name]: value});
            }); 
  }


  handleSubmit (event) {
    event.preventDefault();

    if(this.state.errors.email.length > 0){
        return;
    }
    const email = document.getElementById('user-email').value;
    const data =  {
                    "email": email, 
                  };

    axios.post("http://10.90.90.110:3000/api/v1/passwords/forgot", data, {
                          headers: {
                              'Content-Type': 'application/json'
                              
                          },    
    }).then(response => {
        if(response.status === 200){
           this.setState({
              success_msg :true
            })
        }    
      }).catch((error) => {
            this.setState({
              button :false
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
              <div className="main_div1" id="total_div">

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

                <section className="marble-background">
                  <div className="registration-container">
                    <div className="registration-aside registration-aside-no-padding">
                      <div className="registration-aside-content">
                        <img alt="" className="registration-aside-poster loaded" src="https://s3.amazonaws.com/static.havenly.com/content/MorganLevy-0183+2.png" data-was-processed="true"/>
                      </div>
                    </div>

                    <div className="onboarding-form" style={{height:'520px',  width: '600px'}}>
                        <h1 className="sign-up-for-havenly">Whoops!</h1>
                        <h3 className="everyone-deserves">Let’s admit it, it’s hard to remember all your passwords.</h3>

                        <form onSubmit={this.handleSubmit}>
                          <div className="infield-input" data-js-infield-label-input="">
                            <div className="form-group">  
                            <input onChange={this.update.bind(this)}  name="email" className="form-control" id="user-email"  autoComplete="off" maxLength="128"  placeholder="Email" required/></div> 
                             {errors.email.length > 0 && 
                                <div className='_15TY4P2gAXjo-OgM169QTn'>{errors.email}</div>}  
                                <div className={this.state.button ? "_15TY4P2gAXjo-OgM169QTn hide_sign_in"  : "_15TY4P2gAXjo-OgM169QTn"} >That email address not found.</div>
                          </div>

                          <div className="form-group">
                              <div className="text-center">
                                  <input id="reset-password-btn"  disabled={this.state.success_msg} className="form-submit btn btn-primary register-submit" title="Reset Your Password" value="Reset Your Password" type="submit"/>
                              </div>
                          </div>
                          
                          { this.state.success_msg?
                            <div className="reset-success-block">
                              <div className="empty-append">
                                <img className="icon" src="https://s3.amazonaws.com/static.havenly.com/content/lock_icon.png" alt="lock-icon"/>
                                <div className="success-message">If we have a user account associated to that email you will get an email with further instructions.
                                <span className="bolded">Please click on the link in your email to continue with the reset process.</span>
                                </div>
                              </div>
                            </div> : null
                          }

                          <div className="sign-in-links forgot_links">
                              <a className="sign-in" href="/login">Sign In </a>&nbsp;<span className="no-underline"> | </span>&nbsp;
                              <a className="sign-in" href="/signup">Sign Up</a>
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

export default ForgotPassword;
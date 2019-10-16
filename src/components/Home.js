import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import web_icon from '../web_icon.svg';
import cat_Plant from '../cat_Plant.svg';
// import { BrowserRouter as Router, Switch , Route , Link} from 'react-router-dom';
// import Login from "./Login";

class Home extends Component { 
  constructor(props){
  var user_id = JSON.stringify(localStorage.getItem('user_id'));
    super(props);
    this.state = {
      user_id: user_id,
      button: true
    }
  }

  logout() {
    localStorage.clear();
  }

  componentDidMount(){
    if(localStorage.user_id){
      this.setState({
        button: false
      });
    } 

    localStorage.removeItem('img_counter');
    localStorage.removeItem('counter');
    localStorage.removeItem('image_ids');
    localStorage.removeItem('room_ids');
    localStorage.removeItem('image_type');
    localStorage.removeItem('room_value');
    localStorage.removeItem('user_type');
    localStorage.removeItem('name');
  }

  render() {
   
    return (
      <div className="client-side-wrapper" data-client-style-quiz="" data-client-style-quiz-root-path="/interior-design-style-quiz">
        <div className="app">
          <div className="quiz_div">
            <div className="main_div">

              <div className="header">
                <div className="back" >
                </div>
            
                <a className="web_icon animated fadeInUp delay-0.25s" href="/">
                    <img src={web_icon} alt="web_img" className="web_img"/>
                </a>
                
                <a className="header_right animated fadeInUp delay-0.45s back_btn1" href="/" onClick={this.logout}>
                  <span className="back_nav1 retina-arrows-0005">&#10005;</span>
                  <div  className={!this.state.button ? "back_txt"  : "back_txt hide_sign_in" } >
                     logout
                  </div>
                </a>
              </div>

              <div className="main_text">
                <div className="main_header">
                  <h1 className="heading1 animated fadeInUp delay-0.25s" >Find your Interior Design Style</h1>
                </div>

                <div className="image_text">
                  <div>
                    <img src={cat_Plant} alt="cat_Plant" className="cat_Plant"/>
                  </div>

                  <div className="text_div">
                    <h2 className="text1 animated fadeInUp delay-0.25s">Take our decorating style quiz to discover your unique style, so you can start designing your dream home.</h2><br/>
                    <p className="text1 animated fadeInUp delay-0.45s">At Havenly, we believe your home should reflect you. We’ll match you with the perfect designer—no matter what your style or budget is.</p><br/>
                    <a  className={this.state.button ? "sign_in animated fadeInUp delay-0.8s"  : "sign_in hide_sign_in" } href="/login">Sign In</a>
                    <button className="quiz_button quiz_button1 animated fadeInUp delay-1s" onClick={this.props.handleClick1} type="button">Start the Style Quiz</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>    
      </div>
    );
  }
}

export default Home;
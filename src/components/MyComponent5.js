import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import web_icon from '../web_icon.svg';
import axios from 'axios';

const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class MyComponent5 extends Component {

  constructor (props) {
    var name = JSON.parse(localStorage.getItem('name'));
    var user_token = JSON.stringify(localStorage.getItem('user_token'));
    var user_email = localStorage.getItem('user_email');
     
    super(props);
    this.state = {
      loading: true,
      showloader: false,
      name:name,
      email:user_email,
      user_token: user_token,
      login_button: true,
      button: true,

      formValid: false,
      errorCount: null,
      errors: {
        email: ''
      }
    }
  }

  logout() {
    localStorage.clear();
  }

  componentDidMount() { 
    setTimeout(() => this.setState({loading: false}), 2000);
      if(localStorage.user_token){
        this.setState({
          login_button: false
        });
      }   
  }

  update(e){
    e.preventDefault();

      this.setState({
        email: e.target.value
      },() => { 
        this.setState({
          button :true
        })
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
          case 'email': 
            errors.email = validEmailRegex.test(value) ? '': '* Please enter a valid email address.';
            break;
          default:
            break;
        }
        this.setState({errors, [name]: value});
      
        if(this.state.email!== null) {
          localStorage.setItem('email', JSON.stringify(this.state.email));
        } else {
            localStorage.removeItem("email")   
          } 
      }) 
  }

  submit_data(e){
    e.preventDefault()

    if(this.state.errors.email.length > 0){
        return;
    }
    
    var user_local = JSON.parse(localStorage.getItem('user_type'));
    var name = JSON.parse(localStorage.getItem('name'));
    var email = JSON.parse(localStorage.getItem('email'));
    var image_type = localStorage.getItem('image_type') ? JSON.parse(localStorage.getItem('image_type')) : [];
    var getRoomContents = localStorage.getItem('room_value') ? JSON.parse(localStorage.getItem('room_value')) : [];
    var user_type_name = user_local.name

    var image_types = [];  
    for(var i=0;i<image_type.length;i++) {
      var x = {
        name: image_type[i].image.url.slice(20),
        room_image_id: image_type[i].id

      }
      image_types.push(x)
      console.log( "id", x )
    }
     
    var roomContents = [];  
    for(var j=0;j<getRoomContents.length;j++) {
      var y = {
        name: getRoomContents[j].image.url.slice(19),
        content: getRoomContents[j].content,
        room_type_id: getRoomContents[j].id
      }
      roomContents.push(y)
    }
    
    var user_data = {
      user: {  
        "name" : name,
        "email" : email,
        "username": name,
        "password": '',
        user_requirements_attributes: [{
          "name"   :name,
          "email"  :email,
          "user_type": user_type_name,
          user_room_images_attributes: image_types,
          user_room_types_attributes: roomContents
        }]
      }
    }

  
    axios.post("http://10.90.90.110:3000/api/v1/users", user_data).then(response => {
      localStorage.setItem('user_token', response.data.token)
      localStorage.setItem('user_email', response.data.email)
      localStorage.setItem('user_name', response.data.username)
      localStorage.setItem('user_id', response.data.id)

      this.props.handleClick6();                                                            
    }).catch((error) => {
        this.setState({
          button :false
        })
      });
  }


  render() {
    if(this.state.loading){
      return(
       <div className="handWave">
          <h1 className="greeting"> Nice to Meet<br/> you {this.state.name}! </h1>
          <img src={"../assets/wave.gif"} alt="" className="wave_hand" />
        </div>
      )
    }

    const {errors} = this.state;

    return (
      <div className="App">  
        <div className="client-side-wrapper" data-client-style-quiz="" data-client-style-quiz-root-path="/interior-design-style-quiz">
          <div className="app">
            <div className="quiz_div">
              <div className="main_div">

                <div className="header">
                  <button className="back_btn" onClick={this.props.handleClick4}>
                    <span className="back_nav retina-arrows-0005 ">&#8249;</span>
                    <div className="back_txt">back</div>
                  </button>
                
                  <a className="web_icon" href="/">
                    <img src={web_icon} alt="web_img" className="web_img"/>
                  </a>

                  <a className="header_right" href="/">
                    <span className="close_icon close_icon1"></span>
                  </a>
                </div>
        
                <div className="">
                  <div className="text_part text_part1">
                    <div className="tell_name">
                      <h3 className="tell_name1">What’s your email?</h3>
                      <p className="tell_name2">Please provide your email to save your results and edit your profile.</p>
                      
                      <div className={this.state.login_button ? "_login"  : "_login hide_sign_in"}>
                        <p>Already a member?</p>
                        <a href="/login">Log in</a>
                         
                      </div>
                    </div>
                  </div>

                  <div className="name_box">
                    <form className="form_name" >
                      <input name="email"   onChange={this.update.bind(this)}  value={!this.state.email ? "" : (this.state.email) } autoComplete="off" className="form_input"  placeholder="begin typing" type="email" />
                         {errors.email.length > 0 && 
                                    <div className='_15TY4P2gAXjo-OgM169QTn'>{errors.email}</div>}  
                      <div className={this.state.button ? "_15TY4P2gAXjo-OgM169QTn hide_sign_in"  : "_15TY4P2gAXjo-OgM169QTn"} >That email aleady exists.Please login and continue</div>

                      <div className="next_btn1 next_btn2 _2wyyxby8i9nYV9d8Hf2YUb ">
                      <button className={!this.state.email ? "next_button"  : "next_button new"}  disabled={!this.state.email} type="submit" 
                                      onClick={this.submit_data.bind(this)}
                              >Next</button></div>
                    </form>
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

export default MyComponent5;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import web_icon from '../web_icon.svg';


class MyComponent4 extends Component {
  constructor (props) {
    var name = localStorage.getItem('name');
    var user_token = JSON.stringify(localStorage.getItem('user_token'));
    var user_id = localStorage.getItem('user_id');
  
    super(props);
    this.state = {
      component1: true,
      component2: false,
      name: name,
      user_token: user_token,
      login_button: true,
      user_id: user_id
    }
  }

  logout() {
    localStorage.clear();
  }

  changeName4  = (image_id1) => {
    if (this.state[image_id1] !== undefined && this.state[image_id1]) {
      this.setState({
        [image_id1]: false
      });
    } else {
      this.setState({
        [image_id1]: true
      });
    }
  };

  greeting = (user_name) =>{
    this.setState({ component1: false, component2: true });
  }

  update(e){
    this.setState({
      name: e.target.value
    },() => {
      if(this.state.name!== null) {
        localStorage.setItem('name', JSON.stringify(this.state.name));
      }
      else{
        localStorage.removeItem("name")   
      } 
    }) 
  }

  componentDidMount(){
    var name =JSON.parse(localStorage.getItem('name'));
    var user_name = localStorage.getItem('user_name');

    if(localStorage.user_id){
      this.setState({
        login_button: false
      });
    }

    if(localStorage.name){
      this.setState({
        name: name
      });
    }

    if(localStorage.user_name){
      this.setState({
        name: user_name
      });
    }
  }

  
   submit_data(){
    var user_local = JSON.parse(localStorage.getItem('user_type'));
    var image_type = localStorage.getItem('image_type') ? JSON.parse(localStorage.getItem('image_type')) : [];
    var getRoomContents = localStorage.getItem('room_value') ? JSON.parse(localStorage.getItem('room_value')) : [];
    var user_type_name = user_local.name
    var user_name = localStorage.getItem('user_name');
    var user_email = localStorage.getItem('user_email');

    var image_types = [];  
    for(var i=0;i<image_type.length;i++) {
      var x = {
        name: image_type[i].image.url.slice(20),
        room_image_id: image_type[i].id
      }
      image_types.push(x)

    }
     console.log( "id", image_types )
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
        "name" : user_name,
        "email" : user_email,
        "username": user_name,
        "password": '',

        user_requirements_attributes: [{
          "name"   :user_name,
          "email"  :user_email,
          "user_type": user_type_name,
          user_room_images_attributes: image_types,
          user_room_types_attributes: roomContents
        }]
      }
    }
    
    var user_id = localStorage.getItem('user_id');
    fetch('http://10.90.90.110:3000/api/v1/users/' + user_id,{
      method: 'PUT',
      body: JSON.stringify(user_data),
      headers: {
          'Content-Type': 'application/json'
      }
    }).then(res => {
        return res;
    }).catch(err => err);
  }
  
  
  render() {
    return (
      <div className="App" data={this.state}>

        {this.state.component1?
        <div className="client-side-wrapper" data-client-style-quiz="" data-client-style-quiz-root-path="/interior-design-style-quiz">
          <div className="app">
            <div className="quiz_div">
              <div className="main_div">

                <div className="header">
                  <button className="back_btn" onClick={this.props.handleClick3}>
                    <span className="back_nav retina-arrows-0005 ">&#8249;</span>
                    <div className="back_txt">back</div>
                  </button>
                
                  <a className="web_icon" href="/">
                    <img src={web_icon} alt="web_img" className="web_img"/>
                  </a>

                  <a className="header_right" href="/" onClick={this.logout}>
                    <span className="close_icon close_icon1"></span>
                  </a>
                </div>

                <div className="">
                  <div className="text_part text_part1">
                    <div className="tell_name">
                      <h3 className="tell_name1">Tell us your name.</h3>
                      <p className="tell_name2">Enough about us. Let’s talk about you.</p>
                      
                      <div  className={this.state.login_button ? "_login"  : "_login hide_sign_in"}>
                        <p>Already a member?</p>
                        <a href="/login">Log in</a>
                      </div>
                    </div>
                  </div>

                  <div className="name_box">
                    <h1>{this.state.room_ids}</h1>
                    <form className="form_name" >
                    <input onChange={this.update.bind(this)} value={!this.state.name ? "" : (this.state.name) } autoComplete="off" className="form_input"  placeholder="type your name" type="text" />
                    
                    <div className="next_btn1 next_btn2 _2wyyxby8i9nYV9d8Hf2YUb ">
                    <button className={!this.state.name ? "next_button"  : "next_button new"} disabled={!this.state.name} type="submit" 
                            onClick={this.state.login_button ? () => {
                                                                 this.props.handleClick5();
                                                                  } :
                                                                 () => {
                                                                  this.props.handleClick6();
                                                                  this.submit_data();
                                                                  }

                                    }
                            onChange={this.update.bind(this)} name={this.state.name} 
                    >Next</button></div></form>
                  </div>
                </div>

              </div>
            </div>
          </div>  
        </div> :null

      }

      {
        this.state.component2?
        <div>
          <h1 className="greeting"> Nice to Meet<br/> you {this.state.name}! </h1>
          <img src={"../assets/wave.gif"} alt="" className="wave_hand" />
        </div>:null
      }
      </div>
    );
  }
}

export default MyComponent4;

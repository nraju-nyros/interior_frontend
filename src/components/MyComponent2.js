import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import web_icon from '../web_icon.svg';

class MyComponent2 extends Component {
  
  constructor(props){
    var user_local = JSON.parse(localStorage.getItem('user_type'));

    super(props);
    this.state = {
      image_1: false,
      image_2: false,
      image_3: false,
      button: true,
      user_types:[],
      user_type:{
        id:'',
        image:'',
        name:'',
        image_1: false,
        image_2: false,
        image_3: false,
        button:false
      },
      user_local: user_local,
      login_button: true
    }
  }

  logout() {
    localStorage.clear();
   }

  componentDidMount(){
    if(localStorage.user_id){
      this.setState({
          login_button: false
      });
    } 

    fetch("http://10.90.90.110:3000/api/v1/user_types")
      .then(user_types => user_types.json())
        .then(
              (result) => {
                this.setState({
                  user_types: result
                }); 
              },
        )  

    if(this.state.user_local !==null){
      this.setState({
        image_1: this.state.user_local.image_1,
        image_2: this.state.user_local.image_2,
        image_3: this.state.user_local.image_3,
        button:this.state.user_local.button
      });
    }  
  }

  changeName2  = (image_click,id,image,name) => {
    if(id === 1){
      this.setState({ 
        image_1: true, image_2: false,image_3: false, button:false,
        user_type:{id: id, image: image , name:name, image_1:true,image_2: false,image_3: false, button:false}
      },() => {
                if(this.state.image_1=== true) {
                  localStorage.setItem('user_type', JSON.stringify(this.state.user_type));
                    setTimeout(
                      function() {
                        this.props.handleClick3();
                      }
                      .bind(this),600
                    );
                } else {
                  localStorage.removeItem("user_type")   
                } 
              });
    }
      
    if(id === 2){
      this.setState({ 
        image_1: false, image_2: true,image_3: false, button:false,
        user_type:{id: id, image: image , name:name, image_1:false,image_2: true,image_3: false, button:false}
      },() => {
                if(this.state.image_2=== true) {
                  localStorage.setItem('user_type', JSON.stringify(this.state.user_type));
                    setTimeout(
                      function() {
                        this.props.handleClick3();
                      }
                      .bind(this),600
                    );
                } else {
                  localStorage.removeItem("user_type")   
                } 
              });
    }
      
    if(id === 3){
      this.setState({ 
        image_1: false, image_2: false,image_3: true, button:false,
        user_type:{id: id, image: image , name:name, image_1:false,image_2: false,image_3: true, button:false}
      },() => {
                if(this.state.image_3=== true) {
                  localStorage.setItem('user_type', JSON.stringify(this.state.user_type));
                    setTimeout(
                      function() {
                        this.props.handleClick3();
                      }
                      .bind(this),600
                    );
                } else {
                  localStorage.removeItem("user_type")   
                } 
              });
    } 
  };

  render() {
  
    const{user_types} = this.state
    let users = user_types.map((image, imageIndex) => {

      return (
        <li className="user_list" key={image.id}>
          <button onClick={() => {this.changeName2("image_"+ image.id, image.id, image.image, image.name)} }
            className={this.state["image_"+image.id]? "user_list_image user_list_image1"  : "user_list_image"}
             data-automated-test="styleQuizChoiceBubble" type="button">
            <div  className="user_list_img1">
              <img alt="" className="user_list_img"  src={"../assets/user_types/"+ (image.image)}/>
            </div>

            <h3 className="user_img_name">{image.name}</h3>

            <div className={this.state["image_"+image.id]? "select_mark1"  : "select_mark0"}>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.508 1L6.752 13.011l-4.983-4.27L1 9.638l6.076 5.208L14.538 1.58z"></path></svg>
            </div>

          </button>
        </li>
      );
    });

    return (
      <div className="App">
        <div className="client-side-wrapper" data-client-style-quiz="" data-client-style-quiz-root-path="/interior-design-style-quiz">
          <div className="app">
            <div className="quiz_div">
              <div className="main_div">

                <div className="header">
                  <button className="back_btn" data={this.state.image_ids} onClick={this.props.handleClick1}>
                    <span className="back_nav retina-arrows-0005 ">&#8249;</span>
                    <div className="back_txt">back</div>
                  </button>
                  
                  <a className="web_icon" href="/" onClick={this.logout}>
                    <img src={web_icon} alt="web_img" className="web_img"/>
                  </a>

                  <a className="header_right animated fadeInUp delay-0.45s back_btn1" href="/" onClick={this.logout}>
                    <span className="back_nav1 retina-arrows-0005">&#10005;</span>
                    <div  className={!this.state.login_button ? "back_txt"  : "back_txt hide_sign_in" } >
                       logout
                    </div>
                  </a>
                </div>

              
                <div className="">
                  <div className="do_you1 do_you">
                    <div className="header_txt">
                      <h3 className="hdr_txt">
                        How much do you know about interior design?</h3>
                    </div>
                  </div>

                  <div className="user_types">
                    <ul className="user_types_list animated fadeInUp delay-0.25s">
                     {users}
                    </ul>
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

export default MyComponent2;

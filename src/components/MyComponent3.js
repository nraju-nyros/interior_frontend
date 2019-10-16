import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import web_icon from '../web_icon.svg';

class MyComponent3 extends Component {
  constructor (props) {
    var getRoomContents = localStorage.getItem('room_value') ? JSON.parse(localStorage.getItem('room_value')) : [];
    var getRoom_ids = localStorage.getItem('room_ids') ? JSON.parse(localStorage.getItem('room_ids')) : [];
    super(props);
    this.state = {
      counter:0,
      button:true,
      room_types:[],
      room_value:getRoomContents,
      room_ids:getRoom_ids,
      values:{},
      login_button: true
    }
    this.changeName3 = this.changeName3.bind(this);
  }


  logout() {
    localStorage.clear();
  }
 
  changeName3  = (room_id, id , image, content) => {
    if (this.state[room_id] !== undefined && this.state[room_id]) {
      this.setState({
        [room_id]: false
      });

      var array = [...this.state.room_value];
      var index = array.indexOf(content)
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({room_value: array});
      } 

      var arr = [...this.state.room_ids];
      var index1 = arr.indexOf(id);
      if (index1 !== -1) {
        arr.splice(index1, 1);
        this.setState({room_ids: arr});
      } 
     

      this.setState({
        counter: this.state.counter - 1,
      },() => {
        if(this.state.counter === 0){
          this.setState({ button: true});
        }
        else{
          this.setState({ button: false});
        }
      });
    } 

    else {
      this.setState({
        [room_id]: true,
         values: {
          id:id,
          image: image,
          content: content
        },
        room_ids:this.state.room_ids.concat(id)
      });

      setTimeout(()=> {
        this.setState({
          room_value:this.state.room_value.concat(this.state.values)
        });
      }) 

      this.setState({
        counter: this.state.counter + 1,
      },() => { 
        if(this.state.counter === 0){
          this.setState({ button: true});
        }
        else{
          this.setState({ button: false});
        }
      });
    }

  };

  saveRoomType() {
    if(this.state.room_value!== null) {
      localStorage.setItem('room_value', JSON.stringify(this.state.room_value));
      localStorage.setItem('room_ids', JSON.stringify(this.state.room_ids));
      localStorage.setItem('counter', JSON.stringify(this.state.counter));
    }  
  }


  componentDidMount(){
    // var user_id = JSON.stringify(localStorage.getItem('user_id'));
      if(localStorage.user_id){
        this.setState({
          login_button: false
        });
      } 
    
    fetch("http://10.90.90.110:3000/api/v1/room_types")
      .then(room_types => room_types.json())
      .then(
        (result) => {
          this.setState({
            room_types: result
          }); 
        },
      )  

    if(localStorage.room_ids){
      this.setState({
        room_ids: JSON.parse(localStorage.room_ids)
      })
    }

    if(localStorage.counter){
      this.setState({
        counter: JSON.parse(localStorage.counter)
      })
    }

    var room_ids = localStorage.room_ids ? JSON.parse(localStorage.room_ids) : [];
    if(room_ids && room_ids !==undefined && room_ids.length > 0)  {
      for(var i=0; i<room_ids.length;i++) {
        this.setState({
          ["room_"+room_ids[i]]: true,
          button: false
        },() => { 
                if(this.state.counter === 0){
                  this.setState({ button: true});
                }
                else{
                  this.setState({ button: false});
                }
              });
      }
    } 
  }

 
  render() {
    
    const{room_types} = this.state
    let rooms = room_types.map((image, imageIndex) => {
      return ( 
        <li className="rooms_render" key={image.id}>
          <button onClick={() => this.changeName3("room_" + image.id, image.id,  image.image, image.name)}   className={this.state["room_" + image.id] ? "button_image img_color_change"  : "button_image"} data-automated-test="styleQuizChoiceBubble" type="button">
            <div className="room_images">
              <img alt="" className="room_images1" src={"http://10.90.90.110:3000"+ (image.image.url)}/>
            </div>

            <h3 className="room_name">{image.name}</h3>
              <div className={this.state["room_" + image.id] ? "select_mark1"  : "select_mark0"}>
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.508 1L6.752 13.011l-4.983-4.27L1 9.638l6.076 5.208L14.538 1.58z"></path>
                </svg>
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
                  <button className="back_btn" onClick={this.props.handleClick2}>
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
                
                <div className="row">
                  <div className="col-md-6 room1">
                    <div className="room_types1">
                      <h3 className="room_types2">
                       Which rooms are on your “It needs a little something” list?</h3>
                      <p className="room_types3">Select as many as you like.</p>
                    </div>
                  </div>

                  <div className="col-md-6 room2">
                    <ul className="rooms_list1 animated fadeInUp delay-0.9s">
                     {rooms}
                    </ul>

                    <div className="next_btn1 next_btn2">
                      <button disabled={this.state.button} className={this.state.button ? "next_button"  : "next_button new"} type="button" 
                            onClick={() => {
                                  this.props.handleClick4();
                                  this.saveRoomType();
                                }}
                      >Next</button>
                    </div>
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

export default MyComponent3;

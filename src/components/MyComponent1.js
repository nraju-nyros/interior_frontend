import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import web_icon from '../web_icon.svg';
import $ from 'jquery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

class MyComponent1 extends Component {
  constructor (props) {
    var get_img_ids = localStorage.getItem('image_ids') ? JSON.parse(localStorage.getItem('image_ids')) : [];
    var user_id = JSON.stringify(localStorage.getItem('user_id'));

    super(props);
    this.state = {
        rooms: [],
        limit:50,
        loadingstate:false,
        subcomponent1: true,
        subcomponent2: false,
        subcomponent3: false,
        button:true,
        img_counter:0,
        image_ids:get_img_ids,
        user_id: user_id,
        login_button: true
    }
    this.changeName1 = this.changeName1.bind(this);
  }
  

  logout() {
    localStorage.clear();
  }

  componentDidMount() {
    if(localStorage.user_id){
      this.setState({
        login_button: false
      });
    } 


    fetch("http://10.90.90.110:3000/api/v1/room_images")
      .then(rooms => rooms.json())
      .then(
        (result) => {
          this.setState({
            rooms: result
          }); 
          
        },
      )

    window.addEventListener('scroll', this.handleScroll);

    if(localStorage.image_ids){
      this.setState({
        image_ids: JSON.parse(localStorage.image_ids)
      })
    }

    if(localStorage.img_counter){
      this.setState({
        img_counter: JSON.parse(localStorage.img_counter)
      })
    }

   

    var image_ids = localStorage.image_ids ? JSON.parse(localStorage.image_ids) : [];
    if(image_ids && image_ids !==undefined && image_ids.length > 0)  {
      for(var i=0; i<image_ids.length;i++) {

        this.setState({
          ["image_"+image_ids[i]]: true,
          button: false
        
        },() => { 
          if(this.state.img_counter === 0){
            this.setState({ button: true});
          }
          else{
            this.setState({ button: false});
          }
        });
      }
    }    
  }
  

  // onscroll data load
  handleScroll = () => {
    $(window).scroll(function() {   
      if($(window).scrollTop() > $(document).height() - $(window).height() - 200) {
        this.setState({ limit: this.state.limit + 50, loadingState: false, subcomponent1: false,subcomponent2: true });
      
        if(this.state.limit >100){
          this.setState({ subcomponent1: false, subcomponent2: false,subcomponent3: true, loadingState: true  });
        }   
      }
    }.bind(this));
      
    // // stop scroll after load images
    $(window).on('scroll', function() { 
      var offset = $(window).scrollTop();
      if(offset >= 100) $(window).off('scroll');
    });
  }


  changeName1  = (image_id, id ,name) => {

    if (this.state[image_id] !== undefined && this.state[image_id]) {
      this.setState({
        [image_id]: false
      });

      var arr1 = [...this.state.image_ids];
      var index1 = arr1.indexOf(id);
      if (index1 !== -1) {
        arr1.splice(index1, 1);
        this.setState({image_ids: arr1});
      }

     

      this.setState({
        img_counter: this.state.img_counter - 1
      },() => {
        if(this.state.img_counter === 0){
          this.setState({ button: true});
        }else {   
          this.setState({ button: false});
        }
      })    

    } else {
        this.setState({
          [image_id]: true,
           values: {
            id:id,
            image: name
          },
          image_ids:this.state.image_ids.concat(id)  
        });

       

        this.setState({
          img_counter: this.state.img_counter + 1
        },() => {
          if(this.state.img_counter === 0){
            this.setState({ button: true});
          }
          else{
            this.setState({ button: false});
          }
        }) 
    }
  };

  saveRoomImages() {
    if(this.state.room_value!== null) {
      localStorage.setItem('image_ids', JSON.stringify(this.state.image_ids));
      localStorage.setItem('img_counter', JSON.stringify(this.state.img_counter));
     
    }  
  }

  render() {

    const {rooms} = this.state;
    let subset1 = rooms.slice(0, this.state.limit)
    let items = subset1.map((image, imageIndex) => {
      return ( 
        <div className="card" key={image.id}>
          <button onClick={() => this.changeName1("image_"+image.id, image.id, image.name)} className="img_button" data-automated-test="styleQuizImage" type="button">
            <LazyLoadImage
                  alt={image.alt}
                  effect="blur"
                  src={"http://10.90.90.110:3000"+ (image.name.url)} 
                  className="img_button1" 
            />
            <div id={'image_'+image.id} className={this.state["image_"+image.id] ? "img_select img_select1 img_select3" : "img_select img_select1"}>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.508 1L6.752 13.011l-4.983-4.27L1 9.638l6.076 5.208L14.538 1.58z"></path>
              </svg>  
            </div>       
          </button>
        </div>
      );
    });
   
    return (
      <div className="App" id="header" ref="iScroll">
        <div className="client-side-wrapper" data-client-style-quiz="" data-client-style-quiz-root-path="/interior-design-style-quiz">
          <div className="app">
            <div className="quiz_div">
              <div className="main_div" id="total_div">

                <div className="header">
                  <button className="back_btn"  onClick={this.props.handleClick}>
                    <span className="back_nav retina-arrows-0005 ">&#8249;</span>
                    <div className="back_txt">back</div>
                  </button>
                  
                  <a className="web_icon" href="/">
                    <img src={web_icon} alt="web_img" className="web_img"/>
                  </a>

                  <a className="header_right animated fadeInUp delay-0.45s back_btn1" href="/" onClick={this.logout}>
                    <span className="back_nav1 retina-arrows-0005">&#10005;</span>
                    <div  className={!this.state.login_button ? "back_txt"  : "back_txt hide_sign_in" } >
                       logout
                    </div>
                  </a>
                </div>

                <div className="total_divv">
               
                  <div className="text_part">
                    <div className="text_partt">
    
                      {this.state.subcomponent1?
                        <div>
                          <h3 className="header_1 " >Select the rooms that make you swoon.</h3>
                          <p className="header_2 animated fadeInRight delay-0.25s">Decisions are hard. Pick as many as you want.</p>
                        </div>: null}

                      {this.state.subcomponent2?
                        <div>
                          <h3 className="header_1" >And what about these?</h3>
                          <p className="header_2">Are there any that you like?</p>
                        </div>: null}

                      {this.state.subcomponent3?
                        <div>
                          <h3 className="header_1" >Last set. Promise.</h3>
                          <p className="header_2">Do you like any of these?</p>
                        </div>:null}

                        <div className={this.state.login_button ? "user_login"  : "user_login hide_sign_in" }>
                          <p>Already a member?</p>
                          <a href="/login">Log in</a>
                        </div>

                    </div>
                  </div>

                  <div>
                    <div className="images_block images_block1">
                      <div className="image_card">
                        <div className="card-columns">
                          {items}
                        </div>
                      </div>  
                    </div>
                    
                    <div className="next_btn">
                      <div className="next_btn1 next_btn2">
                        <button disabled={this.state.button} className={this.state.button ? "next_button"  : "next_button new"} 
        
                            onClick={() => {
                                this.props.handleClick2();
                                this.saveRoomImages();
                              }}

                            type="button">
                          Next
                        </button>
                      </div>
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

export default MyComponent1;



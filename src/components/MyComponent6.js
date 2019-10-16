import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import web_icon from '../web_icon.svg';


class MyComponent6 extends Component {
  constructor (props) {
    var image_types = localStorage.getItem('image_type') ? JSON.parse(localStorage.getItem('image_type')) : [];
    super(props);
    this.state = {
      email: '',
      images: image_types
    }
    this.logout = this.logout.bind(this); 
  }

  componentDidMount(){
    var image_type = localStorage.getItem('image_type') ? JSON.parse(localStorage.getItem('image_type')) : [];
    if(localStorage.image_type){
      this.setState({
        images: image_type
      });
    }
  }


  logout(){
    localStorage.removeItem('img_counter');
    localStorage.removeItem('counter');
    localStorage.removeItem('image_ids');
    localStorage.removeItem('room_ids');
    localStorage.removeItem('image_type');
    localStorage.removeItem('room_value');
    
    location.href('/');
  }

  
  render(){
    var rooms = this.state.images
    let items = rooms.map((image, imageIndex) => {
      return ( 
        <div className="card" key={ imageIndex }>
          <button  className="result_images img_button" data-automated-test="styleQuizImage" type="button">
            <img alt=""  className="img_button1" src={"http://10.90.90.110:3000"+ (image.image.url)} />     
          </button>
        </div>
      );
    });

    return (
      <div className="App">
        <div className="client-side-wrapper" data-client-style-quiz="" data-client-style-quiz-root-path="/interior-design-style-quiz">
          <div className="app">
            <div className="quiz_div">
              <div className="main_div">

                <div className="header">
                  <a className="back_btn" href="/" onClick={this.logout}>
                    <span className="back_nav retina-arrows-0005 ">&#8249;</span>
                    <div className="back_txt">restart</div>
                  </a>
                
                  <a className="web_icon" href="/">
                    <img src={web_icon} alt="web_img" className="web_img"/>
                  </a>

                  <a className="header_right" href="/">
                    <span className="close_icon close_icon1"></span>
                  </a>
                </div>
        
                <div className="row">
                  <div className="col-md-6 text_part11">
                    <div className="tell_name222">
                      <h6 className="tell_name11">Based on our super <br/> fancy algorithm™, your <br/> main style  is Preppy.</h6>
                      <p className="tell_name2">ABOUT YOUR STYLE</p>
                    </div>

                    <div className="_2JtjsOR_aQYsH01DbnsiNX">
                    You’ve got some prep in your step. Vibrant navy, greens, and pinks really row your boat. And you’re all about those All-American stripes, polka dots and argyle.
                    </div>

                    <div className="_1jXUW1Tli-n75oouwNbF70">
                      <h2>Share your style</h2>
                        <ul>
                          <li>
                          <a  href="https://www.facebook.com/nyros.technologies/"  rel="noreferrer noopener" target="_blank">
                          <span className="_2XoRqaZbgV8XFV8iaiGeWT">
                          <svg width="12" height="24" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.665.23v3.675s-2.743-.27-3.43.769c-.375.567-.152 2.229-.185 3.423h3.637c-.307 1.394-.527 2.34-.754 3.548H8.03v11.42H2.99c.002-3.52 0-7.628 0-11.375H.847V8.097h2.12c.109-2.628.15-5.23 1.47-6.557C5.923.05 7.339.23 11.667.23" fill="#1B2132" fillRule="evenodd"></path></svg></span></a></li>
                          <li><a href="https://www.facebook.com/nyros.technologies/" rel="noreferrer noopener" target="_blank"><span className="L1Yr2Sw2m_Tq__6gd6-vB"><svg width="27" height="22" viewBox="0 0 27 22" xmlns="http://www.w3.org/2000/svg"><path d="M18.349.09c2.092-.035 3.205.717 4.268 1.675.903-.076 2.076-.575 2.767-.922.225-.12.448-.242.672-.363-.394 1.054-.93 1.879-1.753 2.505-.182.14-.362.327-.592.415v.014c1.172-.012 2.138-.535 3.057-.818v.013c-.483.757-1.135 1.525-1.832 2.076l-.843.662c.015 1.226-.018 2.396-.25 3.426-1.349 5.989-4.923 10.055-10.58 11.797-2.031.625-5.314.881-7.64.311-1.155-.283-2.198-.602-3.176-1.026a12.681 12.681 0 0 1-1.528-.778l-.474-.285c.524.016 1.139.158 1.725.065.532-.085 1.052-.062 1.54-.169 1.224-.264 2.308-.616 3.243-1.155.453-.261 1.14-.57 1.462-.947-.607.01-1.156-.129-1.608-.286-1.747-.61-2.764-1.73-3.424-3.413.529.057 2.054.193 2.41-.104-.666-.036-1.307-.417-1.765-.7-1.405-.87-2.552-2.327-2.543-4.569l.553.26c.353.147.713.226 1.133.311.179.036.534.14.739.065h-.027c-.272-.312-.715-.521-.988-.856-.902-1.107-1.746-2.812-1.212-4.841a6.11 6.11 0 0 1 .58-1.389l.026.013c.104.217.339.376.488.559.46.563 1.028 1.07 1.606 1.518 1.973 1.524 3.749 2.46 6.601 3.153.724.177 1.56.31 2.425.312-.244-.698-.166-1.83.025-2.505.482-1.7 1.526-2.925 3.057-3.582a6.605 6.605 0 0 1 1.2-.363l.658-.078" fill="#1B2132" fillRule="evenodd"></path></svg></span></a></li>
                          <li><a href="https://www.facebook.com/nyros.technologies/" rel="noreferrer noopener" target="_blank"><span className="_1d2dlnsoQ440yWAkaT3Zc1"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.984.077C5.4.077.061 5.415.061 12c0 5.051 3.143 9.366 7.578 11.103-.104-.943-.198-2.39.042-3.42.216-.93 1.398-5.927 1.398-5.927s-.357-.714-.357-1.77c0-1.658.961-2.896 2.158-2.896 1.017 0 1.508.764 1.508 1.68 0 1.023-.651 2.552-.987 3.97-.281 1.187.595 2.154 1.765 2.154 2.12 0 3.748-2.234 3.748-5.46 0-2.855-2.05-4.85-4.98-4.85-3.393 0-5.384 2.544-5.384 5.174 0 1.025.395 2.123.887 2.72a.356.356 0 0 1 .083.343c-.09.376-.292 1.186-.33 1.352-.053.218-.174.264-.4.16-1.489-.694-2.42-2.871-2.42-4.62 0-3.76 2.733-7.215 7.878-7.215 4.136 0 7.35 2.947 7.35 6.886 0 4.11-2.59 7.417-6.186 7.417-1.209 0-2.344-.628-2.733-1.37 0 0-.598 2.277-.743 2.835-.27 1.036-.996 2.334-1.482 3.126a11.92 11.92 0 0 0 3.53.532c6.586 0 11.924-5.339 11.924-11.924C23.908 5.415 18.57.077 11.984.077l7.387 3.495" fillRule="evenodd"></path></svg></span></a></li><li><a href="https://www.facebook.com/nyros.technologies/"><span className="_3CE1kDqyUlPxU_KQ3wmO2Q"><svg width="29" height="19" viewBox="0 0 29 19" xmlns="http://www.w3.org/2000/svg"><path d="M14.16 13.274l3.526-3.375 9.933 8.588a1.302 1.302 0 0 1-.891.353H1.591a1.3 1.3 0 0 1-.891-.353l9.934-8.588 3.526 3.375zM.642 18.428a1.268 1.268 0 0 1-.35-.872V1.284c0-.357.148-.68.386-.913l8.445 8.082-8.481 9.975zM.724.334C.954.128 1.256 0 1.59 0h25.137c.335 0 .637.128.868.334L14.16 10.704.724.335zm18.473 8.119L27.64.37c.24.233.388.556.388.913v16.272c0 .338-.134.642-.35.872l-8.481-9.975z" fill="#1B2132" fillRule="evenodd"></path></svg></span></a></li>
                        </ul>
                    </div>
                  </div>

                  <div className="col-md-6 _3E6rG_Tt_qwLpsNghhXmVH">
                    <div className="image_card result">
                      <div className="card-columns">
                        {items}
                      </div>
                    </div>  
                  </div>

                  <div className="next_btn">
                    <div className="next_btn1 next_btn2">
                      <a href="/" className={this.state.button ? "next_button"  : "next_button new"} onClick={this.logout} type="button">
                          Next
                      </a>
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

export default MyComponent6;















// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import web_icon from '../web_icon.svg';
// import axios from 'axios';





// className MyComponent6 extends Component {
  
//    constructor (props) {
//     super(props);
//     this.state = {
//         email: '',
      
//     }
//   }


//   logout() {
//     localStorage.clear();
//    }

  
//   render() {

//     return (
//       <div className="App">
//         <div className="client-side-wrapper" data-client-style-quiz="" data-client-style-quiz-root-path="/interior-design-style-quiz">
//           <div className="app">
//             <div className="quiz_div">
//               <div className="main_div">

//                 <div className="header">
//                   <button className="back_btn" onClick={this.props.handleClick}>
//                     <span className="back_nav retina-arrows-0005 ">&#8249;</span>
//                     <div className="back_txt">restart</div>
//                   </button>
                
//                   <a className="web_icon" href="/">
//                     <img src={web_icon} alt="web_img" className="web_img"/>
//                   </a>

//                   <a className="header_right" href="/">
//                     <span className="close_icon close_icon1"></span>
//                   </a>
//                 </div>
        
//                 <div className="">
//                   <div className="text_part">
//                     <div className="tell_name">
//                       <h6 className="tell_name11">Based on our super fancy algorithm™, your main style is Preppy.</h6>
//                       <p className="tell_name2">ABOUT YOUR STYLE</p>
//                     </div>

//                     <div className="_2JtjsOR_aQYsH01DbnsiNX">
//                     You’ve got some prep in your step. Vibrant navy, greens, and pinks really row your boat. And you’re all about those All-American stripes, polka dots and argyle.
//                     </div>

//                     <div className="_1jXUW1Tli-n75oouwNbF70">
//                       <h2>Share your style</h2>
//                         <ul>
//                           <li><button><span className="_2XoRqaZbgV8XFV8iaiGeWT"><svg width="12" height="24" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.665.23v3.675s-2.743-.27-3.43.769c-.375.567-.152 2.229-.185 3.423h3.637c-.307 1.394-.527 2.34-.754 3.548H8.03v11.42H2.99c.002-3.52 0-7.628 0-11.375H.847V8.097h2.12c.109-2.628.15-5.23 1.47-6.557C5.923.05 7.339.23 11.667.23" fill="#1B2132" fillRule="evenodd"></path></svg></span></button></li>
//                           <li><a href="https://twitter.com/intent/tweet?text=I%20just%20found%20out%20my%20style%20is%20Preppy%20via%20%40TheHavenly!%20Want%20to%20find%20yours%3F%20Do%20it%20for%20free%20at&amp;url=https%3A%2F%2Fhavenly.com%2Finterior-design-style-quiz" rel="noreferrer noopener" target="_blank"><span className="L1Yr2Sw2m_Tq__6gd6-vB"><svg width="27" height="22" viewBox="0 0 27 22" xmlns="http://www.w3.org/2000/svg"><path d="M18.349.09c2.092-.035 3.205.717 4.268 1.675.903-.076 2.076-.575 2.767-.922.225-.12.448-.242.672-.363-.394 1.054-.93 1.879-1.753 2.505-.182.14-.362.327-.592.415v.014c1.172-.012 2.138-.535 3.057-.818v.013c-.483.757-1.135 1.525-1.832 2.076l-.843.662c.015 1.226-.018 2.396-.25 3.426-1.349 5.989-4.923 10.055-10.58 11.797-2.031.625-5.314.881-7.64.311-1.155-.283-2.198-.602-3.176-1.026a12.681 12.681 0 0 1-1.528-.778l-.474-.285c.524.016 1.139.158 1.725.065.532-.085 1.052-.062 1.54-.169 1.224-.264 2.308-.616 3.243-1.155.453-.261 1.14-.57 1.462-.947-.607.01-1.156-.129-1.608-.286-1.747-.61-2.764-1.73-3.424-3.413.529.057 2.054.193 2.41-.104-.666-.036-1.307-.417-1.765-.7-1.405-.87-2.552-2.327-2.543-4.569l.553.26c.353.147.713.226 1.133.311.179.036.534.14.739.065h-.027c-.272-.312-.715-.521-.988-.856-.902-1.107-1.746-2.812-1.212-4.841a6.11 6.11 0 0 1 .58-1.389l.026.013c.104.217.339.376.488.559.46.563 1.028 1.07 1.606 1.518 1.973 1.524 3.749 2.46 6.601 3.153.724.177 1.56.31 2.425.312-.244-.698-.166-1.83.025-2.505.482-1.7 1.526-2.925 3.057-3.582a6.605 6.605 0 0 1 1.2-.363l.658-.078" fill="#1B2132" fillRule="evenodd"></path></svg></span></a></li>
//                           <li><a href="http://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fhavenly.com%2Finterior-design-style-quiz&amp;media=https%3A%2F%2Fi.pinimg.com%2F736x%2Ffc%2Ff5%2F33%2Ffcf5330e5b2f21d6c7aba16d2a75215e--preppy-bedroom-chevron-rugs.jpg&amp;description=I%20just%20found%20out%20my%20style%20is%20Preppy%20via%20%40TheHavenly!%20Find%20out%20yours%20(for%20free)!" rel="noreferrer noopener" target="_blank"><span className="_1d2dlnsoQ440yWAkaT3Zc1"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.984.077C5.4.077.061 5.415.061 12c0 5.051 3.143 9.366 7.578 11.103-.104-.943-.198-2.39.042-3.42.216-.93 1.398-5.927 1.398-5.927s-.357-.714-.357-1.77c0-1.658.961-2.896 2.158-2.896 1.017 0 1.508.764 1.508 1.68 0 1.023-.651 2.552-.987 3.97-.281 1.187.595 2.154 1.765 2.154 2.12 0 3.748-2.234 3.748-5.46 0-2.855-2.05-4.85-4.98-4.85-3.393 0-5.384 2.544-5.384 5.174 0 1.025.395 2.123.887 2.72a.356.356 0 0 1 .083.343c-.09.376-.292 1.186-.33 1.352-.053.218-.174.264-.4.16-1.489-.694-2.42-2.871-2.42-4.62 0-3.76 2.733-7.215 7.878-7.215 4.136 0 7.35 2.947 7.35 6.886 0 4.11-2.59 7.417-6.186 7.417-1.209 0-2.344-.628-2.733-1.37 0 0-.598 2.277-.743 2.835-.27 1.036-.996 2.334-1.482 3.126a11.92 11.92 0 0 0 3.53.532c6.586 0 11.924-5.339 11.924-11.924C23.908 5.415 18.57.077 11.984.077l7.387 3.495" fillRule="evenodd"></path></svg></span></a></li><li><a href="mailto:?subject=I’m Preppy...what’s your style? Let Havenly tell you!&amp;body=Havenly helped me figure out my design style (for free)! Since I’m Preppy, don’t you want to find out yours? %0D%0ATry it now: https://havenly.com/interior-design-style-quiz"><span className="_3CE1kDqyUlPxU_KQ3wmO2Q"><svg width="29" height="19" viewBox="0 0 29 19" xmlns="http://www.w3.org/2000/svg"><path d="M14.16 13.274l3.526-3.375 9.933 8.588a1.302 1.302 0 0 1-.891.353H1.591a1.3 1.3 0 0 1-.891-.353l9.934-8.588 3.526 3.375zM.642 18.428a1.268 1.268 0 0 1-.35-.872V1.284c0-.357.148-.68.386-.913l8.445 8.082-8.481 9.975zM.724.334C.954.128 1.256 0 1.59 0h25.137c.335 0 .637.128.868.334L14.16 10.704.724.335zm18.473 8.119L27.64.37c.24.233.388.556.388.913v16.272c0 .338-.134.642-.35.872l-8.481-9.975z" fill="#1B2132" fillRule="evenodd"></path></svg></span></a></li>
//                         </ul>
//                     </div>

//                   </div>

//                   <div className="name_box">
//                   <h1>Your results save in database</h1>
//                  </div>
//                   <div className="next_btn1 next_btn2 _2wyyxby8i9nYV9d8Hf2YUb ">
//                     <button className={this.state.email ? "next_button"  : "next_button new"} type="submit" onClick={this.props.handleClick}> Restart</button></div>
                  
//                 </div>

//               </div>
//             </div>
//           </div>  
//         </div> 
//       </div>
//     );
//   }
// }

// export default MyComponent6;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home";
import MyComponent1 from "./components/MyComponent1";
import MyComponent2 from "./components/MyComponent2";
import MyComponent3 from "./components/MyComponent3";
import MyComponent4 from "./components/MyComponent4";
import MyComponent5 from "./components/MyComponent5";
import MyComponent6 from "./components/MyComponent6";

// import { BrowserRouter, Switch , Route , Link} from 'react-router-dom';


import './App.css';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Home: true,
      MyComponent1: false,
      MyComponent2: false,
      MyComponent3: false,
      MyComponent4: false,
      MyComponent5: false,
      MyComponent6: false,
      value: 0       
    }

    this.handleClick = this.handleClick.bind(this); 
    this.handleClick1 = this.handleClick1.bind(this); 
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
  }

  handleClick() {
    this.setState({
      Home: true,
      MyComponent1: false,
      MyComponent2: false,
      MyComponent3: false,
      MyComponent4: false,
      MyComponent5: false,
      MyComponent6: false   
    });
  }
  

  handleClick1() {
    this.setState({
      Home: false,
      MyComponent1: true,
      MyComponent2: false,
      MyComponent3: false,
      MyComponent4: false,
      MyComponent5: false,
      MyComponent6: false 
    });
  }
      
  handleClick2() {
  
    this.setState({
      Home: false,
      MyComponent1: false,
      MyComponent2: true,
      MyComponent3: false,
      MyComponent4: false,
      MyComponent5: false,
      MyComponent6: false              
    });
  }

  handleClick3() {
    
    this.setState({
      Home: false,
      MyComponent1: false,
      MyComponent2: false,
      MyComponent3: true,
      MyComponent4: false,
      MyComponent5: false,
      MyComponent6: false       
    });
  }

  handleClick4() {
    this.setState({
      Home: false,
      MyComponent1: false,
      MyComponent2: false,
      MyComponent3: false,
      MyComponent4: true,
      MyComponent5: false,
      MyComponent6: false            
    });
  }

  handleClick5() {

    this.setState({
      Home: false,
      MyComponent1: false,
      MyComponent2: false,
      MyComponent3: false,
      MyComponent4: false,
      MyComponent5: true,
      MyComponent6: false
    });
  }


    handleClick6() {
    this.setState({
      Home: false,
      MyComponent1: false,
      MyComponent2: false,
      MyComponent3: false,
      MyComponent4: false,
      MyComponent5: false,
      MyComponent6: true
    });
  }
   
  // componentDidMount() { 
  //     setTimeout(() => this.setState({isLoading: false}), 2000)
  //       console.log("componentDidMount");
  //   }


  render() {
    // if(this.state.isLoading){
    //   return(
    //    <Spinner/>
    //   )
    // }
    return ( 

      <div>
        {this.state.Home? 
          <Home handleClick1={this.handleClick1}/> : null
        }

        {this.state.MyComponent1?
          <MyComponent1 handleClick2={this.handleClick2} handleClick={this.handleClick} /> :null
        }

        {this.state.MyComponent2?
          <MyComponent2 handleClick3={this.handleClick3} handleClick1={this.handleClick1}  /> :null
        }

        {this.state.MyComponent3?
          <MyComponent3 handleClick4={this.handleClick4} handleClick2={this.handleClick2} /> :null
        }

        {this.state.MyComponent4?
          <MyComponent4 handleClick5={this.handleClick5} handleClick6={this.handleClick6} handleClick3={this.handleClick3}  /> :null
        }
        {this.state.MyComponent5?
          <MyComponent5 handleClick6={this.handleClick6} handleClick4={this.handleClick4}  /> :null
        }

        {this.state.MyComponent6?
          <MyComponent6 handleClick={this.handleClick} handleClick5={this.handleClick5} /> :null
        }
       


      </div>
    );
  }
}

export default Main;



// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';

// import Home from "./components/Home";
// import MyComponent1 from "./components/MyComponent1";
// import MyComponent2 from "./components/MyComponent2";
// import MyComponent3 from "./components/MyComponent3";
// import MyComponent4 from "./components/MyComponent4";
// // import Spinner from "./components/Spinner";
// import './App.css';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
    
//       page: 1       
//     }
//     this.nextPage = this.nextPage.bind(this)
//     this.previousPage = this.previousPage.bind(this)
   
//   }


//    nextPage() {
//     console.log("nextPage")
//     this.setState({ page: this.state.page + 1 })
//   }

//   previousPage() {
//     this.setState({ page: this.state.page - 1 })
//   }

 


//   render() {
//     // if(this.state.isLoading){
//     //   return(
//     //    <Spinner/>
//     //   )
//     // }
//        const { page } = this.state
//     return ( 
    
//       <div>
//         {page === 1 && <Home onClick={this.nextPage} /> }

//         {page === 2 && <MyComponent1 onClick={this.nextPage} /> }
//         }

      

//       </div>
//     );
//   }
// }

// export default App;

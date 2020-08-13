import React from 'react';
import './SeasonDisplay.css';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';


class App extends React.Component {
  // constructor(props){
  // super(props);
  // this.state={lat:null , errorMessage:''};
  // }
  state={lat:null, error: ''}
  
  componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
    (position)=> this.setState({ lat: position.coords.latitude}),
    (err)=> this.setState({errorMessage: err.message})
   
  );
  }
  render(){
    if(!this.state.errorMessage && this.state.lat){
    return <SeasonDisplay lat={this.state.lat}/>
    }
    if(this.state.errorMessage && !this.state.lat){
    return <div>Error:{this.state.errorMessage}</div>
    }
    return <Loader message="Please accept Location request"/>
  }
// }
//   return (
//     <div className="App">
//       {/* <h1>Latitude{this.state.lat}</h1>
//   <h2>Error {this.state.errorMessage}</h2> */}

//     </div>
//   );
  
// }

}
export default App;

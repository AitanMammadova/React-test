import { Component } from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import Navbar from './Components/Navbar';
import Users from './Components/Users';

class App extends Component {
  
render(){
    return (
      <div className="App">
        <Navbar title="User App"/>
        <Users/>
        <AddUser/>
      </div>
    );
  }
}
export default App;

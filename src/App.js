import { Component } from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import Navbar from './Components/Navbar';
import Test from './Components/Test';
import Users from './Components/Users';

class App extends Component {
  
render(){
    return (
      <div className="App">
        <Navbar title="User App"/>
        <Users/>
        <AddUser/>
        <Test test = "deneme"/>
      </div>
    );
  }
}
export default App;

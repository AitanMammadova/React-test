import React, { Component } from 'react';
import axios from 'axios'
const UserContext = React.createContext();

const reducer =(state,action) =>{
  switch(action.type){
    case "DELETE_USER":
      return{
        ...state,
        users: state.users.filter(user=>user.id!==action.payload)
      }
      case "ADD_USER":
        return{
          ...state,
          users: [...state.users, action.payload]
        }
      default:
        return state
  }
}
export  class UserProvider extends Component {
    state = {
        users : [],
        dispatch: action =>{
          this.setState(state=> reducer (state,action))
        }
      }
      componentDidMount () { 
        // const response = await axios.get("http://localhost:8000/users");
        // this.setState({
        //   users : response.data
        // })
        axios.get("http://localhost:8000/users")
        .then(response => this.setState({ users: response.data }))
        .catch(error => {
            console.error(error);
        });
       }
  render() {
    return (
        <UserContext.Provider value = {this.state}>
            {this.props.children}
        </UserContext.Provider>
    );
  }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;

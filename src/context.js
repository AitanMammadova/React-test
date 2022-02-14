import React, { Component } from 'react';
const UserContext = React.createContext();

const reducer =(state,action) =>{
  switch(action.type){
    case "DELETE_USER":
      return{
        ...state,
        users: state.users.filter(user=>action.payload!==user.id)
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
        users : [
          {
            id:"1",
            name : "Aitan",
            surname : "Mammadova",
            age : "20"
          },
          {
            id:"2",
            name : "Mahammad",
            surname : "Mammadov",
            age : "21"
          },
          {
            id:"3",
            name : "Murad",
            surname : "Mammadov",
            age : "19"
          },
        ],
        dispatch: action =>{
          this.setState(state=> reducer (state,action))
        }
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

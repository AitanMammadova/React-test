import React, { Component } from 'react'
import posed from 'react-pose'
import uniqid from 'uniqid';
import UserConsumer from '../context';
const Animation = posed.div({
    visible :{
        opacity:1,
        applyAtStart:{
            display:"block"
        }
    },
    hidden :{
        opacity:0,
        applyAtEnd:{
        display:"none"
        }
    }
})
class AddUser extends Component {
    state = {
        visible : false,
        name : "",
        surname : "",
        age : ""
    }
    changeVisibility =(e)=>{
        this.setState({
            visible : !this.state.visible
        })
    }
    changeInput = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    addUser = (dispatch, e)=>{
        e.preventDefault(); //submit Control
        const  {name, surname, age} = this.state;
        const newUser = {
            id : uniqid(),
            name,
            surname,
            age 
        } 
        dispatch ({type : "ADD_USER", payload :newUser})
    }

  render() {
    const {visible, name, surname, age} = this.state
        return(
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value
                        return (
                            <div className="col-md-8 mb-4 ">
                                <button onClick = {this.changeVisibility} className='btn btn-block btn-secondary mb-2 col-4'>{visible? "Hide Form": "Show Form"}</button>
                                <Animation pose = {visible? "visible":"hidden"}>
                                    <div className="card">
                                        <div className="card-header bg-dark text-white text-center" >
                                            <h4>Add User</h4>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={this.addUser.bind(this,dispatch)}>
                                                <div className="form-group">
                                                        <label htmlFor="name">Name</label>
                                                        <input type="text"
                                                        name = "name"
                                                        id = "id"
                                                        placeholder='Enter Name'
                                                        className='form-control'
                                                        value = {name}
                                                        onChange = {this.changeInput} /> 
                                                        
                                                        <label htmlFor="surname">Surname</label>
                                                        <input type="text"
                                                        name = "surname"
                                                        id = "id"
                                                        placeholder='Enter Surname'
                                                        className='form-control' 
                                                        value = {surname}
                                                        onChange = {this.changeInput} /> 
                    
                                                        <label htmlFor="age">Age</label>
                                                        <input type="text"
                                                        name = "age"
                                                        id = "id"
                                                        placeholder='Enter Age'
                                                        className='form-control'
                                                        value = {age} 
                                                        onChange = {this.changeInput} 
                                                        />
                                                    </div>
                                                    <button className='btn btn-secondary btn-block' type='submit'>Add User</button>
                                            </form>
                                        </div>
                                    </div>
                                </Animation>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}
export default AddUser;
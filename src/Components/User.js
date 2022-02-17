import axios from 'axios';
import PropTypes from 'prop-types';
import {Component} from 'react'
import UserConsumer from '../context';
class User extends Component {
    
    state = {
        isVisible :false
    }
    clickEvent =(e)=>{
        this.setState({
            isVisible : !this.state.isVisible
        })
    }
    
    deleteUser =async (id, dispatch) => {
        try{
            await axios.delete('http://localhost:8000/users/'+id)
            dispatch({
            type: 'DELETE_USER',
            payload: id
        })
    } catch(e){
        console.log(e)
    }
   
}
    // componentWillUnmount() {
    //     console.log("componentWillUnmount");
    //     When some elements are deleted
    // }
    render(){
        const {isVisible} = this.state;
        const {name, surname, age} = this.props;
        const {id} = this.props;
        return(
            <UserConsumer>
                {
                    value=>{
                        const {dispatch} = value;
                        return ( 
                            <div className = "col-8 mb-4">
                                <div className="card" style = {isVisible ? {borderColor :"#b4b2c6"}: null}>
                                    <div className="card-header d-flex justify-content-between" style = {isVisible ? {backgroundColor :"#b4b2c6"}: null}>
                                        <h4 className="d-inline" onClick = {this.clickEvent}>{name}</h4>
                                        <i onClick={this.deleteUser.bind(this,id,dispatch)} className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
                                    </div>
                                    {
                                        isVisible ? 
                                        <div className="card-body">
                                            <p className="card-text">Surname: {surname}</p>
                                            <p className="card-text">Age: {age}</p>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        );
                    }
                }
            </UserConsumer>
        )
    }
}
//name is necesarry
User.propTypes = {
    name : PropTypes.string.isRequired,
    surname : PropTypes.string.isRequired,
    age : PropTypes.string.isRequired,
    id :PropTypes.string.isRequired
}
//default name for name
User.defaultProps = {
    name: "User"
}

export default User;
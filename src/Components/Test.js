import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            a:20
        }
        console.log("Constructor")
    }
    componentDidMount() { 
        console.log("componentDidMount") 
        //Constructor>Render>ComponentDidMount 
        //API
        this.setState({
            a:10
        })
        //Constructor>Render>ComponentDidMount>Render 

    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        //After Update(Render)
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true; // After ComponentDidMount it works and updating
        //return false; // After ComponentDidMount it doesn't work

    }
    render() {
        console.log("Render");
        const {a} = this.state
        return (
        <div>{a}</div>
        )
    }
}
export default Test;
import React, {Component} from 'react';
import LoginForm from "./LoginForm"

class LoginFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
    }

    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        //this is where to call the sign-in function from redux
        alert(JSON.stringify(this.state.inputs));
        this.clearInputs();
    }

    render() {
        return (
            <LoginForm 
            handleChange={this.handleChange.bind(this)}
            handleSubmit={this.handleSubmit.bing(this)}
            {...this.state.inputs}/>
        )
    }

}

export default LoginFormContainer;
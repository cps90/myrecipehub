import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signup} from "../../redux/auth"
import SignupForm from './SignupForm'

class SignupFormContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                name: "",
                username: "",
                password: ""
            }
        }
    }

    handleChange(e) {
        e.persist();
        this.setState(prevState => {
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
                name: "",
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state.inputs);
        // alert(JSON.stringify(this.state.inputs));
        this.clearInputs();
    }

    render() {
        let authErrCode = this.props.authErrCode.signup;
        let errMsg = "";
        if (authErrCode < 500 && authErrCode > 399) {
            errMsg = "Invalid username or password!";
        } else if (authErrCode > 499) {
            errMsg = "Server error!";
        }
        return (
            <SignupForm
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                {...this.state.inputs} />
        )
    }
    
}

export default connect(state => state.auth, {signup})(SignupFormContainer);



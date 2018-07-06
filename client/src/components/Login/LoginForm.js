import React from 'react'

function LoginForm(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <h3 className="login-title">Log In</h3>
                <div className="login-form-container">
                    <input 
                        onChange={props.handleChange}
                        value={props.username}
                        name="username"
                        type="text"
                        placeholder="username"/>
                    <input 
                        onChange={props.handleChange}
                        value={props.password}
                        name="password"
                        type="password"
                        placeholder="password"/>  
                    <button type="submit">Submit</button>     
                </div> 
                    
                <p>{props.errMsg}</p>
            </form>
        </div>
    )
}

export default LoginForm;
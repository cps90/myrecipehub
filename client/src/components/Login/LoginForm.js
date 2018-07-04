import React from 'react'

function LoginForm(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <h3>Log In</h3>
                <input 
                    onChange={props.handleChange}
                    value={props.username}
                    name="username"
                    type="text"
                    placeholder="@Username"/>
                <input 
                    onChange={props.handleChange}
                    value={props.password}
                    name="password"
                    type="password"
                    placeholder="#"/>    
                <button type="submit">Submit</button>    
                <p>{props.errMsg}</p>
            </form>
        </div>
    )
}

export default LoginForm;
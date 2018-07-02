import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../redux/auth'

function Navbar(props) {  
    return (
        <div className="navbar-wrapper">
            <Link to="/">Log In</Link> 
            <Link to="/signup">Sign Up</Link> 
            <Link to="/home">Home</Link> 
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}

export default withRouter(connect(null, {logout})(Navbar));  
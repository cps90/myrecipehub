import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../redux/auth'

function Navbar(props) {  
    const { isAuthenticated } = props;
    return (
        <div className="navbar-wrapper">
            {!isAuthenticated && <div><Link className="nav-link" to="/">Signup</Link></div>} 
            {!isAuthenticated && <div><Link className="nav-link" to="/login">Login</Link></div>} 
            {isAuthenticated && <div><Link className="nav-link" to="/home">Home</Link></div>} 
            {isAuthenticated && <div><button className="nav-link" onClick={props.logout}>Logout</button></div>}
        </div>
    )
}

export default connect(state => state.auth, {logout})(Navbar);

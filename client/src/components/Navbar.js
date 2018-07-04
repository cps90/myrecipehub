import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../redux/auth'

function Navbar(props) {  
    const { isAuthenticated } = props;
    return (
        <div className="navbar-wrapper">
            {!isAuthenticated && <div className="nav-link"><Link to="/">Signup</Link></div>} 
            {!isAuthenticated && <div className="nav-link"><Link to="/login">Login</Link></div>} 
            {isAuthenticated && <div className="nav-link"><Link to="/home">Home</Link></div>} 
            {isAuthenticated && <div className="nav-link"><button onClick={props.logout}>Logout</button></div>}
        </div>
    )
}

export default connect(state => state.auth, {logout})(Navbar);  
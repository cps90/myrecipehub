import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

class Home extends React.Component {
  
    render() {
        return (
            <div>
                <Link to="./apps">Appetizers </Link>
                <Link to="./breakfast">Breakfast </Link>
                <Link to="./cocktails">Cocktails </Link>
                <Link to="./desserts">Desserts </Link>
                <Link to="./maincourse">Main Course </Link>
                <Link to="./newrecipe"> New Recipe </Link>
                <Link to="./sidedishes"> Side Dishes </Link>
            </div>
        )
    }
}

export default withRouter(connect(state => state)(Home))
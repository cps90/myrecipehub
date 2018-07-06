import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Home(props){
        return (
            <div>
                <Link to="./apps" className="link">Appetizers </Link>
                <Link to="./breakfast" className="link">Breakfast </Link>
                <Link to="./cocktails" className="link">Cocktails </Link>
                <Link to="./desserts" className="link">Desserts </Link>
                <Link to="./maincourse" className="link">Main Course </Link>
                <Link to="./sidedishes" className="link"> Side Dishes </Link>
                <Link to="./new" className="link">New Recipe </Link>
            </div>
        )
}

export default connect(null)(Home)
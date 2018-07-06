import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Home(props){
        return (
            <div>
                <Link className="homelinks" to="./apps">Appetizers </Link>
                <Link className="homelinks" to="./breakfast">Breakfast </Link>
                <Link className="homelinks" to="./cocktails">Cocktails </Link>
                <Link className="homelinks" to="./desserts">Desserts </Link>
                <Link className="homelinks" to="./maincourse">Main Course </Link>
                <Link className="homelinks" to="./sidedishes"> Side Dishes </Link>
                <Link className="homelinks" to="./new">New Recipe </Link>
            </div>
        )
}

export default connect(null)(Home)
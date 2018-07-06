import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Home(props){
        return (
            <div>
                <div className="homepage">
                        <Link className="homelinks appetizers" to="/apps"><span>Appetizers</span></Link>
                        <Link className="homelinks breakfast" to="/breakfast"><span>Breakfast</span></Link>
                        <Link className="homelinks cocktails" to="/cocktails"><span>Cocktails</span></Link>
                        <Link className="homelinks desserts" to="/desserts"><span>Desserts</span></Link>
                        <Link className="homelinks maincourse" to="/maincourse"><span>Main Course</span></Link>
                        <Link className="homelinks sides" to="/sidedishes"><span>Side Dishes</span></Link> 
                </div> 
                <Link className="new-recipe" to="./new">New Recipe </Link>  
            </div>    
          
        )
}

export default connect(null)(Home)
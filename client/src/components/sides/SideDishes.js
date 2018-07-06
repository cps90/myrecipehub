import React from 'react';
import { connect } from 'react-redux';
import Home from '../Nav';
import Recipe from './Recipe';

class SideDishes extends React.Component {
   
    render() {
        return (
            <div>
                {/* <Home /> */}
                {this.props.recipe.filter(find => find.directory === 'sides').map(sides =>
                    <Recipe 
                        key={sides._id} 
                        id={sides._id}  
                        name={sides.name} 
                        ingredients={sides.ingredients} 
                        directions={sides.directions} 
                        imageURL={sides.imageURL} 
                        directory={sides.directory} /> 
                    )}
              
            </div>
        )
    }
}

export default connect(state => state)(SideDishes)
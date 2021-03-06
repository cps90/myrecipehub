import React from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';

class Desserts extends React.Component {
    
    render() {
        return (
            <div>
                {this.props.recipe.filter(find => find.directory === 'dessert').map(dessert =>
                    <Recipe 
                        key={dessert._id} 
                        id={dessert._id} 
                        name={dessert.name} 
                        ingredients={dessert.ingredients}
                        directions={dessert.directions} 
                        imageURL={dessert.imageURL} 
                        directory={dessert.directory} /> 
                )}
            </div>
        )
    }
}

export default connect(state => state)(Desserts)
import React from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe'
import Home from '../Nav';

class Apps extends React.Component {
    render() {   
        return (
            <div>
                {this.props.recipe.filter(find => find.directory === 'appitizer').map(meal =>
                    <Recipe 
                        key={meal._id} id={meal._id} 
                        name={meal.name} 
                        ingredients={meal.ingredients} 
                        directions={meal.directions} 
                        imageURL={meal.imageURL} 
                        directory={meal.directory} /> 
                )}
            </div>
        )
    }
}

export default connect(state => state)(Apps)
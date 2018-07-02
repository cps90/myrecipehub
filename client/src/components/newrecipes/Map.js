import React from 'react';
import { connect } from 'react-redux';
import Ingredients from './Ingredients';
import { addRecipe } from '../../redux';

class Map extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
            {this.props.ingredients.map(part => 
            <Ingredients key={part._id} id={part._id} 
            ingredient={part.ingredient} amount={part.amount} 
            unit={part.unit} />)} 
            </div>
        )
    }
}

export default connect(state => state, {addRecipe})(Map)
import React from 'react';
import { connect } from 'react-redux';
import Ingredients from './Ingredients';
import { addRecipe } from '../../redux';

class Map extends React.Component {
    render() {
        return (
            <div>
            {this.props.ingredients.map(part => 
            <Ingredients key={part._id} id={part._id} 
            ingredient={part.ingredient} amount={part.amount} 
            unit={part.unit} name={this.props.name} directions={this.props.directions} 
            directory={this.props.directory} imgURL={this.props.imgURL} />)} 
            </div>
        )
    }
}

export default connect(state => state, {addRecipe})(Map)
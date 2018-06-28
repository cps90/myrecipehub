import React from 'react';
import { connect } from 'react-redux'
import Ingredients from './Ingredients';

class Recipe extends React.Component {
    render() {
        console.log(this.props.ingredients)
        return (
            <div>
                <p> {this.props.name} </p>
                <p>{this.props.directions}</p>
                <p> {this.props.directory} </p>
                <p> {this.props.imageURL} </p>
                {this.props.ingredients.map(info => 
              <Ingredients key={info._id} id={info._id} ingredient={info.ingredient}
                amount={info.amount} unit={info.unit}/>)}
            </div>
        )
    }
}

export default connect(state => state)(Recipe)
import React from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import { getRecipes } from '../../redux';
import Home from '../Home';

class Breakfast extends React.Component {
    componentDidMount() {
        this.props.getRecipes()
    }
    render() {
        return (
            <div>
            <Home />
             {this.props.recipe.filter(find => find.directory === 'breakfast').map(info =>
              <Recipe key={info._id} id={info._id} name={info.name} 
              ingredients={info.ingredients} directions={info.directions} 
              imageURL={info.imageURL} directory={info.directory} /> )}
            </div>
        )
    }
}

export default connect(state => state, {getRecipes})(Breakfast)
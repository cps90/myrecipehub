import React from 'react';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import Home from '../Home';

class Breakfast extends React.Component {
    
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

export default connect(state => state)(Breakfast)
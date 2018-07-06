import React from 'react';
import { connect } from 'react-redux';
import Home from '../Home';
import Recipe from './Recipe';

class MainCourse extends React.Component {

    render() {
        return (
            <div>
                <Home />
                    {this.props.recipe.filter(find => find.directory === 'main').map(main =>
                        <Recipe 
                            key={main._id} 
                            id={main._id} 
                            name={main.name} 
                            ingredients={main.ingredients} 
                            directions={main.directions} 
                            imageURL={main.imageURL} 
                            directory={main.directory} /> 
                        )}
              
            </div>
        )
    }
}

export default connect(state => state)(MainCourse)
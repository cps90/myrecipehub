import React from 'react'
import { connect } from 'react-redux'
import {getRecipes} from '../../redux'
import Ingredients from './Ingredients'

class Add extends React.Component{
    componentDidMount() {
        this.props.getRecipes()
    }
    render() {
        return(
            <div>
                {this.props.recipe.map(item => 
                <Ingredients key={item._id} id={item._id}
                name={item.name} directions={item.directions}
                ingredients={item.ingredients} directory={item.directory} 
                imgURL={item.imgURL} />)}
            </div>
        )
    }
}

export default connect(state => state, {getRecipes})(Add)
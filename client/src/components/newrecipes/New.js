import React from 'react'
import { connect } from 'react-redux'
import { getRecipes } from '../../redux/recipe'
import Map from './Map'
import Home from '../Home'

class New extends React.Component{
    componentDidMount() {
        this.props.getRecipes()
    }
    render() {
        return(
            <div>
            <Home />
                {this.props.recipe.filter(app => app.directory === 'add').map(add => 
                <Map key={add._id} id={add._id} name={add.name}
                ingredients={add.ingredients} directions={add.directions}
                directory={add.directory} imageURL={add.imageURL} />)}
            </div>
        )
    }
}

export default connect(state => state, {getRecipes})(New)
import React from 'react'
import { connect } from 'react-redux'
import { getRecipes } from '../../redux'
import Map from './Map'
import Home from '../Home'

class New extends React.Component{
    componentDidMount() {
        this.props.getRecipes()
    }
    render() {
        console.log(this.props)
        return(
            <div>
            <Home />
                {this.props.recipe.map(add => 
                <Map key={add._id} id={add._id} name={add.name}
                ingredients={add.ingredients} directions={add.directions}
                directory={add.directory} imageURL={add.imageURL} />)}
            </div>
        )
    }
}

export default connect(state => state, {getRecipes})(New)
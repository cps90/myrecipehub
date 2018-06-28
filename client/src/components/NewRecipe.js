import React from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../redux';

class Recipe extends React.Component {
constructor() {
    super();
    this.state={isToggled: false}
}
componentDidMount() {
    this.props.getRecipes();
}
toggle = () => {
    this.setState(prevState => {
        return {
            isToggled: !prevState.isToggled
        }
    })
}
handleChange = e => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    })
}
handleSubmit = e => {
    e.preventDefault();
    const newRecipe = {
        name: this.state.name,
        ingredients: [{
            ingredient: this.state.ingredient,
            amount: this.state.amount,
            unit: this.state.unit
        }],
        directions: this.state.directions,
        imageURL: this.state.imageURL,
        directory: this.state.directory
    }
}
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect(state => state, { addRecipe })(Recipe)

import React from 'react'
import { connect } from 'react-redux'
import { addRecipe } from '../../redux'

class Ingredients extends React.Component{
    constructor() {
        super()
        this.state = { 
            name: '',
            directions: '',
            ingredients: { 
            ingredient: '',
            amount: '',
            unit: ''
            },
            directory: '',
            imgURL: ''
        }
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
        directions: this.state.directions,
        ingredients: {
        ingredient: this.state.ingredient,
        amount: this.state.amount,
        unit: this.state.unit
        },
        directory: this.state.directory,
        imgURL: this.state.imgURL
    }
    this.props.addRecipe(newRecipe)
    this.setState({
        name: '',
        directions: '',
    
        ingredient: '',
        amount: '',
        unit: '',
   
        directory: '',
        imgURL: ''
    })
}
    render(){ 
        return(
            <div>
            <form onSubmit={ this.handleSubmit }>    
                    <input
                        type="text"
                        value={this.state.name}
                        name="name"
                        placeholder="name"
                        onChange={this.handleChange} />
                    <input 
                        type="text"
                        value={this.state.ingredient}
                        name="ingredient"
                        placeholder="ingredient"
                        onChange={this.handleChange} />
                    <input  
                        type="number"
                        value={this.state.amount}
                        name="amount"
                        placeholder="amount"
                        onChange={this.handleChange} />
                    <input 
                        type="text"
                        value={this.state.unit}
                        name="unit"
                        placeholder="unit"
                        onChange={this.handleChange} /> 
                    <input 
                        type="text"
                        value={this.state.directions}
                        name="directions"
                        placeholder="directions"
                        onChange={this.handleChange} />
                    <select name="directory" value={this.state.directory} onChange={this.handleChange}>
                        <option value="choices">Select</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="appitizer">Appitizer</option>
                        <option value="sides">Side</option>
                        <option value="main">Main</option>
                        <option value="dessert">dessert</option>
                        <option value="cocktail">cocktail</option>                        
                    </select>            
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(state => state, {addRecipe})(Ingredients)
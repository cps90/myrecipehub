import React from 'react'
import { connect } from 'react-redux'
import { addRecipe } from '../../redux/recipe.js'
import Home from '../Nav'

class Ingredients extends React.Component{
    constructor() {
        super()
        this.state = { 
            name: '',
            directions: '',
            ingredients: [
                { 
                    name: '',
                    amount: '',
                    unit: ''
                }
            ],
            directory: '',
            imgURL: '',
            isToggled: false 
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleIngredientChange = (index, e) => {
        console.log(index);
        console.log(e.target.name);
        const { name, value } = e.target;
        var newIngredients = [...this.state.ingredients]
        newIngredients[index][name] = value 
        this.setState({
        ingredients: newIngredients
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const newRecipe = {
            name: this.state.name,
            directions: this.state.directions,
            ingredients: this.state.ingredients,
            ingredient: this.state.ingredient,
            amount: this.state.amount,
            unit: this.state.unit,
            directory: this.state.directory
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

    addIngredients = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            ingredients: [
                ...prevState.ingredients,
                {
                    name: '',
                    amount: '',
                    unit: ''
                }
            ]
        }))
    }

    render(){ 
        return(
            <div>
            <form onSubmit={this.handleSubmit}>    
                <div>
                    <input
                        className="new-recipe-name"
                        type="text"
                        value={ this.state.name }
                        name="name"
                        placeholder="name"
                        onChange={ this.handleChange } 
                        />
                </div>
                <div className="ingredients">
                    {this.state.ingredients.map((ingredient, index) => {
                        return (
                            <div key={index} className="ingredient">
                                <input
                                    className="ingredient-name" 
                                    type="text"
                                    value={ ingredient.name }
                                    name="name"
                                    placeholder="ingredient"
                                    onChange={ (e) => this.handleIngredientChange(index, e) } 
                                    />
                                <input  
                                    classname="ingredient-amount"
                                    type="number"
                                    value={ ingredient.amount }
                                    name="amount"
                                    placeholder="amount"
                                    onChange={ (e) => this.handleIngredientChange(index, e) } 
                                    />
                                <input 
                                    className="ingredient-unit"
                                    type="text"
                                    value={ ingredient.unit }
                                    name="unit"
                                    placeholder="unit"
                                    onChange={ (e) => this.handleIngredientChange(index, e) } 
                                    />
                                {this.state.ingredients.length -1 === index &&  <button onClick={this.addIngredients}>+</button>}
                            </div>
                            )
                        })}
                    </div>  
                    <div className="directions">   
                        <textarea 
                            value={ this.state.directions }
                            name="directions"
                            placeholder="directions"
                            onChange={ this.handleChange } />  
                    </div>
                    <div>        
                    <select name="directory" value={ this.state.directory } onChange={this.handleChange}>
                        <option value="choices">Select</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="appitizer">Appetizer</option>
                        <option value="sides">Side Dish</option>
                        <option value="main">Main Course</option>
                        <option value="dessert">Dessert</option>
                        <option value="cocktail">Cocktail</option>                        
                    </select>
                    </div>     
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(state => state, {addRecipe})(Ingredients)


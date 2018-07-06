import React from 'react';
import { connect } from 'react-redux'
import Ingredients from './Ingredients'
import { editRecipe } from '../../redux/recipe'

class Recipe extends React.Component {
    constructor(){
        super();
        this.state={isToggled:false, imageURL: ''}
    }
    toggle = () => {
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
    }
    render() {
        return (
            <div>
            <button onClick={this.toggle} className="toggleButton">{this.props.name}</button>
                {this.state.isToggled 
                ? 
                    <div>
                        <p> {this.props.name} </p>
                        <p>{this.props.directions}</p>
                        <p>{this.props.directory}</p>
                        <p>{this.props.imageURL}</p>
                            {this.props.ingredients.map(info => 
                            <Ingredients 
                                key={info._id} 
                                id={info._id} 
                                name={info.name}
                                amount={info.amount} 
                                unit={info.unit}/>
                            )}
                    </div>
                    : null 
                }
            </div>
        )
    }
}

export default connect(state => state, {editRecipe})(Recipe)
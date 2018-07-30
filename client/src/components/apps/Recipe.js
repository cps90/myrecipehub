import React from 'react';
import { connect } from 'react-redux'
import Ingredients from './Ingredients'

class Recipe extends React.Component {
    constructor(){
        super();
        this.state={isToggled:false}
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }

    render() {
        return (
            <div>
            <button onClick={this.toggle} className="recipe-toggle">{this.props.name}</button>
                {this.state.isToggled 
                    ? 
                        <div className="recipe"> 
                            <p>Ingredients:</p>
                            <p className="recipe-info">{this.props.ingredients.map(info => 
                                <Ingredients 
                                    key={info._id} 
                                    id={info._id} 
                                    name={info.name}
                                    amount={info.amount} 
                                    unit={info.unit}
                                    />
                                )} </p>
                            <p>Directions: </p>
                            <p className="recipe-info">{this.props.directions}</p>
                        </div>
                    : null 
                }
            </div>
        )
    }
}

export default connect(state => state)(Recipe)
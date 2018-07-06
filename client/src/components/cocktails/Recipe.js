import React from 'react';
import { connect } from 'react-redux';
import Ingredients from './Ingredients';

class Recipe extends React.Component{
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
        return(
            <div>
                <button onClick={ this.toggle } className="toggleButton">{ this.props.name }</button>
                    {this.state.isToggled
                        ?
                        <div>
                            <p>Recipe Title:{ this.props.name } </p>
                            <p> Directions:{ this.props.directions }</p>
                            <p> Directory:{ this.props.directory }</p>
                             Amount, Unit, Ingredient:
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

export default connect(state => state)(Recipe)
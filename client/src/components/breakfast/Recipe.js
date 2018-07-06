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
                <button onClick={this.toggle}>{this.props.name}</button>
                    {this.state.isToggled
                        ?
                            <div>
                                <p> {this.props.name} </p>
                                <p>{ this.props.directions }</p>
                                <p>{ this.props.directory }</p>
                                <p>{ this.props.imgURL }</p>
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
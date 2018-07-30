import React from 'react'
import { connect } from 'react-redux'

class Ingredients extends React.Component {
    render() {
        return (
            <div>
                <p>  {this.props.name}, {this.props.amount} {this.props.unit} </p> 
            </div>
        )
    }
}

export default connect(state => state)(Ingredients)
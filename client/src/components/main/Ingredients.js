import React from 'react'
import { connect } from 'react-redux'

class Ingredients extends React.Component {
    render() {
        return (
            <div>
                <p>  { this.props.amount }, { this.props.unit }, {this.props.ingredient} </p>
            </div>
        )
    }
}

export default connect(state => state)(Ingredients)
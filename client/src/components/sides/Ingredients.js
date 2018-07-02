import React from 'react'
import { connect } from 'react-redux'

class Ingredients extends React.Component {
    render() {
        return (
            <div>
                <p>{ this.props.ingredient }</p>
                <p>{ this.props.amount }</p>
                <p>{ this.props.unit }</p>
            </div>
        )
    }
}

export default connect(state => state)(Ingredients)
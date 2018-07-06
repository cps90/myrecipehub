import React from 'react'
import { connect } from 'react-redux'

class Ingredients extends React.Component {

    render() { 
        return(
            <div>   
                <p> {this.props.amount}, {this.props.unit}, {this.props.name}</p>
            </div>
        )
    }
}

export default connect(state => state)(Ingredients)
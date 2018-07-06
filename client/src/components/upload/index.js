import React from 'react'
import ImageUploader from 'react-images-uploader'
import { connect } from 'react-redux'

class Upload extends React.Component {
    render() {
        return (
            <ImageUploader url="http://localhost:5050/recipe"
            optimisticPreviews
             />
        )
    }
}

export default connect(null)(Upload)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [
        {
            name: {
                type: String,
                required: true
            },
            amount: {
                type: String,
                required: true
            },
            unit: {
                type: String,
                required: true
            }
        }
    ],
    directions: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
    },
    directory: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Recipe", recipeSchema)
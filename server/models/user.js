const mongoose = require("mongoose")
const Schema = mongoose.Schema
// const bcrypt = require('bcrypt')


const userSchema = new Schema({
    name: '',
    username: {
        type: String, 
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
})

// userSchema.pre("save", function (next) {  
//     var user = this;
//     if (!user.isModified("password")) return next();
//     bcrypt.hash(user.password, 10, (err, hash) => {
//         if (err) return next(err);
//         user.password = hash;
//         next();
//     });
// });

module.exports = mongoose.model("User", userSchema)
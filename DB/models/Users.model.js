const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    user_id: {
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = model("users", UserSchema);
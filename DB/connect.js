const {Mongoose, default: mongoose} = require("mongoose");
require("dotenv").config();


function connectToMongo(){
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log("MongoDB connected!");
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = {connectToMongo};

const UserSchema = require("../DB/models/Users.model.js")


const commandStart = (ctx) => {
    UserSchema.find().then(data => {
        if(data.user_id == ctx.from.id){
            UserSchema.create({
                first_name: ctx.from.first_name,
                username: ctx.from.username,
                user_id: ctx.from.id
            })
            ctx.reply("Hi there 👋", 
            "welcome to search Images bot", "How can i help you today, please write ✍️ what image do you want 🖼")
        }
        else{
            ctx.reply("Hi there 👋" +  "How can i help you today")
        }
    }).catch(err => {
        console.log(err)
    })
} 

module.exports = commandStart;
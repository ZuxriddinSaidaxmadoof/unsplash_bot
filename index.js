const {Telegraf} = require("telegraf")
const {connectToMongo} = require("./DB/connect.js")
const start = require("./commands/start.js")
const fetch = require("./commands/fetch")

// dotenv // config //
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);
connectToMongo()

bot.start(ctx => {
    start(ctx);
})
bot.on("message", async(ctx) => {
    await fetch( ctx.message.text, ctx)
    
})


bot.launch();

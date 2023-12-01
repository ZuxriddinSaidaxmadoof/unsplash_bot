const fetch = require("node-fetch")
const {createApi} = require("unsplash-js")
require("dotenv").config();


const fetch_data = async (search = "nature", ctx) => {
    try{
        let gifId;
        ctx.sendSticker("https://i.gifer.com/XVo6.gif")
        .then(data => gifId = data.message_id)

        const unsplash = createApi({
            accessKey: process.env.UNSPLASH_KEY,
            fetch: fetch
          });

          const random_page = Math.floor(Math.random() *10);
          const random_item = Math.floor(Math.random() *10);
    
          unsplash.search.getPhotos({
            query: search,
            page: random_page,
            perPage: 10,
            orientation: 'portrait'
          }).then(async result => {
            if(!result.response.results[random_item]?.urls.full){
              await ctx.telegram.deleteMessage(ctx.chat.id, gifId)
                ctx.reply("Not found 👀, please try again");
            }else{
                await ctx.telegram.deleteMessage(ctx.chat.id, gifId)
                const img = result.response.results[random_item].urls.full;
                await ctx.sendPhoto(img);
            }
          });
    }catch(err) {
        console.log(err);
    }
}

module.exports = fetch_data;
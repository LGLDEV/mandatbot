const { Telegraf, Scenes, session } = require("telegraf");
const idEWizard = require("./wizards/res");
const main = require("./markup/main");


const stage = new Scenes.Stage([idEWizard])
const bot = new Telegraf('6350463153:AAGF7l5L8uIPACwQqUAfQ1HaZX9E8v3-P0E');
bot.use(session())
bot.use(stage.middleware())


bot.start(async ctx => {
    await ctx.replyWithHTML("<b>Assalomu Aleykum</b>", {...main});
})


bot.action('results', async ctx => {
    await ctx.deleteMessage(ctx.callbackQuery.message.message_id)
    await ctx.replyWithHTML("<b>Id yingizni yuboring</b>")
    return ctx.scene.enter('getId')
})


bot.launch().then("Bot running")
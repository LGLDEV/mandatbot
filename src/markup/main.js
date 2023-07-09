const { Markup } = require("telegraf")

module.exports =  Markup.inlineKeyboard( [
    Markup.button.callback('🗒 Natijalar', 'results')
])
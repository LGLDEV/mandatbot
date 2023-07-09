const {Composer, Scenes} = require('telegraf');
const { short } = require('../api/api');

const getId = new Composer();



getId.on('text', async ctx => {
    const data = await short(ctx.message.text)
    await ctx.replyWithHTML(`<code>ID RAQAM: ${data.id}\nF.I.SH: ${data.name}\nInsitut: ${data.univer}\nYo'nalish: ${data.faculty}\nO'qish tili: ${data.lang}\nO'qish turi: ${data.type}\nTo'plangan ball: ${data.ball}</code>`)
    return ctx.scene.leave();
})

const idEWizard = new Scenes.WizardScene('getId', getId)

module.exports = idEWizard;
const Discord = require('discord.js');

bot.on('message', function (message) {
    if(message.content === '!ping') {

        message.reply('pong')
    }
});
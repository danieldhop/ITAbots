require('dotenv').config();
var Discord = require('discord.js');
var logger = require('winston');

const bot = new Discord.Client();

require('./util/eventLoader')(bot);

// bot.on('ready', () => {
//     logger.info("I'm logged");
// });


var prefix = '!';

// bot.on('message', (message) => {

//     let args = message.content.split(' ').slice(1);
//     var argresult = args.join(' ');

//     if(!message.content.startsWith(prefix)) return;
//     if(message.author.bot) return;

    

// });

bot.login(process.env.BOT_TOKEN);
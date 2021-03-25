const Discord = require('discord.js');
const bot = new Discord.Client();
const { prefix, token } = require('./config.json');
const TOKEN = token;
const request = require('request');

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.once('ready', () => {
	console.log('Ready!');
});

bot.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 's') {
		message.channel.send('Pong.');
    phrase = args.join(' ');
    mbUrl = 'http://tts.cyzon.us/tts?text=' + phrase;

    request(mbUrl, function(err, res, body) {
        console.log(body);
    });
    console.log(mbUrl);
  } else if (command === 'help') {
		message.channel.send('');
	}
});
bot.login(TOKEN);

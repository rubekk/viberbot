'use strict';

require("dotenv").config();
const https = require('https');
const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;

const port = process.env.PORT || 8080;
const authToken = process.env.AUTH_KEY;
const webhookUrl = process.env.WEBHOOK_URL;

const bot = new ViberBot({
	authToken: authToken,
	name: "EchoBot",
	avatar: "https://viber.com/avatar.jpg"
});

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
	response.send(message);
});

// const httpsOptions = {
// 	key: ...,
// 	cert: ...,
// 	ca: ...
// }; // Trusted SSL certification (not self-signed).

https.createServer(bot.middleware()).listen(port, () => bot.setWebhook(webhookUrl));

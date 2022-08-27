const chalk = require("chalk")
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
module.exports = {
  name: "say",
  aliases: ["send"],
  description: "Send a message as a bot",
  execute: async(message, client, args) => {
 
    

        message.delete()

        if (message.author.bot) return;
        const SayMessage = message.content.slice(4).trim();
        message.channel.send("" + SayMessage + "" )

    }
}
 
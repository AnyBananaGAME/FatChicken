const { MessageEmbed } = require("discord.js");
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
module.exports = {
  name: "suggest",
  aliases: ["sgs"],
  description: "Suggest a fewture for the bot, or a change for discord guild",
  execute: async(message, client, args) => {
 
    if(message.channel.id !== "1014482651014512691"){
        message.channel.send({content: "This command can only be executed in bot commands channel", ephemeral: true})
    }

    }
}
 
const chalk = require("chalk");
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const config = require('../../../resources/configs/config.json')
const nps = require('../../../resources/configs/nps.json')

module.exports = {
    name: "stop",
    aliases: ["kill"],
    description: "Shuts down the bot",
    execute: async (message, client, args) => {
        if (!config.dev.includes(message.author.id)){
            return message.channel.send(nps.dev);
        }

        await message.channel.send(`${client.user.tag} is being killed`)
        client.destroy();
        await console.log(chalk.gray('[') + chalk.red('!') + chalk.gray(']') +  chalk.white(` ${client.user.tag} has been shut down by ${message.author.tag}`))
  
    }
}
const chalk = require("chalk");
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const config = require('../../../resources/configs/config.json')
const nps = require('../../../resources/configs/nps.json')

module.exports = {
    name: "stop",
    aliases: ["kill"],
    description: "Shuts down the bot",
    execute: async (message, client, args) => {
        try{
        if (!config.dev.includes(message.author.id)){
            return message.channel.send(nps.dev);
        }

        await message.channel.send(`${client.user.tag} is being killed`)
        client.destroy();
        await console.log(chalk.gray('[') + chalk.red('!') + chalk.gray(']') +  chalk.white(` ${client.user.tag} has been shut down by ${message.author.tag}`))
  



    }catch(error){
        const channel = client.channels.cache.get('1015523931274354770')
        const ErrorEmbed = new MessageEmbed()
            .setColor(config.color)
            .setDescription(`------------Date------------\n **${Date()}**\n\n------------Error------------\n **${error}**\n\n------------Caused by------------\n**${message.author.tag} ( ${message.author.id} **)`)
        await channel.send({embeds: [ErrorEmbed]})


    }


    }
}
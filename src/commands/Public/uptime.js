const { MessageEmbed } = require("discord.js");
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
module.exports = {
  name: "uptime",
  aliases: ["up"],
  description: "Check the server's information",
  execute: async(message, client, args) => {
    try{

    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    const RESR = new MessageEmbed()
    .setColor(config.color)
    .setDescription(`Uptime of ${client.user.tag}\n\n[Seconds: ${seconds}]\n[Minutes: ${minutes}]\n[Hours: ${hours}]\n[Days: ${days}]`)
    message.channel.send({embeds: [RESR]})


    }catch(error){
      const channel = client.channels.cache.get('1015523931274354770')
      const ErrorEmbed = new MessageEmbed()
          .setColor(config.color)
          .setDescription(`------------Date------------\n **${Date()}**\n\n------------Error------------\n **${error}**\n\n------------Caused by------------\n**${message.author.tag} ( ${message.author.id} **)`)
      await channel.send({embeds: [ErrorEmbed]})
    }

    }
}
 
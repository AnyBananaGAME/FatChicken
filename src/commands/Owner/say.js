const chalk = require("chalk")
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
module.exports = {
  name: "say",
  aliases: ["send"],
  description: "Send a message as a bot",
  execute: async(message, client, args) => {
    try{
    

        message.delete()

        if (message.author.bot) return;
        const SayMessage = message.content.slice(4).trim();
        message.channel.send("" + SayMessage + "" )

    }catch(error){
      const channel = client.channels.cache.get('1015523931274354770')
      const ErrorEmbed = new MessageEmbed()
          .setColor(config.color)
          .setDescription(`------------Date------------\n **${Date()}**\n\n------------Error------------\n **${error}**\n\n------------Caused by------------\n**${message.author.tag} ( ${message.author.id} **)`)
      await channel.send({embeds: [ErrorEmbed]})

    }


    }
}
 
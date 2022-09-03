const chalk = require("chalk")
const fs = require("fs");
const config = require('../../../resources/configs/config.json')
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "generate",
  aliases: ["gen"],
  description: "Send a message as a bot",
  execute: async(message, client, args) => {
    try{
    
        if(message.author.id != config.owner) return;

        const filecontents = 'const chalk = require("chalk")\nconst fs = require("fs")\nconst config = require("../../../resources/configs/config.json")\nmodule.exports = {\n  name: "' + args[1]+'",\n  aliases: ["'+args[1]+'"],\n  description: "This command skeleton was generated",\n  execute: async(message, client, args) => {\n    try{\n\n\n\n    }catch(error){\n      const channel = client.channels.cache.get("1015523931274354770")\n      const ErrorEmbed = new MessageEmbed()\n          .setColor(config.color)\n          .setDescription(`------------Date------------\n **${Date()}**\n\n------------Error------------\n **${error}**\n\n------------Caused by------------\n**${message.author.tag} ( ${message.author.id} **)`)\n       await channel.send({embeds: [ErrorEmbed]})\n }}} '
        fs.writeFile(`${args[0]}.js`, `${filecontents}`, function (err) {
            if (err) return console.log(err);
            console.log(`${args[0]} >>> ${args[1]}`);
          });





    }catch(error){
      const channel = client.channels.cache.get('1015523931274354770')
      const ErrorEmbed = new MessageEmbed()
          .setColor(config.color)
          .setDescription(`------------Date------------\n **${Date()}**\n\n------------Error------------\n **${error}**\n\n------------Caused by------------\n**${message.author.tag} ( ${message.author.id} **)`)
      await channel.send({embeds: [ErrorEmbed]})

    }


    }
}
 





const Fs = require("fs");
const Discord = require('discord.js');
const config = require("../../../resources/configs/config.json")
const { MessageEmbed } = require("discord.js")
const { promisify } = require('util');
const exec = promisify(require('child_process').exec)


module.exports = {
    name: "updates",
    aliases: ["upd"],
    description: "Eval a command",
    execute: async (message, client, args) => {

        try {
            if(message.author.bot) return;

              const Output = await exec('npx npm-check-updates')
            
            const OutputEmbed = new MessageEmbed()
            .setColor(config.color)
            .setDescription(`${Output.stdout.trim()}`)
            message.channel.send({embeds: [OutputEmbed]})
    
            









        }catch(error){
            const channel = client.channels.cache.get('1015523931274354770')
            const ErrorEmbed = new MessageEmbed()
                .setColor(config.color)
                .setDescription(`------------Date------------\n **${Date()}**\n\n------------Error------------\n **${error}**\n\n------------Caused by------------\n**${message.author.tag} ( ${message.author.id} **)`)
            await channel.send({embeds: [ErrorEmbed]})
      
        }


    }
          
}
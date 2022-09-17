const chalk = require("chalk")
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
const nps = require('../../../resources/configs/nps.json')

const db = require("quick.db");
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "farm",
  aliases: ["farms"],
  description: "Check your balance",
  execute: async(message, client, args) => {
    try{
    const Mentioned = message.mentions.members.first();
    if(Mentioned){
        const id = Mentioned.id;

        let potatos = db.fetch(`potato=${id}`);
        let carrots = db.fetch(`carrot=${id}`);
        let beetroot = db.fetch(`beetroot=${id}`);
        let apples = db.fetch(`apple=${id}`);

        if(potatos === null){
            const NotStartedEmbed = new MessageEmbed()
            .setColor(config.color)
            .setDescription(`Oh noe! ${message.author}\n\nThat user does not have a profile :(`)
        message.channel.send({embeds: [NotStartedEmbed]})
        return;
        }

        const MentionedFarmEmbed = new MessageEmbed()
        .setColor(config.color)
        .setDescription(`${Mentioned.user}'s Farm \n\nPotatos: ${potatos}\nCarrots: ${carrots}\nBeetroot: ${beetroot}\nApples: ${apples}`)
        message.channel.send({embeds: [MentionedFarmEmbed]})
    } 
      if(!Mentioned){ 
         const id = message.author.id;
         let potatos = db.fetch(`potato=${id}`);
         let carrots = db.fetch(`carrot=${id}`);
         let beetroot = db.fetch(`beetroot=${id}`);
         let apples = db.fetch(`apple=${id}`);

        if(potatos === null){
            const NotStartedEmbed = new MessageEmbed()
            .setColor(config.color)
            .setDescription(`Greetings! ${message.author}\n\nWe've noticed that you are new!\nPlease start using ${config.prefix}start, to get a short tutorial about this!\nThank you! -FatOtter`)
            message.channel.send({embeds: [NotStartedEmbed]})
        return;
        }
        const NotMentionedFarmEmbed = new MessageEmbed()
        .setColor(config.color)
        .setDescription(`${message.author}'s Farm \n\nPotatos: ${potatos}\nCarrots: ${carrots}\nBeetroot: ${beetroot}\nApples: ${apples}`)
        message.channel.send({embeds: [NotMentionedFarmEmbed]})
    
       }
        








    }catch(error){
        const channel = client.channels.cache.get('1015523931274354770')
        const ErrorEmbed = new MessageEmbed()
            .setColor(config.color)
            .setDescription(`------------Date------------\n **${Date()}**\n\n------------Error------------\n **${error}**\n\n------------Caused by------------\n**${message.author.tag} ( ${message.author.id} **)`)
        await channel.send({embeds: [ErrorEmbed]})


    }


    }
}
 
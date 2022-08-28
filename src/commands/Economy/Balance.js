const chalk = require("chalk")
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
const nps = require('../../../resources/configs/nps.json')

const db = require("quick.db");
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "bal",
  aliases: ["balance"],
  description: "Check your balance",
  execute: async(message, client, args) => {

    const Mentioned = message.mentions.members.first();
    if(Mentioned){
        const id = Mentioned.id;

        let money = db.fetch(`money=${id}`);

        if(money === null){
            const NotStartedEmbed = new MessageEmbed()
            .setColor(config.color)
            .setDescription(`Oh noe! ${message.author}\n\nThat user does not have a profile :(`)
        message.channel.send({embeds: [NotStartedEmbed]})
        return;
        }

        const MentionedBalanceEmbed = new MessageEmbed()
        .setColor(config.color)
        .setDescription(`Balance of ${Mentioned.user}\n\nBalance: ${money}`)
        message.channel.send({embeds: [MentionedBalanceEmbed]})
    }else {
        const id = message.author.id;

        let money = db.fetch(`money=${id}`);

        if(money === null){
            const NotStartedEmbed = new MessageEmbed()
            .setColor(config.color)
            .setDescription(`Greetings! ${message.author}\n\nWe've noticed that you are new!\nPlease start using ${config.prefix}start, to get a short tutorial about this!\nThank you! -FatOtter`)
        message.channel.send({embeds: [NotStartedEmbed]})
        return;
        }
        const MentionedBalanceEmbed = new MessageEmbed()
        .setColor(config.color)
        .setDescription(`Balance of ${message.author}\n\nBalance: ${money}`)
        message.channel.send({embeds: [MentionedBalanceEmbed]})
        message.channel.send({embeds: [MentionedBalanceEmbed]})
    
       }
        












    }
}
 
const chalk = require("chalk")
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
const nps = require('../../../resources/configs/nps.json')

const db = require("quick.db");
const { MessageEmbed, Message } = require("discord.js")


module.exports = {
  name: "pay",
  aliases: ["pays"],
  description: "Create an account",
  execute: async(message, client, args) => {
    const id = message.author.id;
    let money = db.fetch(`money=${id}`);
    
    if(money === null){
        const NotStartedEmbed = new MessageEmbed()
        .setColor(config.color)
        .setDescription(`Greetings! ${message.author}\n\nWe've noticed that you are new!\nPlease start using ${config.prefix}start, to get a short tutorial about this!\nThank you! -FatOtter`)
    message.channel.send({embeds: [NotStartedEmbed]})
    return;
    }


    
    

    const Mentioned = message.mentions.members.first()
    if(!Mentioned) return message.channel.send(nps.pleasemention)
    const amount = args[1]

    if(amount > money) return message.channel.send(nps.notenoughmoney);
    if(amount <= 0) return message.channel.send(nps.notavalidnumber);
    if(isNaN(amount)) return message.channel.send(nps.NaNcf);



    db.add(`money=${Mentioned.user.id}`, Number(amount))
    db.subtract(`money=${message.author.id}`, Number(amount))

    const DaEmbed = new MessageEmbed()
    .setColor(config.color)
    .setDescription(`You have paid ${Mentioned.user} ${amount}`)
    message.channel.send({embeds: [DaEmbed]})






    }
}
 
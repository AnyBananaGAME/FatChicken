const chalk = require("chalk")
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
const nps = require('../../../resources/configs/nps.json')
const ms = require("parse-ms")
const db = require('quick.db');
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "coinflip",
  aliases: ["cf"],
  description: "Coinflip money",
  execute: async(message, client, args) => {
    try{

    const id = message.author.id;
    let money = db.fetch(`money=${id}`);
    let cfcd = db.fetch(`cfcd=${id}`);
    if(cfcd === null){
        db.set(`cfcd=${id}`, 0)
    }
    let timeout = 1000 * 60 * 1;
    if(money === null){
        const NotStartedEmbed = new MessageEmbed()
        .setColor(config.color)
        .setDescription(`Greetings! ${message.author}\n\nWe've noticed that you are new!\nPlease start using ${config.prefix}start, to get a short tutorial about this!\nThank you! -FatOtter`)
    message.channel.send({embeds: [NotStartedEmbed]})
    return;
    }


    const cfmoney = args[0]
    if(cfmoney > money) return message.channel.send(nps.notenoughcfmoney);
    if(cfmoney <= 0) return message.channel.send(nps.notavalidnumber);
    if(isNaN(cfmoney)) return message.channel.send(nps.NaNcf);

    
    if(cfcd !== null && timeout - (Date.now() - cfcd) > 0){
        let time = ms(timeout - (Date.now() - cfcd))
        const cfcdc = new MessageEmbed()
        .setColor(config.color)
        .setDescription(`${nps.cfcd}${time.minutes} minutes and ${time.seconds} seconds`)
        message.channel.send({embeds: [cfcdc]})
        return;
      } else {
        const Numba = Math.floor(Math.random() * 2) + 1;
        console.log(Numba)
        if(Numba === 2){
            db.add(`money=${id}`, Number(cfmoney) )
            db.set(`cfcd=${id}`, Date.now())
            const winembed = new MessageEmbed()
            .setDescription(`Woah! ${message.author}!\n\nYou've just won ${cfmoney}`)
            .setColor(config.color)
            message.channel.send({embeds: [winembed]})
            return;
        }
        if(Numba === 1){
            const newmoney = Math.floor(money - cfmoney)
            db.set(`money=${id}`, Number(newmoney))
            db.set(`cfcd=${id}`, Date.now())

            const cfcdc = new MessageEmbed()
            .setColor(config.color)
            .setDescription(`Oh no! ${message.author}\n\n You have just lost ${cfmoney} money`)
            message.channel.send({embeds: [cfcdc]})
            return;
        }
        
    

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
 
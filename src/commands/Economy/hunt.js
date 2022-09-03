const chalk = require("chalk")
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
const nps = require('../../../resources/configs/nps.json')
const ms = require("parse-ms")
const db = require('quick.db');
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "hunt",
  aliases: ["ht"],
  description: "Hunt for rewards",
  execute: async(message, client, args) => {

    try{


    const id = message.author.id;
    const huntcd = db.fetch(`huntcd=${id}`);
    const money = db.fetch(`money=${id}`)
    if(huntcd === null){
        db.set(`huntcd=${id}`, 0)
    }
    let timeout = 1000 * 60 * 60;
    if(money === null){
        const NotStartedEmbed = new MessageEmbed()
        .setColor(config.color)
        .setDescription(`Greetings! ${message.author}\n\nWe've noticed that you are new!\nPlease start using ${config.prefix}start, to get a short tutorial about this!\nThank you! -FatOtter`)
    message.channel.send({embeds: [NotStartedEmbed]})

    return;
    }
    
    if(huntcd !== null && timeout - (Date.now() - huntcd) > 0){
        let time = ms(timeout - (Date.now() - huntcd))
        const huntcde = new MessageEmbed()
        .setColor(config.color)
        .setDescription(`You can not hunt for another ${time.minutes} minutes and ${time.seconds} seconds`)
        message.channel.send({embeds: [huntcde]})
        db.set(`huntcd=${id}`, Date.now())


        return;
      } else {
        const Numba = Math.floor(Math.random() * 5) + 1;
        if(Numba == "1"){
            const Numa1Embed = new MessageEmbed()
                .setDescription(`Your sword broke while u were fighting a bear.\nYou got rescued by a hunder, that was a close one. \n And you will have to buy a new sword :(\n - $${50}`)
                message.channel.send({embeds: [Numa1Embed]})
                db.subtract(`money=${message.author.id}`, 50)
                db.set(`huntcd=${id}`, Date.now())


                return;
        }
        if(Numba == "2"){
            const amm = Math.floor(Math.random() * 100) + 1;
            const Numa1Embed = new MessageEmbed()
                .setDescription(`You met a random traveler on your way back, and he gave you \n + $`+amm)
                db.add(`money=${message.author.id}`, Number(amm))
                db.set(`huntcd=${id}`, Date.now())

                message.channel.send({embeds: [Numa1Embed]})
                return;
        } 
        if(Numba == "3"){
            const amm = Math.floor(Math.random() * 120) + 1;
            const Numa1Embed = new MessageEmbed()
                .setDescription(`You got fined for killing an indangered specie \n - $`+amm)
                db.set(`huntcd=${id}`, Date.now())

                db.subtract(`money=${message.author.id}`, Number(amm))
                message.channel.send({embeds: [Numa1Embed]})
                return;
        } 
        if(Numba == "4"){
            const amm = Math.floor(Math.random() * 100) + 1;
            const Numa1Embed = new MessageEmbed()
                .setDescription(`You freed a random trapped bear and won a lottery on the wa home! \n + $`+amm)
                message.channel.send({embeds: [Numa1Embed]})
                    db.set(`huntcd=${id}`, Date.now())

                db.add(`money=${message.author.id}`, Number(amm))
                return;
        }
        if(Numba == "5"){
            const amm = Math.floor(Math.random() * 100) + 1;
            const Numa1Embed = new MessageEmbed()
                .setDescription(`You felt sick so you decided to stay at home! \n + $`+`0`)
                message.channel.send({embeds: [Numa1Embed]})
                db.set(`huntcd=${id}`, Date.now())

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
 
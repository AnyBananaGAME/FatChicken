const chalk = require("chalk")
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
const nps = require('../../../resources/configs/nps.json')
const ms = require("parse-ms")
const db = require('quick.db');
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js')


const status = false;
module.exports = {
  name: "slots",
  aliases: ["sls"],
  description: "Coinflip money",
  execute: async(message, client, args) => {
    try{
        if(status === false){
            const DisabledEmbed = new MessageEmbed()
            .setColor(config.color)
            .setDescription('Sorry' + `${message.author}\nIt seems this command was disabled by a Developer\nIf you think this is an issue please contact a DEV`)
            message.channel.send({embeds: [DisabledEmbed]})
            return;
        }
    const id = message.author.id;
    let money = db.fetch(`money=${id}`);
    if(money === null){
        const NotStartedEmbed = new MessageEmbed()
        .setColor(config.color)
        .setDescription(`Greetings! ${message.author}\n\nWe've noticed that you are new!\nPlease start using ${config.prefix}start, to get a short tutorial about this!\nThank you! -FatOtter`)
    message.channel.send({embeds: [NotStartedEmbed]})
    return;
    }
    let slotscd = db.fetch(`slotscd=${id}`);
    if(slotscd === null){
        db.set(`slotscd=${id}`, 0)
    }
 

    let slots = ["😶", "😇", "😜"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    const moneh = args[0]

    if(moneh > money) return message.channel.send(nps.notenoughmoney);
    if(moneh <= 0) return message.channel.send(nps.notavalidnumber);
    if(isNaN(moneh)) return message.channel.send(nps.NaNcf);

    if (slots[result1] === slots[result2] && slots[result1] === slots[result3]) {
        let S3 = new MessageEmbed()
       .setTitle('You won x3 your amount!')
       .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
       .setColor(config.color)
    message.channel.send({embeds: [S3]});
    db.set(`slotscd=${id}`, Date.now())
    const newMonei = Math.floor(moneh * 3)
    db.add(`money=${id}`, Number(newMonei))
    }else {
        let S0 = new MessageEmbed()
        .setTitle('You lost')
        .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
        .setColor('RED')
     message.channel.send({embeds: [S0]})
     db.set(`slotscd=${id}`, Date.now())
     db.subtract(`money=${id}`, Number(moneh))
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
 
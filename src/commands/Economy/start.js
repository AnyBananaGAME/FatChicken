const chalk = require("chalk")
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
const nps = require('../../../resources/configs/nps.json')

const db = require("quick.db");
const { MessageEmbed, Message } = require("discord.js")


module.exports = {
  name: "start",
  aliases: ["create"],
  description: "Create an account",
  execute: async(message, client, args) => {

    try{

    const id = message.author.id;
    let money = db.fetch(`money=${id}`);
    let potatos = db.fetch(`potato=${id}`);
    let carrots = db.fetch(`carrot=${id}`);
    let beetroot = db.fetch(`beetroot=${id}`);
    let apples = db.fetch(`apple=${id}`);

    if(money !== null) return message.channel.send(nps.alreadystarted);


    if (money === null) {
        db.set(`money=${id}`, 100)
        db.set(`potato=${id}`, 0)
        db.set(`carrot=${id}`, 0)
        db.set(`beetroot=${id}`, 0)
        db.set(`apple=${id}`, 0)

    const StartedEmbed =  new MessageEmbed()
    .setColor(config.color)
    .setDescription(`Congrats! ${message.author}\n\nYou have just started your profile!\nYou get 200*level money every time you levelup!\n`)
    message.channel.send({embeds: [StartedEmbed]})
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
 
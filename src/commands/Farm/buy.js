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
    try{
    const id = message.author.id;
    const a = args[0]

    if(a === "potato"){
        const cost = config.potatocost
    }
    if(a === "carrot"){
        const cost = config.carrotcost
    }
    if(a === "beetroot"){
        const cost = config.beetrootcost
    }
    if(a === "apple"){
        const cost = config.applecost
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
 
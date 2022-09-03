const chalk = require("chalk")
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
const nps = require('../../../resources/configs/nps.json')

const db = require("quick.db");
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "rank",
  aliases: ["level"],
  description: "Check your level and XP",
  execute: async(message, client, args) => {
    try{
    if(message.author.bot) return;
    low

    const id = message.author.id;
    let xp = db.fetch(`xp=${id}`);
    if(xp === null) xp = 0;
    let level = db.fetch(`level=${id}`);
    if(level === null){
        db.set(`level=${id}`, 1)
    }
    let xpreq = db.fetch(`xpreq=${id}`);
    if(xpreq === null) xpreq = 50;


    const RankEmbed = new MessageEmbed()
        .setColor(config.color)
        .setDescription(`${message.author.tag}\n\n Level = ${level}\n XP = ${xp}/${xpreq}`)
        .setFooter(`${nps.rankcmdfooter}`)
    message.channel.send({embeds: [RankEmbed]})
    }catch(error){
        const channel = client.channels.cache.get('1015523931274354770')
        const ErrorEmbed = new MessageEmbed()
            .setColor(config.color)
            .setDescription(`------------Date------------\n **${Date()}**\n\n------------Error------------\n **${error}**\n\n------------Caused by------------\n**${message.author.tag} ( ${message.author.id} **)`)
        await channel.send({embeds: [ErrorEmbed]})



    }
    }
}
 
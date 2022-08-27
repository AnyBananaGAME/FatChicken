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
 
 
    if(message.author.id !== config.owner) return message.channel.send('')
    

    const gid = message.guild.id;
    const id = message.author.id;
    let xp = db.fetch(`xp.${gid}.${id}`);
    if(xp === null) xp = 0;
    let level = db.fetch(`level.${gid}.${id}`);
    if(level === null) level = 0;
    let xpreq = db.fetch(`xpreq.${gid}.${id}`);
    if(xpreq === null) xpreq = 50;


    const RankEmbed = new MessageEmbed()
        .setColor(config.color)
        .setDescription(`${message.author.tag}\n\n Level = ${level}\n XP = ${xp}/${xpreq}`)
        .setFooter(`${nps.rankcmdfooter}`)
    message.channel.send({embeds: [RankEmbed]})
    }
}
 
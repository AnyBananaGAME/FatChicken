const config = require('../../resources/configs/config.json')
const db = require("quick.db")
const chalk = require("chalk")
const { MessageEmbed } = require("discord.js")
const ms = require("parse-ms")

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {

    const id = message.author.id;
  
  
    let xp = db.fetch(`xp=${id}`);
    if(xp === null) xp = 0;
    let level = db.fetch(`level=${id}`);
    if(level === null) level = 1;
    let xpreq = db.fetch(`xpreq=${id}`);
    if(xpreq === null) xpreq = 50;
    let xpcd = db.fetch(`xpcd=${id}`);
    if(xpcd === null) xpcd = 0;
    if(message.author.bot) return;

    let timeout = 1000 * 60 * 1;

    if(xpcd !== null && timeout - (Date.now() - xpcd) > 0){
            if(config.debug === "true"){
            let time = ms(timeout - (Date.now() - xpcd));
            const channel = client.channels.cache.get("1008397863518228480")

            const CDDEBUGEMBED = new MessageEmbed()
            .setColor(config.debugcolor)
            .setDescription(`DEBUG: CooldownERROR: ${time.seconds} seconds left.`)
            .setFooter(`${message.author.tag}  "ID: ${message.author.id}`)
            channel.send({embeds: [CDDEBUGEMBED]})
            return;
          }

    } else {
            const RandomXp = Math.floor(Math.random() * 20) + 1;
            if(config.debug === "true"){
                const channel = client.channels.cache.get("1008397863518228480")
                const Embed = new MessageEmbed()
                .setColor(config.debugcolor)
                .setDescription(`DEBUG: \n ${message.author.tag} received ${RandomXp} xp `)
                .setFooter(`${message.author.tag}  "ID: ${message.author.id}`)
                channel.send({embeds: [Embed]});
                db.set(`xp=${id}`, Number(xp + RandomXp))
                db.set(`xpcd=${id}`, Date.now())

            } else {
            db.set(`xp=${id}`, Number(xp + RandomXp))
            db.set(`xpcd=${id}`, Date.now())
            }
        }
    
    




        
    }
}
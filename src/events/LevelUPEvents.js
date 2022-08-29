const config = require('../../resources/configs/config.json')
const db = require("quick.db")
const chalk = require("chalk")
const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
      if(message.author.bot) return;

      const id = message.author.id;
       

      let money = db.fetch(`money=${id}`);
      let xp = db.fetch(`xp=${id}`);
      if(xp === null) xp = 0;
      let level = db.fetch(`level=${id}`);

      if(level === null){
        db.set(`level=${id}`, 1)
    }
          let xpreq = db.fetch(`xpreq=${id}`);
          if(xpreq === null) xpreq = 50;


          const newe = Math.floor(Number(xpreq*1.2))
          if(xp >= xpreq){
            if(money === null) {message.channel.send('We were not able to give you your level up reward cause you have not started in economy... :(')
          }
        db.set(`level=${id}`,Number(level + 1))
          db.set(`xp=${id}`, 0)
             db.set(`xpreq=${id}`, Number(newe))
             if(money !== null){
              let lava = db.fetch(`level=${id}`);
              const moneh = Math.floor(200 * lava)
              console.log(moneh)
              db.add(`money=${id}`, Number(moneh))
            }
        
        const LevelUPEmbed = new MessageEmbed()
        .setColor(config.color)
        .setDescription(`Woah! ${message.author} you just leveled up to level ${level + 1}`)
        message.channel.send({embeds: [LevelUPEmbed]})
        await console.log(chalk.gray('[') + chalk.green('.') + chalk.gray(']') +  chalk.white(` ${message.author.tag} just leveled up to ${level + 1}`))

      }




        
    }
}
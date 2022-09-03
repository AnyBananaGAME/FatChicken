const config = require('../../resources/configs/config.json')
const db = require("quick.db")
const chalk = require("chalk")
const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
      if(message.author.bot) return;

      const id = message.author.id;
       
      let level = db.fetch(`level=${id}`);





    if(level >= "10"){
        const guild  = message.channel.guild;
        var role = guild.roles.cache.find(r => r.name === 'Bamboo');
        message.authorroles.add(role);
        message.channel.send(`Congrats ${message.author}, you just received a ROLE! for reaching level 10`)
    }

        

    }
}
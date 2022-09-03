const config = require('../../resources/configs/config.json')
const db = require("quick.db")
const chalk = require("chalk")
const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
      try{
      if(message.author.bot) return;

      const id = message.author.id;
       
      let level = db.fetch(`level=${id}`);





    if(level >= "10"){
      
        const guild  = message.channel.guild;
        var role = guild.roles.cache.find(r => r.name === 'Bamboo');
        if(message.member.roles.cache.find(r => r.name === "Bamboo")) {
          return;
      }
      if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
        message.channel.send(`Congrats ${message.author}, you just received a ROLE! for reaching level 10`)
    }  
    
    
  }catch(error) {
    await  message.channel.send(`${error}`)
  }
        
 }
}
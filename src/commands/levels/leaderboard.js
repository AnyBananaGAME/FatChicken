const Discord = require('discord.js');
const config = require('../../../resources/configs/config.json')

const db = require('quick.db')
module.exports = {
    name: "levellb",
    aliases: ["llb"],
    description: "Leaderboard for levels",
    execute: async (message, client, args) => {
      try {
      if(message.author.bot) return;

      let level = db.all().filter(data => data.ID.startsWith(`level=`)).sort((a, b) => b.data - a.data)
    if(level === null){
        db.set(`level=${id}`, 1)
    }
      var finalLb = "";
      for (var i in level) {
        finalLb += `**${level.indexOf(level[i])+1}. ${client.users.cache.get(level[i].ID.split('=')[1]) ? client.users.cache.get(level[i].ID.split('=')[1]).tag : "Unknown User#0000"}** - ${level[i].data}\n`;
     
      }

      const embed = new Discord.MessageEmbed()
      .setAuthor(`Levels Leaderboard!`, message.guild.iconURL())
      .setColor("#7289da")
      .setDescription(`${finalLb}`)
      .setTimestamp()
      message.channel.send({embeds: [embed]});
    } catch(error){
      const channel = client.channels.cache.get('1015523931274354770')
      const ErrorEmbed = new MessageEmbed()
          .setColor(config.color)
          .setDescription(`------------Date------------\n **${Date()}**\n\n------------Error------------\n **${error}**\n\n------------Caused by------------\n**${message.author.tag} ( ${message.author.id} **)`)
      await channel.send({embeds: [ErrorEmbed]})


    }

    }
}
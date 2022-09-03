const Discord = require('discord.js');
const config = require('../../../resources/configs/config.json')

const db = require('quick.db')
module.exports = {
    name: "lb",
    description: "Leaderboard for money",
    execute: async (message, client, args) => {
      try{

      let money = db.all().filter(data => data.ID.startsWith(`money=`)).sort((a, b) => b.data - a.data)
      var finalLb = "";
      for (var i in money) {
        finalLb += `**${money.indexOf(money[i])+1}. ${client.users.cache.get(money[i].ID.split('=')[1]) ? client.users.cache.get(money[i].ID.split('=')[1]).tag : "Unknown User#0000"}** - ${money[i].data}\n`;
      }

      const embed = new Discord.MessageEmbed()
      .setAuthor(`Money Leaderboard!`, message.guild.iconURL())
      .setColor(config.color)
      .setDescription(`\n${finalLb}`)
      .setTimestamp()
      message.channel.send({embeds: [embed]});



    }catch(error){
      const channel = client.channels.cache.get('1015523931274354770')
      const ErrorEmbed = new MessageEmbed()
          .setColor(config.color)
          .setDescription(`------------Date------------\n **${Date()}**\n\n------------Error------------\n **${error}**\n\n------------Caused by------------\n**${message.author.tag} ( ${message.author.id} **)`)
      await channel.send({embeds: [ErrorEmbed]})


    }


    }
}
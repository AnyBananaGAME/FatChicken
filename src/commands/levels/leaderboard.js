const Discord = require('discord.js');
const config = require('../../../resources/configs/config.json')

const db = require('quick.db')
module.exports = {
    name: "levellb",
    description: "Leaderboard for levels",
    execute: async (message, client, args) => {

      let level = db.all().filter(data => data.ID.startsWith(`level=`)).sort((a, b) => b.data - a.data)
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


    }
}
const Discord = require('discord.js');
const config = require('../../../resources/configs/config.json')

const db = require('quick.db')
module.exports = {
    name: "lb",
    description: "Leaderboard for money",
    execute: async (message, client, args) => {

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


    }
}
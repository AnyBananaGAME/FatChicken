const { MessageEmbed } = require("discord.js");
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
module.exports = {
  name: "uptime",
  aliases: ["up"],
  description: "Check the server's information",
  execute: async(message, client, args) => {
 

    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    const RESR = new MessageEmbed()
    .setColor(config.color)
    .setDescription(`Uptime\n\nSeconds: ${seconds}\nMinutes: ${minutes}\nHours: ${hours}\nDays: ${days}`)
    message.channel.send({embeds: [RESR]})


    }
}
 
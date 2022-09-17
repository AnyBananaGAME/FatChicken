const { SlashCommandBuilder } = require('@discordjs/builders');
const chalk = require("chalk")
const config = require("../../../resources/configs/config.json")
const {MessageEmbed} = require("discord.js")
module.exports = {
    data: new SlashCommandBuilder()
        .setName('uptime')
        .setDescription('Check the uptime'),
    async execute(interaction, client) {
    
        

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
        .setDescription(`Uptime of ${client.user.tag}\n\n[Seconds: ${seconds}]\n[Minutes: ${minutes}]\n[Hours: ${hours}]\n[Days: ${days}]`)
        interaction.reply({embeds: [RESR]})
    


    }
}
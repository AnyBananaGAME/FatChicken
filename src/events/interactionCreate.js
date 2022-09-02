const chalk = require('chalk')
const Discord = require('discord.js');
const config = require("../../resources/configs/config.json")
const Fs = require("fs");

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {


        if (!interaction.isCommand()) return;

        const slashcommand = client.slashcommands.get(interaction.commandName);

        if (!slashcommand) return;
        try {
            await slashcommand.execute(interaction, client);
        } catch (error) {
            console.log(chalk.gray('[') + chalk.red('-') + chalk.gray(']') +  chalk.white(` ${console.error(error)}`))
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        
    }
    }
}
const { SlashCommandBuilder } = require('@discordjs/builders');
const chalk = require("chalk")
const config = require("../../../resources/configs/config.json")
module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stop the bot'),
    async execute(interaction, client) {
        if (interaction.user.id !== config.owner) {
            interaction.reply('You do not have permission to stop the bot')
            return;
        } else {

        interaction.reply(`${client.user.tag} is being killed`)
        await console.log(chalk.gray('[') + chalk.red('!') + chalk.gray(']') +  chalk.white(` ${client.user.tag} has been shut down by ${interaction.user.tag}`))
        client.destroy()

        }

    }
}
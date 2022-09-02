const fs = require('fs')
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require("../../resources/configs/config.json")
const chalk = require('chalk')

module.exports = (client) => {
    client.slashcommandhandler = async (slashcommandFolders, path) => {
        client.slashcommandArray = [];
        for (folder of slashcommandFolders) {
            console.log(fs.readdirSync(`../`) + " :=:")

            const slashcommandFiles = fs.readdirSync(`../src/slashcommands/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of slashcommandFiles) {
                const slashcommand = require(`../slashcommands/${folder}/${file}`)


                client.slashcommands.set(slashcommand.data.name, slashcommand);
                client.slashcommandArray.push(slashcommand.data.toJSON());
            }
        }



        const rest = new REST({ version: '9' }).setToken(config.token);

        (async () => {
            try {
                await console.log(chalk.gray('[') + chalk.red('!') + chalk.gray(']') +  chalk.white(` (/) commands are being reloaded`))

                await rest.put(
                    Routes.applicationGuildCommands("1012832791618130011", config.guildId),
                    { body: client.slashcommandArray },
                );

                await console.log(chalk.gray('[') + chalk.red('!') + chalk.gray(']') +  chalk.white(` (/) commands have been reloaded`))

                } catch (error) {
                    console.log(chalk.gray('[') + chalk.red('-') + chalk.gray(']') +  chalk.white(` ${console.error(error)}`))

            }
        })();





    }
}


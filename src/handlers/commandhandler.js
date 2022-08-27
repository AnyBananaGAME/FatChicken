const fs = require('fs');
const config = require("../../resources/configs/config.json")
const chalk = require('chalk')
module.exports = (client, message) => {
    client.commandhandler = async (commandFolders, path) => {
        for (folder of commandFolders) {
            const commandFiles = fs.readdirSync(`../src/commands/${folder}`)
            .filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../commands/${folder}/${file}`)
                client.commands.set(command.name, command);
            }
        }

            (async () => {
                try {
                    await console.log(chalk.gray('[') + chalk.red('!') + chalk.gray(']') +  chalk.white(` (prefix) commands are beeing reloaded`))
                    await console.log(chalk.gray('[') + chalk.green('+') + chalk.gray(']') +  chalk.white(` (prefix) commands are have been reloaded`))

                } catch (error) {
                    console.log(chalk.gray('[') + chalk.red('-') + chalk.gray(']') +  chalk.white(` ${console.error(error)}`))
    
                }
            })()


    
    }
}
const { MessageFlags } = require('discord.js');
const config = require('../../resources/configs/config.json')
module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (message.content.startsWith(config.prefix)) {
            const args = message.content.slice(config.prefix.length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();
            const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
            if (!command) return;
            if (command) {
              command.execute(message, client, args);
            }  
          
          }
        if(message.content.includes('<@1012832791618130011>')){
          message.channel.send('My prefix is `.`')
        }
          
        
    }
}
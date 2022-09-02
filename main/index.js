const fs = require("fs")
const {Client, Collection, Intents} = require('discord.js');

  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_PRESENCES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ],
  });

  const config = require('../resources/configs/config.json')
  const handlers = fs.readdirSync("../src/handlers")  .filter(file => file.endsWith('.js'));
  const eventFiles = fs.readdirSync("../src/events").filter(file => file.endsWith('.js'));
  const commandFolders = fs.readdirSync("../src/commands")
  const slashcommandFolders = fs.readdirSync("../src/slashcommands")
  
  client.commands = new Collection();
  client.slashcommands = new Collection();


  (async () => {
    for (const file of handlers) {
      require(`../src/handlers/${file}`)(client)
    }
  
    client.eventhandler(eventFiles, './src/events')
    client.commandhandler(commandFolders, `./src/commands`)
    client.slashcommandhandler(slashcommandFolders, `./src/slashcommands`)

    client.login(config.token)})();


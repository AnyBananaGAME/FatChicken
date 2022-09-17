const chalk = require("chalk")
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
const db = require("quick.db");
const { MessageEmbed } = require("discord.js")
const fs = require("fs")
const AsciiTable = require('ascii-table')
module.exports = {
  name: "commands",
  aliases: ["cmds"],
  description: "Check every command",
  execute: async(message, client, args) => {
 
    if(message.author.id !== config.owner) return message.channel.send(`${message.author}, you can not execute this command`)
    var table = new AsciiTable('Commands')


    const commandFolders = fs.readdirSync("../src/commands")
    for (folder of commandFolders) {
      const commandFiles = fs.readdirSync(`../src/commands/${folder}`)
      .filter(file => file.endsWith('.js'));
      for (const file of commandFiles) {
          const command = require(`../../commands/${folder}/${file}`)
          table
        .addRow("[(**Category:** " + folder + ")-",'(**Name:** ' + command.name + ")-", "(**Aliases:** "+command.aliases+ ")-","(**Description:** "+command.description + "\n)]")

          
          }
         
  }  
  const so = table.toString()
  const t1 = so.replaceAll('|', ' ');
  const t2 = t1.replaceAll('-', ' ');



  const CommandsEmbed = new MessageEmbed()
  .setColor(config.color)
  .setDescription(`${t2}`)
  message.channel.send({embeds: [CommandsEmbed]})
    




    }
}
 
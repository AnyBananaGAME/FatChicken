const { MessageEmbed } = require("discord.js");
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
module.exports = {
  name: "suggest",
  description: "Suggest a fewture for the bot, or a change for discord guild",
  execute: async(message, client, args) => {
 

    if(message.channel.id !== "1014482651014512691"){
    const msg = await message.channel.send(`You can only use this command in Bot-Commands channel! (3)`)
        await msg.edit(`You can only use this command in Bot-Commands channel! (3)`)

        await msg.edit(`You can only use this command in Bot-Commands channel! (2)`)
        await msg.edit(`You can only use this command in Bot-Commands channel! (2)`)

        await msg.edit(`You can only use this command in Bot-Commands channel! (1)`)
        await msg.delete()
    
    } else {
        message.react('<a:yes:1015214260613296138>')
        if(!args[0]){
            message.reply('(.suggest suggestion)')
            return;
        }
        const suggestion = message.content.slice(8).trim();
        let SuggestionEmbed = new MessageEmbed()
        .setColor(config.color)
        .addField('Suggested by', `${message.author.tag}`)
        .addField('Suggestion',`${suggestion}`) 
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        
    client.channels.cache.get('1013777232990310461').send({ embeds: [SuggestionEmbed]}).then((mesg) => {
        mesg.react('<a:yes:1015214260613296138>')
        mesg.react('<a:no:1015214299691634758>')
    })



    }

    }
}
 
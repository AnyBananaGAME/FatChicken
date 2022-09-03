const { MessageEmbed } = require("discord.js");
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
module.exports = {
  name: "serverinfo",
  aliases: ["si"],
  description: "Check the server's information",
  execute: async(message, client, args) => {
        try{
    
        const guild = message.channel.guild;
        const guildName = guild.name;
        const guildId = guild.id;
        const guildMembers = guild.members.cache.filter(member => !member.user.bot).size
        const guildBots = guild.members.cache.filter(member => member.user.bot).size
        const guildTotalMembers = Math.floor(guildMembers + guildBots);
        const guildOwner =  await guild.fetchOwner().catch(err => err)
        const guildOwnerInfo = guildOwner.user.tag;

    const ServerInfoEmbed = new MessageEmbed()
        .setThumbnail(guild.iconURL())
        .setColor(config.color)
        .setDescription(`${guildName} **||** ${guildId}\n\n **Guild Owner**: ${guildOwnerInfo}\n **Members**: ${guildMembers},\n**Bots**: ${guildBots},\n **Total**: ${Number(guildTotalMembers)}\n `)
    message.channel.send({embeds:[ServerInfoEmbed]})



        }catch(error){
            const channel = client.channels.cache.get('1015523931274354770')
            const ErrorEmbed = new MessageEmbed()
                .setColor(config.color)
                .setDescription(`------------Date------------\n **${Date()}**\n\n------------Error------------\n **${error}**\n\n------------Caused by------------\n**${message.author.tag} ( ${message.author.id} **)`)
            await channel.send({embeds: [ErrorEmbed]})
    
        }



    }
}
 
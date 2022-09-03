const { MessageEmbed } = require('discord.js')
const config = require('../../resources/configs/config.json')
module.exports = {
    name: 'shardError',
    async execute(error, client) {
        
        const channel = client.channels.cache.get('1015523931274354770')


        const ErrorEmbed = new MessageEmbed()
            .setColor(config.color)
            .setDescription(`${Date()}\n\n${error}`)
        await channel.send({embeds: [ErrorEmbed]})


          
        
    }
}
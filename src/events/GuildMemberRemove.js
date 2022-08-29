const config = require('../../resources/configs/config.json')
module.exports = {
    name: 'guildMemberRemove',
    async execute(member, client) {
        const channel = client.channels.cache.get('1012841305757462618')
        channel.send(`${member} has left the guild! :c`)
        if(member.user.bot) return;

        
    }
}

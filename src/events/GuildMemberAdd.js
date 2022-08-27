const config = require('../../resources/configs/config.json')
module.exports = {
    name: 'guildMemberAdd',
    async execute(member, client) {
        const channel = client.channels.cache.get('1012841305757462618')
        channel.send(`${member} has joined the guild!`)

        const guild = client.guilds.cache.get("1012831452305575956");
        var role = guild.roles.cache.find(r => r.name === 'Member');
        member.roles.add(role);
        
    }
}

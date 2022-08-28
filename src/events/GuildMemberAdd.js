const config = require('../../resources/configs/config.json')
module.exports = {
    name: 'guildMemberAdd',
    async execute(member, client) {
        const id = member.user.id;
        let xp = db.fetch(`xp=${id}`);
        if(xp === null) xp = 0;
        let level = db.fetch(`level=${id}`);
        if(level === null) level = 1;
        let xpreq = db.fetch(`xpreq=${id}`);
        if(xpreq === null) xpreq = 50;
        let xpcd = db.fetch(`xpcd=${id}`);
        if(xpcd === null) xpcd = 0;

        const channel = client.channels.cache.get('1012841305757462618')
        channel.send(`${member} has joined the guild!`)

        const guild = client.guilds.cache.get("1012831452305575956");
        var role = guild.roles.cache.find(r => r.name === 'Member');
        member.roles.add(role);
        
    }
}

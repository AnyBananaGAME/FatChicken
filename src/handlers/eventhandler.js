module.exports = (client)  => { 
    client.eventhandler = async (eventFiles, ) => {
        for (const file of eventFiles) {
            const event = require(`../events/${file}`)
            if(event.once){
                client.once(event.name, (...args) => event.execute(...args, client)) 
            } else {
                client.on(event.name, (...args) => event.execute(...args, client)) 
            }
          };
    }

}
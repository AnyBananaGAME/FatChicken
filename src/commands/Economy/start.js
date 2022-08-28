const chalk = require("chalk")
const Fs = require("fs");
const config = require('../../../resources/configs/config.json')
const nps = require('../../../resources/configs/nps.json')

const db = require("quick.db");
const { MessageEmbed, Message } = require("discord.js")


module.exports = {
  name: "start",
  aliases: ["create"],
  description: "Create an account",
  execute: async(message, client, args) => {

    const id = message.author.id;
    let money = db.fetch(`money=${id}`);
    if(money > -1) return message.channel.send(nps.alreadystarted);


    if (money === null) money = 100;
    const StartedEmbed =  new MessageEmbed()
    .setDescription(`Congrats! ${message.author}\n\nYou have just started your profile!\n\n\nYou get 200*level money every time you levelup!\n`)
    message.channel.send({embeds: [StartedEmbed]})
        




    }
}
 
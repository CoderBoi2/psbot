const Discord = require('discord.js')
module.exports.run = (client, message, args) => {
   let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
  
    const embed = new Discord.MessageEmbed()
 .setTitle("__Uptime:__")
 .setDescription(`${days}d ${hours}h ${minutes}m ${seconds}s`)
 .setColor("RANDOM")
 .setTimestamp()
  message.channel.send({embeds: [embed]})
}

exports.name = "uptime"
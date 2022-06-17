const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const commands = client.commands.map(command => command.name).join(", ")
    const embed = new Discord.MessageEmbed()
    .setTitle(`🛡 Bot Info 🛡`)
    .setDescription(`A Private bot for [Planet Supernova](https://discord.gg/ejaGyQsB)\n\nPing: ${client.ws.ping}\nTotal Commands: ${client.commands.size}\nDevelopers: **ExistedYear#5937 ** & **Gamer -#0527**\n Friends: **Good_Astrology#1290** & **zeroo#8819**`)
    .setColor("RANDOM")
    message.channel.send({embeds: [embed]})
}

exports.name = "bot info"
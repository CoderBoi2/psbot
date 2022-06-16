const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const commands = client.commands.map(command => command.name).join(", ")
    const embed = new Discord.MessageEmbed()
    .setTitle(`Total Commands: ${client.commands.size}`)
    .setDescription(' <a:PS_Sparkle_Animated:929961775221329950>**Information:**<a:PS_Sparkle_Animated:929961775221329950>\n\n ``-``botinfo\n ``-``help\n ``-``serverinfo\n\n<:ps_Staff:933961191678689300>**Moderation:**<:ps_Staff:933961191678689300>\n\n ``-``ban\n ``-``kick\n ``-``slowmode \n ``-``unban \n \n**Other:**\n\n``-``backroom\n ``-``hack\n ``-`` ping\n ``-`` revive\n ``-``say\n``-``uptime\n ``-`` gw\n ``-`` event')
    .setColor("RANDOM")
    message.channel.send({embeds: [embed]})
}

exports.name = "help"
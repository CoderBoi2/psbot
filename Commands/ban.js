const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if(!message.member.roles.cache.has("985298675087589427")) return message.reply("You can't use that!")
    let member = message.mentions.members.first()
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!member) return message.channel.send("You didn't mention a member!")
    if(!reason) reason = "No reason specified!"
    member.ban()
    .then(() => {

        const banemb = new Discord.MessageEmbed()
        .setTitle("Banned")
        .setColor([255,77,77])
        .addField('User', `${member}`)
        .addField('Reason', `${reason}`)
        .setThumbnail(message.author.displayAvatarURL())

        message.channel.send({ embeds : [ banemb ] })
    })
    .catch(() => {
        message.channel.send("Oops, something went wrong!")
    })
}

exports.name = "ban"
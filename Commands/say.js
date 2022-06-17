exports.run = (client, message, args) => {
    let toSay = args.join(" ")
    if(!toSay) return message.channel.send({content: "You have to provide something to say!"})
       if (message.author.id != '741211030427926629') {
            return message.reply(`you can't use this command. only the owner can.`)

        };
message.delete()
    message.channel.send({content: toSay})
}

exports.name = "say"
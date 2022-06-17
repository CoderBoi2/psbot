module.exports.run = (client, message, args) => {
    if(!message.member.roles.cache.has("944267073968832532")) return message.reply("You can't use that!")
    message.channel.send("<@&929963014579421184>\n  \n<:PS_ReplyConnected:929960651361763328>  <a:PS_chat:935068036011008060> A staff wants to revive the chat")
    }
    
    exports.name = "revive"


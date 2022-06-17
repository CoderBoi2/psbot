module.exports.run = (client, message, args) => {
    if (message.member.permissions.has("MANAGE_CHANNELS")) {
    let sentence = message.content.split(" ");
    sentence.shift();
    sentence = sentence.join(" "); 
    if(sentence != null){
    message.channel.setRateLimitPerUser(sentence);
    }
   
    message.reply(`This chat now has a slowmode of ${sentence} seconds!`)
    } else {
    message.reply("You don't have perms to do that...")
    }
   }

   exports.name = "slowmode"
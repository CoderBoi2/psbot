require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: 32767,
    presence: {
        activities: [{
            name: `Planet Supernova`,
             type: `WATCHING`
         }],
         status: `online`
    }
})
  
const fs = require("fs");
const prefix = "ps!";
 client.commands = new Discord.Collection();
 const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
for(file of commands) {
  const commandName =  file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on("ready" , () =>{
console.log(`${client.user.username} is Online`)
})

client.on("messageCreate", message =>{
if(message.content.startsWith(prefix)) {
 const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const commandName = args.shift()
  const command = client.commands.get(commandName)
  if(!command) return message.channel.send({content: "That command doesn't exist!"})
  command.run(client, message, args)
}
   }) 

client.login(process.env.TOKEN)
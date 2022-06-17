const { MessageActionRow, MessageButton, MessageSelectMenu, MessageEmbed } = require("discord.js")




module.exports = {

  name: "help",

  run: async (client, message, args) => {
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('select')
          .setPlaceholder('Help Menu')

          .addOptions([
            {
              label: 'Main Menu',
              description: 'Shows the main menu',
              emoji: "906785808940425267",
              value: '0',
            },
            {
              label: 'Config Commands',
              description: 'Shows all the config commands',
              emoji: "906786750494564353",
              value: '1',
            },

            {
              label: 'Birthday Commands',
              description: 'Shows all the birthday commands',
              emoji: "🎂",
              value: '2',
            },
  
            {
              label: 'Music Commands',
              description: 'Shows all the music commands',
              emoji: "936546598379487242",
              value: '4',
            },

            {
              label: 'Fun Commands',
              description: 'Shows all the fun commands',
              emoji: "938771037213057045",
              value: '5',
            },
            {
              label: 'Games Commands',
              description: 'Shows all the game commands',
              emoji: "906790704204886047",
              value: '6',
            },
            {
              label: 'Images Commands',
              description: 'Shows all the image commands',
              emoji: "937615330044420166",
              value: '7',
            },

            {
              label: 'Information Commands',
              description: 'Shows all the information commands',
              emoji: "936546405584089108",
              value: '9',
            },
            {
              label: 'Moderation Commands',
              description: 'Shows all the moderation commands',
              emoji: "932487033434296430",
              value: '10',
            },
            {
              label: 'Utility Commands',
              description: 'Shows all the utility commands',
              emoji: "906790955582124112",
              value: '11',
            },
            {
              label: 'Owner Commands',
              description: 'Shows all the owner commands',
              emoji: "987138144694571049",
              value: '12',

            },
            
          ]),
      );
    const row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle("LINK")
          .setLabel("Invite Me")
          .setEmoji("984973004444434514")
          .setURL("https://discord.gg/ws2tSeA48M"),
        new MessageButton()
          .setStyle("LINK")
          .setLabel("Support Server")
          .setEmoji("984973004444434514")
          .setURL("https://discord.gg/ws2tSeA48M")
      )

    const embed = new MessageEmbed()
      .setTitle(`**HELP-MENU**`)
      .setDescription(`
      Hello I am <@${client.user.id}> I am a muti bot I am coded by <@544272782557446194> I Am still in the Making of This bot **Some Commands Wont work Right If you find any Dm me**,\n
      I Thank Deadpool For The help of the bot Join his Server [Click me](https://discord.gg/roverdev).\n
      You can Invite me at [Invite](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands).\n
      A little about the Owner Of this bot\n
      My name is COMPLEX And I am 15 i started Coding alittle bit ago like 3 or 4 months ago. I started taking codes of Github,Youtue and ETC then I wanted to code my own bot and that is this bot.

      
      
      Pls select a category to see more commands.\n\n> <:join:986783171515404309>\`\Prefix\`\: **.**\n> <:Dot:986783090674380840> \`\Total Commands\`\: ${client.commands.size}\n> <:Servers:986783263261601852>      \`\Total Servers\`\: ${client.guilds.cache.size} `)
      
      .setColor("#f4c2c2")


    let sendmsg = message.channel.send({ embeds: [embed], components: [row] })

    let embed1 = new MessageEmbed()
      .setColor('#FFFFFF')
      .setTitle('**HELP MENU**')
      .setDescription(`
     THIS IS WORKING
      `)
      .setFooter('Page 1')
let embed13 = new MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`
      CHANGE TO YOUR COMMANDS
      `)
    let embed2 = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`
      CHANGE TO YOUR COMMANDS
      `)
      .setFooter('Page 2')

    let embed3 = new MessageEmbed()

      .setTitle('**Help Menu**')
      .setColor('#FFFFFF')
      .setFooter('Page 3')


    let embed4 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#FFFFFF')
      .setDescription(`
      CHANGE TO YOUR COMMANDS
      `)
      .setFooter('Page 4')
    let embed5 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#FFFFFF')
      .setDescription(`
      CHANGE TO YOUR COMMANDS

      `)
      .setFooter('Page 5')

    let embed6 = new MessageEmbed()

      .setTitle('**Help Menu**')
      .setColor('#FFFFFF')
      .setDescription(`
      CHANGE TO YOUR COMMANDS

      `)
      .setFooter('Page 6')
    let embed7 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#FFFFFF')
      .setDescription(`
      CHANGE TO YOUR COMMANDS

      `)
      .setFooter('Page 7')

    let embed9 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#FFFFFF')
      .setDescription(`
      **-**botinfo\n **-**help\n **-**serverinfo
      `)
      .setFooter('Page 9')

    let embed10 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#FFFFFF')
      .setDescription(``)
      .setFooter('Page 10')
      
      .setColor("#f4c2c2")
    let embed11 = new MessageEmbed()
      .setTitle('**Help Menu**')
      .setColor('#FFFFFF')
      .setDescription(`
      CHANGE TO YOUR COMMANDS

      `)
      .setFooter('Page 11')

      let embed12 = new MessageEmbed()
      .setColor('#FFFFFF')
      .setTitle('**HELP MENU**')
      .setDescription(`
      CHANGE TO YOUR COMMANDS

      `)
      .setFooter('Page 12')
      

    const filter = i => i.user.id === message.author.id;
    const collector = message.channel.createMessageComponentCollector({
      filter,
      time: 3600000,
      componentType: "SELECT_MENU"
    });


    collector.on("collect", async (collected) => {
      const value = collected.values[0]
      if (value === "0") {
        collected.update({ embeds: [embed], components: [row] })
      }
      if (value === "1") {
        collected.update({ embeds: [embed1], components: [row] })
      }
      if (value === "2") {
        collected.update({ embeds: [embed2], components: [row] })
      }
      if (value === "3") {
        collected.update({ embeds: [embed3], components: [row] })
      }
      if (value === "4") {
        collected.update({ embeds: [embed4], components: [row] })
      }
      if (value === "5") {
        collected.update({ embeds: [embed5], components: [row] })
      }
      if (value === "6") {
        collected.update({ embeds: [embed6], components: [row] })
      }
      if (value === "7") {
        collected.update({ embeds: [embed7], components: [row] })
      }

      if (value === "9") {
        collected.update({ embeds: [embed9], components: [row] })
      }
      if (value === "10") {
        collected.update({ embeds: [embed10], components: [row] })
      }
      if (value === "11") {
        collected.update({ embeds: [embed11], components: [row] })
      }
      if (value === "12") {
        collected.update({ embeds: [embed12], components: [row] })
      }
     
    })


  }
}
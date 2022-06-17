const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'kick',
  description: 'Kicks a user',
  aliases: ['Kick'],
 
  run: async (client, message, args) => {
    const noperms = new MessageEmbed()
    .setTitle('Error!')
    .setDescription("You don't have permissions to do this!")
    .setColor([255, 77, 77])
 
    const botperms = new MessageEmbed()
    .setTitle('Error!')
    .setTitle("I don't have kick permissions!")
    .setColor([255, 77, 77])
 
    const member2 = new MessageEmbed()
    .setTitle('Error!')
    .setDescription("You didn't mention a member!")
    .setColor([255, 77, 77])
 
    const you = new MessageEmbed()
    .setTitle('Error!')
    .setDescription("You cannot kick yourself!")
    .setColor([255, 77, 77])
 
    const mod = new MessageEmbed()
    .setTitle('Error!')
    .setDescription('This user seens to be a moderator.')
    .setColor([255, 77, 77])
 
    if(!message.member.permissions.has('KICK_MEMBERS')) return message.reply({ embeds: [ noperms ] })
    if(!message.guild.me.permissions.has('KICK_MEMBERS')) return message.reply({ embeds: [ botperms ] })
    let member = message.mentions.members.first()
    let reason = message.content.split(' ').slice(2).join(' ')
 
    if(!member) return message.reply({ embeds: [ member2 ] })
    if(member.id == message.author.id) return message.reply({ embeds: [ you ] })
    if(!reason) reason = 'No reason provided!'
    if(member.permissions.has('BAN_MEMBERS') || member.permissions.has('BAN_MEMBERS')) return message.reply({ embeds: [ mod ] })
                                                                                                             
    member.kick()
    .then(() => {
 
      const userem = new MessageEmbed()
      .setTitle('You got kicked')
      .setDescription(`You got kicked by ${message.author.username}, reason: ${reason}`)
      .setFootera(`From ${message.guild.name}`)
      member.send({ embeds: [ userem ] })
    
      const baneb = new MessageEmbed()
      .setTitle('Kicked!')
      .setColor([255, 77, 77])
      .setThumbnail(message.author.displayAvatarURL())
      .addField('User', `${member}`)
      .addField('Banned By', `${message.author.username}`)
      .addField('Reason',`${reason}`)
 
      message.channel.send({ embeds: [ baneb ]})
    });
  },
};

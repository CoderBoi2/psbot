module.exports = {
    name: 'restart',
    run: async (client, message, args) => {

        if (message.author.id != '741211030427926629') {
            return message.reply(`you can't use this command. only the owner can.`)

        };
        await message.reply( `restarting bot...`)
        process.exit();
    }
}
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu işlemi yapabilmek için yönetici yetkisine sahip olmalısın.`)
    let emojiname = args[0];
    const emoji = (message.guild.emojis.find("name", `${emojiname}`))
    if (!emojiname) return message.channel.send("Emoji ismi belirtmediniz")
    const embed = new Discord.RichEmbed()
    .setColor("000000")
    .setThumbnail(`${emoji.url}`)
    .addField("Emojinin ismi", `${emojiname}`)
    .addField("Emoji ID", `${emoji.id}`)
    .addField("Link", `${emoji.url}`)
    .setTimestamp()
    message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emojiinfo'],
    permLevel: 0
}

exports.help = {
    name: 'em',
    description: 'İsmini yazdığınız emoji hakkında bilgi verir',
    usage: 'emojibilgi'
}
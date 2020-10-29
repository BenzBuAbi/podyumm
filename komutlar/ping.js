const Discord = require('discord.js');
const db = require('quick.db');

const moment = require('moment');
require('moment-duration-format');
exports.run = async (client, message, args) => {
   var olcum = await message.channel.send( '<a:Yukleniyorr:766288109683736576> **Ölçüm yapılıyor, lütfen bekleyiniz...**');
 var sonuc = await message.channel.send( "<a:Yukleniyorr:766288109683736576> **Veriler alındı...**").then(msg => msg.delete(3000))
     await olcum.edit( `<a:Cyrus3:766287957010546778> **Tepki Gecikmesi** \`${Math.round((sonuc.createdTimestamp - olcum.createdTimestamp - client.ping) )}\`**ms**\n<a:Cyrus3:766287957010546778> **Bot Gecikmesi** \`${Math.round(client.ping)}\`**ms**`);
///
  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping was here',
  usage: ''
};

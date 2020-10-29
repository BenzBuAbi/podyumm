const Discord = require("discord.js");
const { oneLine,} = require
module.exports.run = async (client, message, args) => {
  let guild = "764435323400749086";
  client.premium_subscription_count == 0
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString();
  /////////////////////////////////////
  var sessayı = count.toString();
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size
   //////////////////////////////////////////////////
     let tag = message.guild.roles.find(rol => rol.id === `764818186276306946`); //////boost rol ıd
   var tagkisi = tag.members.size
  /////////////////////////
  String.prototype.replaceA = function (find, replace) {
    return this.replace(new RegExp(find, 'g'), replace);
  }
  const donustur = function(sayi) {
    let gorunum = sayi.toString()
      .replaceA('0', '0a')
      .replaceA('1', '1a')
      .replaceA('2', '2a')
      .replaceA('3', '3a')
      .replaceA('4', '4a')
      .replaceA('5', '5a')
      .replaceA('6', '6a')
      .replaceA('7', '7a')
      .replaceA('8', '8a')
      .replaceA('9', '9a')
    gorunum = gorunum 
     .replaceA("0a",'<a:0:765975859277725756>')
    .replaceA("1a", '<a:1:765975862008479784>')
    .replaceA("2a", '<a:2:765975863325097995>')
    .replaceA("3a", '<a:3:765975863409246278>')
    .replaceA("4a", '<a:4:765975863103455323>')
    .replaceA("5a", '<a:5:765975863581474856>')
    .replaceA("6a", '<a:6:765975863492870144>')
    .replaceA("7a", '<a:7:765975863409115176>')
    .replaceA("8a", '<a:8:765975863790403584>')
    .replaceA("9a", '<a:9:765975863597727764>')
    return gorunum
  }
message.react("a:tagflame:740214244770971739")
  ////////////////////////////////////////////////////////////
  const embed = new Discord.RichEmbed()
  .setColor('BLACK')
  .setDescription(`
<a:Cyrus3:766287957010546778> **Sunucuda Bulunan Üye sayısı** : _${donustur(üyesayısı)}_

<a:Cyrus3:766287957010546778> **Ses Kanallarındaki Üye Sayısı** : _${donustur(sessayı)}_

<a:Cyrus3:766287957010546778> **Sunucuda Bulunan Aktif Üye Sayısı** : _${donustur(onlayn)}_

<a:Cyrus3:766287957010546778> **Ekip Tagımızı Alan Üye Sayısı** : _${donustur(tagkisi)}_`)
.setTimestamp()
  .setFooter(`Komutu Kullanan: ${msg.author.tag} `)
  .setAuthor(msg.guild.name, msg.guild.iconURL)
msg.channel.send(embed).then
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["Say","sAy","SAY"],
  permLevel: 0
};
exports.help = {
  name: 'say'
};
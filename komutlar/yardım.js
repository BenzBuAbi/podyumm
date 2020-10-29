const Discord = require ("discord.js");

exports.run = (client, message) => {
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Bénz")
.addField("<a:Cyrus3:766287957010546778> .bansorgu","ID ile kişinin ban sebebine bakarsınız.",true)
.addField("<a:Cyrus3:766287957010546778> .ban","İstediğiniz Kişiye Ban Atarsınız.",true)
.addField("<a:Cyrus3:766287957010546778> .banlist","Sunucudan Banlanan Kişileri Gösterir.",true)
.addField("<a:Cyrus3:766287957010546778> .botbilgi","Bot Bilgi.",true)
.addField("<a:Cyrus3:766287957010546778> .duyuru","Duyuru.",true )
.addField("<a:Cyrus3:766287957010546778> .emojibilgi","Emoji Bilgi.",true )
.addField("<a:Cyrus3:766287957010546778> .emoji-yükle","Emoji Yükle.",true )
.addField("<a:Cyrus3:766287957010546778> .idban","ID Ban.",true )
.addField("<a:Cyrus3:766287957010546778> .kick","Kick.",true )
.addField("<a:Cyrus3:766287957010546778> .profil","Profil.",true )
.addField("<a:Cyrus3:766287957010546778> .ping","Botun Pingi.",true )
.addField("<a:Cyrus3:766287957010546778> .toplurol al/ver","Toplu Rol Alma / Verme.",true )
.addField("<a:Cyrus3:766287957010546778> .say","Say Atar.",true )
.addField("<a:Cyrus3:766287957010546778> .sil","100 adet mesaj siler",true )
.addField("<a:Cyrus3:766287957010546778> .unban","İD ile ban kaldırırsınız.",true )

message.channel.sendEmbed(embed)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
  };
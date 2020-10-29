const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "763722934317482024"); //buraya kayıtlı rolünüzün id'sini koyun
  const misafir = message.guild.roles.find(r => r.id === "763370025058828299"); //buraya misafir rolünüzün id'sini koyun.
  const log = message.guild.channels.find(c => c.id === "763420084730462228"); //buraya kayıt log id koyun
  const tag = "";
  if(!message.member.roles.array().filter(r => r.id === "762450756711743488")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
      if(!nick) return message.channel.send("Bir Nick girin.")
    c.addRole(kayıtlı)
    c.removeRole(misafir)
    c.setNickname(`${nick}`)
    const embed = new Discord.RichEmbed()
    .setAuthor("Kayıt Yapıldı")
    .addField(`Kaydı yapılan\n`, `${c.user.tag}`)
    .addField(`Kaydı yapan\n`, `${message.author.tag}`)
    .addField(`Yeni isim\n`, `${nick}`)
    .setFooter("Bénz Kayıt Sistemi")
    .setColor("RANDOM")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kız","k"],
  permLevel: 0
};
exports.help = {
  name: "k",
  description: "k",
  usage: "k"
};

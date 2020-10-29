const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (
    !message.member.roles.has("764435511154311190") &&
    !message.member.hasPermission("ADMINISTRATOR")
  )
    return message.channel.send("Bu Komutu Kullanmaya İznin Yok");
  let user =
    message.mentions.users.first() || message.guild.members.get(args[0]);
  if (!user)
    return message.channel.send(
      `**Sunucudan Yasaklamak İstediğin Kişiyi Etiketle!**`
    );
  let sebep = args.slice(1).join(" ");
  if (!sebep) return message.channel.send(`Lütfen Bir Sebep Giriniz`);
  let yasaklayankisi = `Yasaklayan : ${message.author.tag} - ${message.author.id}`;
  if (message.guild.members.get(user.id).hasPermission("ADMINISTRATOR"))
    return message.channel
      .send("Yetkili Olan Olan Kişileri Banlayamassın!")
      .then(m => m.delete({ timeout: 9000 }));
  if (user == message.author)
    return message.channel.send(`Kendini Yasaklayamassın!`);
  message.react("764459386789167134");
  let embed2 = new Discord.RichEmbed()
    .setColor("BLACK")
    .setTimestamp()
    .setFooter(`Bénz`)
    .addField(
      `Bénz`,
      `<a:Cyrus3:766287957010546778> **Yasaklayan:** ${message.author.tag} \n<a:Cyrus3:766287957010546778> **Yasaklanan:** ${user.tag} \n<a:Cyrus3:766287957010546778> **Yasaklama Sebebi:** ${sebep}`
    )
    .setImage("https://thumbs.gfycat.com/DisloyalMildGermanshepherd-size_restricted.gif");
  let userembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("YASAKLANDIN")
    .setDescription(
      `**${message.guild.name}** Sunucusundan **${sebep}** Sebebiyle Yasaklandın!`
    )
    .setImage("https://media.tenor.com/images/bc8ff9b0f2271982a4592c205c9084b6/tenor.gif");
  user.send(userembed);
  message.guild.member(user).ban({ reason: `${sebep}` });
  db.set(`banlama.${message.author}`, 1);
  message.channel.send(embed2);
  let embed4 = new Discord.RichEmbed()
    .setColor("#af0900")
    .setDescription(
      "`" +
        user.tag +
        "`" +
        `Kullanıcısı ${message.author} Tarafından **${sebep}** Nedeniyle Yasaklandı!`
    );

  let kanal1 = message.guild.channels.get("764459386789167134");
  if (!kanal1) return;
  kanal1.send(embed4);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yasakla", "infaz", "yak", "ban", "yargı", "patlat"],
  permLevel: 0
};
exports.help = {
  name: "ban",
  description: "Belirttiğiniz kullanıcıyı sunucudan yasaklar.",
  usage: "yasakla <@kullanıcı> sebep"
};

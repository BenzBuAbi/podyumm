  const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json')
var muteli = "765628445518331904"; //buraya muteli rolünün id'sini koyunuz
var muteyetkisi = "765631079716880395"; // buraya mute yetkis irolünün id yazınız.
exports.run = async (client, msg, args) => {
  if (!msg.member.roles.has(muteyetkisi)) {
     if (!msg.member.roles.has(`${muteyetkisi.id}`)) return msg.channel.send(`**${ayarlar.prefix}mute** isimli komutu kullanabilmek için <@&${muteyetkisi}> rolüne sahip olman gerekiyor !`)
  } else {
    let muted =
      msg.mentions.members.first() ||
      msg.guild.members.find(c => c.id === args[0]);
    if (!muted) {
      msg.reply("**Lütfen Susturulacak Üyeyi Etiketleyiniz !**");
    } else {
      if (
        muted.highestRole.calculatedPosition >=
        msg.member.highestRole.calculatedPosition
      ) {
        msg.reply("**Bu Kullanıcı Senden Daha Üst Pozisyonda !**");
      } else {
        let mutezaman = args[1]
          .replace("sn", "s")
          .replace("dk", "m")
          .replace("sa", "h")
          .replace("gün", "d");
        if (!mutezaman) {
          msg.reply("**Bir Zaman Girmediniz !**");
        } else {
          let sebep = args.splice(2, args.length).join(" ");
          //!!sustur @etiket 0 zaman 1 sebep 2
          let log = msg.guild.channels.find(c =>
            c.id.toLowerCase().includes("765621997342031882") //  
          );
          let vakit = mutezaman
            .replace("m", " Dakika")
            .replace("s", " Saniye")
            .replace("h", " Saat")
            .replace("d", " Gün");
          try {
            log.send(
              new Discord.RichEmbed()
                .setTitle("**__Bir Kullanıcı Susturuldu !__**")
                .setFooter(`ID: ${muted.id}`, muted.user.displayAvatarURL)
                .setColor("RANDOM")
                .setThumbnail(msg.author.displayAvatarURL)
                .addField(`<a:hype:763463178797449237> **Yetkili:**`, `<@${msg.author.id}>`)
                .addField(`<a:hype:763463178797449237> **Susturulan:**`, `<@${muted.id}>`)
                .addField(
                  `<a:hype:763463178797449237> **Sebebi:**`,
                  `${sebep === "" ? "Sebep Belirtilmemiş !" : sebep}`
                )
              .setImage('')
                .addField(`Süre`, `${vakit}`)
            );
            muted.addRole(muteli);
            msg.channel.send(
              `**${muted.user.tag}** kullanıcısı, **${msg.author.tag}** tarafından **${vakit}** süreyle susturuldu <a:muteli:765630319143157800>`
            );
          } catch (e) {
            console.log(e);
          }

          setTimeout(async function() {
            muted.removeRole(
              muteli,
              "**Susturulan Kişinin Mute Süresi Dolduğu İçin Mute Cezası Kaldırıldı !**"
            );
          }, ms(mutezaman));
        }
      }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute"],
  permLevel: 0
};

exports.help = {
  name: "mute",
  description: "mute",
  usage: ""
};
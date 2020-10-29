const express = require('express');
const app = express();
const http = require('http');
    app.get("/",(request, response) => {
      console.log(`pingleme işlemi başarılı başarılıysa bu yazıyı loglarda görürsün`);
      response.sendStatus(200);
    });
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
/////60gx-d30c

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

//////////////////////////Hata Alırsanız Discorddan Bildirebilirsiniz//////////////
//--KOMUTLAR--\\

////////////////////İsterseniz Aşağıdaki Komutu Silebilirsiniz///////////////////////
client.on('ready', ()=>{
client.channels.get('766320209089790004').join()
})
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply("**Aleyküm Selam Hoşgeldin^^** ");
  }
});
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "tag") {
    msg.reply("**<a:Cyrus3:766287957010546778> Buyur kankam ekip tagımız ⁴⁰⁰⁴, eğer nitron varsa etiketini #04004 yapabilirsin.** ");
  }
});
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "link") {
    msg.reply("**<a:Cyrus3:766287957010546778> Kalıcı Discord Linkimiz;** https://discord.gg/QQNgReX ");
  }
});
////////////////////İsterseniz Yukarıdaki Komutu Silebilirsiniz///////////////////////
///BOT DM
client.on("message", msg => {
  var channel = client.channels.get("765979230906482718");

  if (msg.channel.type === "dm") {
    if (msg.author.bot) return;
    const embed = new Discord.RichEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("RANDOM")
      .setThumbnail(`${msg.author.avatarURL}`)
      .addField("Gönderen", msg.author.tag)
      .addField("Gönderen ID", msg.author.id)
      .addField("Gönderilen Mesaj", msg.content);

    channel.send(embed);
  }
});
//--------------------------------Hg Kanalı---------------------------------\\

client.on('guildMemberAdd', async member => {
  await member.addRole(`766290681576423446`) //id yazan yere verilecek rol (unregistered)
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = '<a:iptal:765976170310402070> Tehlikeli'
} else {
takizaman = `<a:onay:766287859833241641> Güvenli`}require("moment-duration-format");
 let zaman1 = new Date().getTime() - user.createdAt.getTime()
 const gecen = moment.duration(zaman1).format(` YY [Yıl,] DD [Gün,] HH [Saat,] mm [Dakika,] ss [Saniye]`) 
 let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
 let message = member.guild.channels.find(x => x.id === `766277302962880512`) //id yazan kısma kanal id'si [orn: register-chat]
  const taki = new Discord.RichEmbed()
 .setTitle(
     "Hoş Geldin"
   )
   .setDescription(`<a:hg:766287826575949875>**・** **Sunucumuza Hoş geldin** ${member} 

<a:donekk:766288470632693851>**・** **Seninle beraber tamı tamına sunucumuz __${message.guild.memberCount}__ Kişiye ulaşmış bulunmaktadır!**

<a:ay:766288559899803668>**・** **Hesabın toplam __${gecen}__ önce kurulmuş!**

<a:Cyrus3:766287957010546778>**・** **Bu Kullanıcı** **|** **${takizaman}**
`)
.setImage("https://i.pinimg.com/originals/b8/a7/cf/b8a7cfdf05a6114c20a1c313b8b637cc.gif")
.setTimestamp()
.setFooter(`❤︎ Bénz`)
.setColor('RANDOM')
message.send(taki)
 
         });
//////////TagAlanaRolVerme
client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    let tag = "⁴⁰⁰⁴"; //tagınız
    let sunucu = "764435323400749086"; //sunucu ID
    let kanal = ""; //log kanal id
    let rol = "766276015571337257"; // rol ID
    if (
      newUser.username.includes(tag) &&
      !client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .roles.has(rol)
    ) {
      client.channels
        .get(kanal)
        .send(
          `${newUser} **__${tag}__** tagını aldığı için **__⁴⁰⁴__** rolünü kazandı!`
        );
      client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .addRole(rol);
    }
    if (
      !newUser.username.includes(tag) &&
      client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .roles.has(rol)
    ) {
      client.guilds
        .get(sunucu)
        .members.get(newUser.id)
        .removeRole(rol);
      client.channels
        .get(kanal)
        .send(
          `${newUser} **__${tag}__** tagını çıkardığı için **__⁴⁰⁴__** rolünü kaybetti!`
        );
    }
  }
});
//////////Etiket alana rol verme
client.on("userUpdate", (oldUser, newUser) => {
  let kanal = ""; //log kanal id
  let guild = client.guilds.get("");
  if (!oldUser.tag.includes("#4004")) {
    if (newUser.tag.includes("#4004")) {
      guild.members.get(newUser.id).addRole("");
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Bénz") 
    .setFooter(`Bénz ❤︎`)
    .setTimestamp()
    .setDescription(`<@${newUser.id}> Etiketimizi **__#0404__** Aldığı İçin Rolümüzü Kazandı`);
    client.channels.get(``).send(embed);    }
  }
  if (oldUser.tag.includes("#4004")) {
    if (!newUser.tag.includes("#4004")) {
      guild.members.get(newUser.id).removeRole("");
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Bénz")
    .setFooter(`Bénz ❤︎`)
    .setTimestamp()
    .setDescription(`<@${newUser.id}> Etiketimizi **__#0404__** Bıraktığı İçin Rolümüzü Kaybetti!`);
    client.channels.get(``).send(embed);      }
  }
  if (oldUser.tag === newUser.tag) return;
});


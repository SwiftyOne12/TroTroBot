const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ('/')

client.on('ready', function () {
    client.user.setGame('TroTroBot en dévloppement')
    client.user.setStatus("online")
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.login('NDEyNzI3MDU1NjU5MTcxODQw.XLL5Og.UV3pNszS5tSgTTStVPAOqCrgB0s');


//HELP\\

client.on('message', function (message) {
    if (message.content === prefix + "help") {
      var help_embed = new Discord.RichEmbed()
      .setTitle('ℋ𝒆𝓵𝓹')
      .setThumbnail(client.user.displayAvatarURL)
      .addField("*Modération*" , '`/Kick` `/Ban`')
      .addField('*Information*' , '`/avatar` `/ping`')
      .setColor ('#000000')
      .setFooter("𝓢𝓸𝓸𝓷..")
  message.channel.sendEmbed(help_embed)
  }
  })

//ping\\
  client.on('message', msg => {
    if (msg.content === '/ping') {
      msg.reply('pong');
    }
  });

  //KICK\\

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('/kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`${user.tag} à bien été kick`);
        }).catch(err => {
          message.reply('je ne peut pas kick une personne au dessus de moi');
          console.error(err);
        });
      } else {
        message.reply('la personne a quitter le serveur ou a été kick');
      }
    } else {
      message.reply('Mentionner la personne que je dois kick');
    }
  }
});

//BAN\\

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('/ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(`${user.tag} à bien été banni`);
        }).catch(err => {
          message.reply('je ne peut pas ban une personne au dessus de moi');
          console.error(err);
        });
      } else {
        message.reply('la personne a quitter le serveur ou a été Ban');
      }
    } else {
      message.reply('Mentionner la personne que je dois ban');
    }
  }
});

//AVATAR\\

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '/avatar') {
    message.reply(message.author.avatarURL);
  }
});

//prefix\\

client.on('message', msg => {
  if (msg.content === 'prefix') {
    msg.reply('le prefix est /');
  }
});

  //Slot\\

  exports.run = (client, message, args) => {

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let results1 = Math.floor((Math.random() * slots.length))
    let results2 = Math.floor((Math.random() * slots.length))
    let results3 = Math.floor((Math.random() * slots.length))
    let name = message.autor.displayName;
    let icon = message.autor.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
    let wEmbeb = new Discord.RichEmbed()
    .setFooter('Tu gagne !')
    .setTitle('slot_machine: Slots :slot_machine:')
    .addField('Result:', slots[result1] + slots[result2] + slots[result3], true) 
    .setColor('#000000')
    message.channel.send(wEmbeb)

    } else {
        let lEmbeb = new Discord.RichEmbed()

      .setFooter('Tu Perd !')
    .setTitle('slot_machine: Slots :slot_machine:')
    .addField('Result:', slots[result1] + slots[result2] + slots[result3], true) 
    .setColor('#000000')
    message.channel.send(lEmbeb);
    }
  }
  
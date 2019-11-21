const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://yuzuriha.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();




// our bot prefix //

  var prefix = "~";


// Online Setting //

client.on('ready', function(){
  client.user.setStatus("online");
  var ms = 10000 ;
  var setGame = [`~help`,`dashflo.net`];
  var i = -1;
  var j = 0;
  setInterval(function (){
      if( i == -1 ){
          j = 1;
      }
      if( i == (setGame.length)-1 ){
          j = -1;
      }
      i = i+j;
      client.user.setGame(setGame[i]);
  }, ms);1000
});

// help! by iiMrSasukeDEV //

client.on('message', message => {
  if (message.content.startsWith(prefix + "help")) {
let embed = new Discord.RichEmbed()
   .setTitle("**Yuzuriha Inori**")
   .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=8")
   .setTimestamp()
.setThumbnail(message.author.avatarURL)
.addField('  **1. Core :**  ' ,' `~help` `~invite` `~ping` `~support` ')
.addField('  **2. Utility :** ' ,' `~lyrics` `~weather` `~urban` `~ytinfo` `~draw`')
.addField('  **3. Social :**  ' ,' `~anime` `~movie` ')
.addField('  **4. Fun :**  ' ,' `~coinflip` `~cat` `~animal` ')
.addField('  **5. Economy :**' , ' `~money` `~daily` ')
.addField('  **6. Information :**  ' ,' `~about` `~moreinfo` `~userinfo` `~avatar` `~roles` ')
.addField('  **7. Administartion :**  ' ,' `~ban` `~softban` `~kick` `~cclose` `~copen` `~mute` `~deafen` `~undeafen` `~moveme` `~warn` `~removewarn` `~warnings` `~nick` `~addemoji`  ')
message.channel.sendEmbed(embed);


message.channel.send('**:page_with_curl: Use `~help [command]` to get more info on a specific command,** for example: `~about`')



}
});


// ban help commands //


client.on('message', message => {
if (message.content === '~ban') {
let embed = new Discord.RichEmbed()
     .setTitle("**Yuzuriha Inori**")
     .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=8")
     .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .addField('  **Ban user and delete his messages from the last 7 days.** ' , ' `By Yuzuriha-Bot` :b: ')
  .addField('  **Usage :** ' , ' `~ban <@user> [<reason>]`  ')

  message.channel.sendEmbed(embed);
}
});


// kick help commands //


client.on('message', message => {
if (message.content === '~kick') {
let embed = new Discord.RichEmbed()
     .setTitle("**Yuzuriha Inori**")
     .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=8")
     .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .addField('  **Help for kick command.** ' , ' `By Yuzuriha-Bot` :regional_indicator_k:  ')
  .addField('  **Usage :** ' , ' `~kick <@user> [<reason>]`  ')

  message.channel.sendEmbed(embed);
}
});


// lyrics help commands //


client.on('message', message => {
if (message.content === '~lyrics') {
let embed = new Discord.RichEmbed()
     .setTitle("**Yuzuriha Inori**")
     .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=8")
     .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .addField('  **Help for lyrics command.** ' , ' `By Yuzuriha-Bot` :paperclips:   ')
  .addField('  **Usage :** ' , ' `/lyrics [<search>]`  ')
  .addField('  **Source :** ' , ' https://www.musixmatch.com/ ')


message.channel.send('**:flag_white: Some arguments are missing, here is the help for this command.**')
  message.channel.sendEmbed(embed);
}
});

// prefix //

client.on('message', message => {
if (message.content === '~') {
let embed = new Discord.RichEmbed()
     .setTitle("**Yuzuriha Inori**")
     .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=8")
     .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .addField('  **Help for Yuzuriha-Bot commands.** ' , ' :u7981: ` Yuzuriha-Bot` :robot:     ')
  .addField('  **Usage :** ' , ' `~help`  ')

message.channel.send('**:flag_white: Some arguments are missing, here is the help for this command.**')
  message.channel.sendEmbed(embed);
}
});


// weather help commands // 

client.on('message', message => {
if (message.content === '~weather') {
let embed = new Discord.RichEmbed()
     .setTitle("**Yuzuriha Inori**")
     .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=8")
     .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .addField('  **Help for weather command.** ' , ' `By Yuzuriha-Bot` :cloud:    ')
  .addField('  **Usage :** ' , ' `~weather <city>, [<country>]`  ')
  .addField('  **Source :** ' , ' http://openweathermap.org/ ')

message.channel.send('**:flag_white: Some arguments are missing, here is the help for this command.**')
  message.channel.sendEmbed(embed);
}
});


// urban help commands //


client.on('message', message => {
if (message.content === '~urban') {
let embed = new Discord.RichEmbed()
     .setTitle("**Yuzuriha Inori**")
     .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=8")
     .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .addField('  **Help for urban command.** ' , ' `By Yuzuriha-Bot` :infinity:    ')
  .addField('  **Usage :** ' , ' `/urban <search>`  ')


message.channel.send('**:flag_white: Some arguments are missing, here is the help for this command.**')
  message.channel.sendEmbed(embed);
}
});


// youtube informations help commands //


client.on('message', message => {
if (message.content === '~ytinfo') {
let embed = new Discord.RichEmbed()
     .setTitle("**Yuzuriha Inori**")
     .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=8")
     .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .addField('  **Help for youtube informations command.** ' , ' `By Yuzuriha-Bot` :movie_camera:     ')
  .addField('  **Usage :** ' , ' `/ytinfo <channel-link>`  ')


message.channel.send('**:flag_white: Some arguments are missing, here is the help for this command.**')
  message.channel.sendEmbed(embed);
}
});


// draw help commnads //


client.on('message', message => {
if (message.content === '~draw') {
let embed = new Discord.RichEmbed()
     .setTitle("**Yuzuriha Inori**")
     .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=8")
     .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .addField('  **Help for drawing command.** ' , ' `By Yuzuriha-Bot` :page_with_curl:     ')
  .addField('  **Usage :** ' , ' `~draw <text>`  ')


message.channel.send('**:flag_white: Some arguments are missing, here is the help for this command.**')
  message.channel.sendEmbed(embed);
}
});


// anime help commands // 


client.on('message', message => {
if (message.content === '~anime') {
let embed = new Discord.RichEmbed()
     .setTitle("**Yuzuriha Inori**")
     .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=8")
     .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .addField('  **Help for anime command.** ' , ' `By Yuzuriha-Bot` :motorway:     ')
  .addField('  **Usage :** ' , ' `~anime <anime-name>`  ')


message.channel.send('**:flag_white: Some arguments are missing, here is the help for this command.**')
  message.channel.sendEmbed(embed);
}
});

// movie help commands //


client.on('message', message => {
if (message.content === '~movie') {
let embed = new Discord.RichEmbed()
     .setTitle("**Yuzuriha Inori**")
     .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=8")
     .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .addField('  **Help for movie command.** ' , ' `By Yuzuriha-Bot` :movie_camera:     ')
  .addField('  **Usage :** ' , ' `~movie <complet the step/s>`  ')


message.channel.send('**:flag_white: Some arguments are missing, here is the help for this command.**')
  message.channel.sendEmbed(embed);
}
});















// general help codes //

client.on('message', message => {
  if(message.content === "~about") {
    if(!message.channel.guild) return message.reply(':rage:Dont **type the commands on the **Bot DMs**');(':rage:Dont **type the commands on the **Bot DMs**');
      const embed = new Discord.RichEmbed()
      .setColor("#fff3f3")
      .setDescription(`**Servers**🌐 **__${client.guilds.size}__**
 **Users**👥 **__${client.users.size}__**
 **Channels**📚 **__${client.channels.size}__** `)
             message.channel.sendEmbed(embed);
         }
 });



// 2 eme //



client.on('message', message => {
  if (message.content.startsWith("~support")) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .addField('https://discord.gg/V7KVkm' , 'Yuzuriha inori :busts_in_silhouette:  Support Server :globe_with_meridians: ')
        })
}
});

  client.on('message', message => {
  if (message.content.startsWith("~moreinfo")) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .setTitle('**__Yuzuriha Inora - Informations__** ')
          .setThumbnail('https://cdn.discordapp.com/avatars/637669190907723777/9bb8e4d13ef74d86f819465e285223d7.png?size=1024')
          .addField('**``Ram``**' , `**${(process.memoryUsage().rss / 1048576).toFixed()}MB**`, true)
          .addField('**``Channels``**' ,         ` **${client.channels.size}**` , true)
          .addField('**``Users``**'        ,`**${client.users.size}**` , true)
          .addField('``Bot Users``' ,`**${client.guilds.size}**`,true)
          .addField('**``Developpers``**'     , `**-/Sasuke 💎#5585 & Fawx#5150**` , true)
          .addField('**``Bot Debugger``**'     , `**BlackFire#5973**` , true)
          .addField('**``Bot ID``**'       , `**${client.user.id}**` , true)
                .addField('**``Prefix``**'         , `**~**` , true)
                .addField('**``Bot Language``**'          , `**JavaScript**` , true)
                .addField('**``Support Server``**'       , `**https://discord.gg/rMcrevc**` , true)
                .setFooter('Yuzuriha')
        })
}
});

 client.on('message', message => {
  if(message.content === "~invite") {
    let MeCodes = new Discord.RichEmbed()
    .setTitle(":point_right: || Click to add Yuzuriha Inori ||")
    .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=8")
    .setTimestamp()
    .setColor("RANDOM")
    return message.channel.send(MeCodes)
  }
 });

 client.on('message', message =>{
  if(message.content === '~ping'){
 let start = Date.now(); message.channel.send(' :ping_pong: |  Pong!').then(message => {
 message.edit(`\`\`\`js
 - Time taken: ${Date.now() - start} ms
 - Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
 });

 client.on('message', message => {
  if (message.content.startsWith("~avatar")) {
    if(!message.channel.guild) return message.reply(':rage:Dont **type the commands on the **Bot DMs**');
      var mentionned = message.mentions.users.first();
  var x5bzm;
    if(mentionned){
        var x5bzm = mentionned;
    } else {
        var x5bzm = message.author;
       
    }
      const embed = new Discord.RichEmbed()
      .setColor("#f8f5f5")
      .setImage(`${x5bzm.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});

  client.on('message', message => {
                          if (message.content === "~serverinfo") {
                              if (!message.channel.guild) return
                              var verificationLevel = message.guild.verificationLevel;
                              const verificationLevels = ['None','Low','Meduim','High','Extreme'];
                              var Y1 = message.guild.createdAt.getFullYear() - 2000
                              var M2 = message.guild.createdAt.getMonth()
                              var D3 = message.guild.createdAt.getDate()
                              const xNiTRoZ = new Discord.RichEmbed()
                               .setAuthor(message.author.username , message.author.avatarURL)
                               .setColor('RANDOM')
                               .setTimestamp()
                               .setTitle(message.guild.name,message.guild.iconURL)
                               .addField(':id: ✺【 Server ID 】✺',`${message.guild.id}`,true)
                               .addField(':date: ✺【 Server Create Date 】✺',D3 + '.' + M2 + '.' + Y1,true)
                               .addField(':crown: ✺【 Owner Ship 】✺',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
                               .addField(':busts_in_silhouette: ✺【 Members 】✺' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
                               .addField(':speech_balloon: ✺【 Rooms 】✺' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
                               .addField(':earth_asia: ✺【 Server Local 】✺',message.guild.region)
                               .addField(':ribbon: ✺【 Emoji 】✺',`${message.guild.emojis.size}`,true)
                               .addField(':construction:✺【 Level Moderation 】✺ ',`${verificationLevels[message.guild.verificationLevel]}`,true)
                               .addField(':closed_lock_with_key: ✺【 Roles 】✺ '+message.guild.roles.size+' ',)
                               message.channel.send({embed:xNiTRoZ});
                           }
                          });

client.on('message', message => {
  if (message.content.startsWith("!userinfo")) {
               if(!message.channel.guild) return message.reply(':rage:Dont **type the commands on the **Bot DMs**');
 
              var mentionned = message.mentions.users.first();
   var mentionavatar;
     if(mentionned){
         var mentionavatar = mentionned;
     } else {
         var mentionavatar = message.author;
         
     }
  let embed = new Discord.RichEmbed()
 .setColor("#0e0d0d")
  .setThumbnail(`${mentionavatar.avatarURL}`)
 .addField("`Username :`",`` + `${mentionavatar.id}` + `>`, true)
 .addField('`Tag :`',"#" +  `${mentionavatar.discriminator}`, true)
  .addField("`User-id :`", "**[" + `${mentionavatar.id}` + "]**", true)
 .addField("`Create At :`:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
   
   
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});

const sfetch = require('snekfetch');
client.on('message', message => {
if (message.content.startsWith('~urban')) {
     let args = message.content.split(' ').slice(1).join(' ');
   const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20B046, 0xF2E807, 0xF207D1, 0xEE8419];
   if (!args) {
       return message.reply(':rolling_eyes: **| Please add a urban search, you pleb!**');
   }
   sfetch.get('http://api.urbandictionary.com/v0/define?term=' + args).then(res => {
       if (res.body.list[0] === undefined) {
           return message.channel.send('**»Error**: Couldnt find the word');
       }
       const definition = res.body.list[0].definition;
       const word = res.body.list[0].word;
       const Author = res.body.list[0].author;
       const exam = res.body.list[0].example;
       const thumup = res.body.list[0].thumbs_up;
       const thumdown = res.body.list[0].thumbs_down;
       const embed = new Discord.RichEmbed()
   .setColor(hexcols[~~(Math.random() * hexcols.length)])
   .setTitle(`This is the info for the word: **${word}**`)
   .addField('definition:', `${definition}`)
   .addField('Author:', `${Author}`)
   .addField('Example:', `${exam}`)
   .addField('Rating', `👍 ${thumup} 👎 ${thumdown}`, true)
   .setThumbnail('https://cdn.discordapp.com/attachments/486250425817890821/486526624112705617/ce5fb05919818916b5f598f3ee18afaa.png');
       message.channel.send({embed}).catch(e => console.log(e));
   }).catch(err => {
       if (err) {
           console.log(err);
       }
 
   });
};
 });


 



// moderation codes! //

client.on('message', message => {
  if(message.content.split(' ')[0] == `${prefix}ban`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission.');
      if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.channel.send('I don\'t have permission.');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!reason) reason = '**:no_entry_sign: No reason provided!**'
      if(!user) return message.channel.send(`**:flag_white: Some arguments are missing, here is the help for this command.**`);
      if(user.user.id === message.author.id) return message.channel.send('You can\'t ban yourself!');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You can't ban **${user.user.tag}** because his role highest than your role!`);
     if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`I can't ban **${user.user.tag}** because his role highest than my role!`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`You can't ban **${user.user.tag}** because he have Administration permissions!`);
     if(!message.guild.member(user.user).bannable) return message.channel.send(`I can't ban **${user.user.tag}**.`);
      message.guild.member(user).ban(reason, user);
      message.channel.send(`Done :+1:, I Banned ${user.user.username} from the server!\nReason: \`\`${reason}\`\``);
    }
});

client.on('message', message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "softban") {
  if(!message.member.hasPermission('BAN_MEMBERS')) return;
  let args = message.content.split(" ").slice(1).join(" ");
  if(args == 'all') {message.guild.fetchBans().then(zg => {
  zg.forEach(NoNo => {message.guild.unban(NoNo);})});
  return message.channel.send('**✅ Unbanned all members **')}
  if(!args) return message.channel.send('**Please Type the member `ID or All`**');
  message.guild.unban(args).then(m =>{message.channel.send(`**✅ Unbanned ${m.username}**`);
  }).catch(stry =>{message.channel.send(`**🙄 - I can't find \`${args}\` in the ban list**`)});
  }});

client.on('message', async(message) => {
  let args = message.content.split(' ');
  if(args[0] == `${prefix}kick`){
      if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('KICK_MEMBERS') || !message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return;
      let user = message.guild.members.get(args[1]) || message.mentions.members.first();
      let reason = args.slice(2).join(" ");
      if(!user) return message.channel.send(`**:flag_white: Some arguments are missing, here is the help for this command.**`);
      if(!reason) reason = '**:no_entry_sign: No reason provided!**';
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You cant kick **${user.user.username}** because his role highest than your role!`);
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`I cant kick **${user.user.username}** because his role highest than my role!`);
      if(!message.guild.member(user.user).kickable) return message.channel.send(`I cant kick **${user.user.username}**.`);
      await message.guild.member(user).kick(reason, user);
      await message.channel.send(`**${user.user.username}** has been kicked from the server! \`\`${reason}\`\``);
   }
});

client.on("message", async function (message) {
if(message.author.bot) return;
if(!message.guild) return;
var args = message.content.split(" ");
var cmd = args[0].slice(prefix.length).toLowerCase();
if(!message.content.startsWith(prefix)) return;
switch (cmd) {
case 'mute':
let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
if(!tomute) return message.reply("**❌ | Couldn't find user**");
if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("**❌ | Can't mute them!**");
if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(`**❌ | You don\'t have permission**`)
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send(`**❌ | I don\'t have permission**`)
let muterole = message.guild.roles.find(`name`, "Muted By Yuzuriha Inori");
if(!muterole){
try{
muterole = await message.guild.createRole({
name: "Muted By Yuzuriha Inori",
color: "#000000",
permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
await channel.overwritePermissions(muterole, {
SEND_MESSAGES: false,
ADD_REACTIONS: false
});
});
}catch(e){
console.log(e.stack);
}
}
let mutetime = args[2];
if(!mutetime) return message.reply("**❌ | Please type time :timer:**");
await(tomute.addRole(muterole.id));
message.reply(`**<@${tomute.id}> has been muted for ${ms(ms(mutetime))} **`);
setTimeout(function(){
tomute.removeRole(muterole.id);
message.channel.send(`**<@${tomute.id}> has been unmuted!**`);
}, ms(mutetime));
break;
}
});


var figlet = require('figlet');
client.on('message', edward => {
    var commandedward = "draw";
    if (edward.content.startsWith(prefix + commandedward)) {
    if (!edward.channel.guild) return;
    var argsedward = edward.content.split(" ").slice(1).join(" ");
figlet(argsedward, function(err, dataed) {
    if (err) {
        edward.channel.send(`\`\`\`apache\nErr; ${err}\`\`\``);
        }
    var edwardhere = "";
    var edwardem = new Discord.RichEmbed()
    .setColor(edward.member.displayHexColor || "36393e")
    .setAuthor(`${commandedward} Service;`,edward.author.avatarURL || edward.author.defaultAvatarURL)
    .setDescription(`|| ------------------------------------------------------------------- ||\`\`\`fix\n${dataed} ${edwardhere}\`\`\``)
    .setThumbnail(edward.guild.iconURL || edward.author.displayAvatarURL)
    .setTimestamp()
    .setFooter(client.user.username,client.user.avatarURL || client.user.defaultAvatarURL);
if (argsedward.length <= 6){
    edward.channel.send(edwardem);
        }
if (argsedward.length >= 7){
    edward.channel.send(`\`\`\`fix\n${dataed}\`\`\``);
     }
 
})}});





  client.on('message', function(message) {//iiMrSasukeDEV
    if(!message.channel.guild) return;
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;
  
    var args = message.content.substring(prefix.length).split(' ');//iiMrSasukeDEViiMrSasukeDEV
    switch (args[0].toLocaleLowerCase()) {//iiMrSasukeDEV
    case "purge" :
    message.delete()
    if(!message.channel.guild) return
    if(message.member.hasPermissions(0x2000)){ if (!args[1]) {//iiMrSasukeDEV
    message.channel.fetchMessages()
    .then(messages => {
    message.channel.bulkDelete(messages);
    var messagesDeleted = messages.array().length;
    message.channel.sendMessage(' '+ "**```fix\n" + messagesDeleted + " " +  ': messages deleted!!' + "```**").then(m => m.delete(5000));
    })
    } else {
    let messagecount = parseInt(args[1]);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    message.channel.sendMessage(' '+ "**```fix\n" + args[1] + " " +  ': messages deleted!!' + "```**").then(m => m.delete(5000));
    message.delete(60000);
    }
    } else {
    var manage = new Discord.RichEmbed()
    .setDescription('You Do Not Have Permission MANAGE_MESSAGES :(')
    .setColor("RANDOM")
    message.channel.sendEmbed(manage)
    return;
    }
    }
    }); //iiMrSasukeDEV

 client.on('message', function(message) {//iiMrSasukeDEV
    if(!message.channel.guild) return;
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;
  
    var args = message.content.substring(prefix.length).split(' ');//iiMrSasukeDEViiMrSasukeDEV
    switch (args[0].toLocaleLowerCase()) {//iiMrSasukeDEV
    case "clear" :
    message.delete()
    if(!message.channel.guild) return
    if(message.member.hasPermissions(0x2000)){ if (!args[1]) {//iiMrSasukeDEV
    message.channel.fetchMessages()
    .then(messages => {
    message.channel.bulkDelete(messages);
    var messagesDeleted = messages.array().length;
    message.channel.sendMessage(' '+ "**```fix\n" + messagesDeleted + " " +  ': messages deleted!!' + "```**").then(m => m.delete(5000));
    })
    } else {
    let messagecount = parseInt(args[1]);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    message.channel.sendMessage(' '+ "**```fix\n" + args[1] + " " +  ': messages deleted!!' + "```**").then(m => m.delete(5000));
    message.delete(60000);
    }
    } else {
    var manage = new Discord.RichEmbed()
    .setDescription('You Do Not Have Permission MANAGE_MESSAGES :(')
    .setColor("RANDOM")
    message.channel.sendEmbed(manage)
    return;
    }
    }
    }); //iiMrSasukeDEV


    client.on('message', message => {
 
      if(message.content === prefix + "cclose") {
        if(!message.channel.guild) return message.reply(':rage:Dont **type the commands on the **Bot DMs**');
     
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__You dont have a permission__**');
             message.channel.overwritePermissions(message.guild.id, {
           SEND_MESSAGES: false
     
             }).then(() => {
                 message.reply("`#Channel muted successfully` :white_check_mark: ")
             });
               }
    //FIRE BOT
    if(message.content === prefix + "copen") {
      if(!message.channel.guild) return message.reply(':rage:Dont **type the commands on the **Bot DMs**');
     
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__You dont have a permission__**');
             message.channel.overwritePermissions(message.guild.id, {
           SEND_MESSAGES: true
     
             }).then(() => {
              message.reply("`#Channel unmuted successfully` :white_check_mark: ")
             });
               }
               
       
     
    });

client.on('message',message =>{
let command = message.content.split(" ")[0];
if (command == prefix + "deafen") {
if(!message.member.hasPermission('MUTE_MEMBERS')) return;
let user = message.mentions.members.first() || message.guild.members.get(message.content.split(" ")[1])
if(!user.voiceChannel) return message.channel.send(`**:rolling_eyes: This member isn't in a voicechannel**`)
user.setDeaf(true)
message.channel.send(`**:upside_down: Deafended successfully :headphones:  ${user}**`)
}
if (command == prefix + "undeafen") {
if(!message.member.hasPermission('MUTE_MEMBERS')) return;
let user = message.mentions.members.first() || message.guild.members.get(message.content.split(" ")[1])
if(!user.voiceChannel) return message.channel.send(`**:rolling_eyes: This member isn't in a voicechannel**`)
user.setDeaf(false)
message.channel.send(`**:grin: UnDeafended succesfully :loud_sound: ${user}**`)
}
});

const weather = require('weather-js');//npm install weather-js
client.on('message', message => {
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    if (message.content.startsWith(prefix + 'weather')) {
 
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            if (err) message.channel.send(err);
 
 
            var current = result[0].current;
            var location = result[0].location;
 
 
            const embed = new Discord.RichEmbed()
.setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86)
                .addField('Timezone',`UTC${location.timezone}`, true)
                .addField('Degree Type',location.degreetype, true)
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)
 
 
                message.channel.send({embed});
        });
    }
 
});


client.on('message', message => {
    if(message.content == prefix + "users") {
    const mkcode = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField(`All Users Count`,`
    - Users & Bots: ${client.users.size}
    - Users: ${client.users.filter(m =>!m.bot).size}
    - Bots: ${client.users.filter(m=>m.bot).size}`, true)
    .addField(`All Users Status`,`
    - Online: ${client.users.filter(m=>m.presence.status == 'online').size}
    - Offline: ${client.users.filter(m=>m.presence.status == 'offline').size}
    - Dnd: ${client.users.filter(m=>m.presence.status == 'dnd').size}
    - Idle: ${client.users.filter(m=>m.presence.status == 'idle').size}`, true)
        message.channel.send(`- <@${client.user.id}> Yuzuriha Inori Bot Users Informations\n- **Requested** by ${message.author}`,{embed: mkcode});
        }
});


let spaces = "                      "
client.on("message", msg => {
    if(msg.content.startsWith("~roles")) {
        const roles = []
            msg.guild.roles.forEach(c => {
            roles.push(c.name+spaces.substring(c.name.length)+c.members.size+" members");
        });
        msg.channel.send("\`\`\`"+roles.join("\n")+"\`\`\`");
    }
})

 




    client.on('message',message =>{
      let command = message.content.split(" ")[0];
      if (command == prefix + "nick") {
      if(!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`You Don't has premisson`)
      if(!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`**I Don\'t have \`MANAGE_NICKNAMES\` Permission**`)
      var user = message.guild.members.get(message.content.split(" ")[1]) || message.mentions.members.first();
      let MrNono = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send(`**:rolling_eyes: I can't find this member**`);
      if(!MrNono) {
      user.setNickname("",`By : ${message.author.tag}`)
      .catch(MrNoNo =>{});
      return message.channel.send(`**✅ ${user}'s nick has been reset.**`);
      }user.setNickname(MrNono,`By : ${message.author.tag}`)
      .catch(NoNo =>{});
      message.channel.send(`✅ Done changed ${user} nickname to **\`${MrNono}\`**`);}});

    client.on("message", msg => {
      const rooms = []
      msg.guild.channels.forEach(c => {
          if(c.type !== "voice") return;
          rooms.push(c.name);
   });
      let args = msg.content.split(" ").slice(1).join(" ")
      if(msg.content.startsWith(prefix+"moveme")){
          if(!msg.member.voiceChannel) return msg.channel.send("**⛔   You're not in voice channel! **");
          if(!args) return msg.channel.send("**⛔   Please be more specific**\`\`\`"+rooms.join("\n")+"\`\`\`");
          if(isNaN(args)){
              let channel = msg.guild.channels.find(ch => ch.name === args) || msg.mentions.members.first().voiceChannel;
              if(!channel) return msg.channel.send("**⛔   Please be more specific**\`\`\`"+rooms.join("\n")+"\`\`\`");
              msg.member.setVoiceChannel(channel).then(msg.channel.send("**✅  "+msg.author.username+" moved to "+channel+"!**"))
          } else {
              let channel = msg.guild.channels.get(args) || msg.guild.members.get(args).voiceChannel
              msg.member.setVoiceChannel(channel).then(msg.channel.send("**✅  "+msg.author.username+" moved to "+channel+"!**"));
    
          }
      }
   })

// warn code //


const moment = require("moment"); // npm i moment
const fs = require('fs'); // npm i fs
let warning = JSON.parse(fs.readFileSync('./warning.json' , 'utf8'));
client.on('message',message=>{
if(message.author.bot || message.channel.type == "dm"||!message.channel.guild) return;
let prefix = '~';
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
if(command == 'warn'){if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]}
let T = warning[message.guild.id].warns;
let user = message.mentions.users.first();if(!user)return message.channel.send(`**:rolling_eyes: I can't find this member**`)
let reason = message.content.split(" ").slice(2).join(" ");if(!reason) return message.channel.send(`**:rolling_eyes: Please specify a reason.**`)
let W = warning[message.guild.id].warns;
let ID = 0;let leng = 0;
W.forEach(w =>{ID++;
if(w.id !== undefined) leng++;
})
if(leng === 90) return message.channel.send(`** You Can't Give More than \`90\` Warns**, please reset the warn list.`)
T.push({user:user.id,by:message.author.id,reason:reason,time:moment(Date.now()).format('llll'),id:ID+1})
message.channel.send(`**✅ @${user.username} warned!**`);
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)});
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)});
user.send(new Discord.RichEmbed().addField('**:warning: You were warned!**',reason)
.setFooter(message.guild.name,message.guild.iconURL).setTimestamp().setColor('#fffe62'));return;}
if(command == 'warnings') {
if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]}
let count = 0;let page = message.content.split(" ")[1];if(!page || isNaN(page)) page = 1;if(page > 4) return message.channel.send('**Warnings are only recorded on 4 pages!**')
let embed = new Discord.RichEmbed().setFooter(message.author.username,message.author.avatarURL)
let W = warning[message.guild.id].warns;
W.forEach(w =>{if(!w.id) return;count++;
if(page == 1) {if(count > 24) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 24) embed.addField('**:sparkles: More ?**',`${message.content.split(" ")[0]} 2`);
}if(page == 2) {if(count <= 24) return null;if(count > 45) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 45) embed.addField('**:sparkles: More ?**',`${message.content.split(" ")[0]} 3`);
}if(page == 3) {if(count <= 45) return null;if(count > 69) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 69) embed.addField('**:sparkles: More ?**',`${message.content.split(" ")[0]} 4`);
}if(page == 4) {if(count <= 69) return null;if(count > 92) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 64) embed.addField('**FULL**',`** **`);}});
embed.setTitle(`**${count} Warnings** [ ${page}/4 ]`)
message.channel.send(embed)};
if(command == 'removewarn' || command == 'rm') {
if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]};
let args = message.content.split(" ")[1];if(!args) return message.channel.send(
`**:rolling_eyes: Please specify warning number or user mention or (all) to delete all warnings.**`);
let user = message.mentions.members.first();
if(user) {
let C = 0;let a = warning[message.guild.id].warns
a.forEach(w=>{
if(w.user !== user.id) return
delete w.user;delete w.reason;delete w.id;delete w.by;delete w.time;
C++;
})
if(C === 0) return message.channel.send(`**:mag: I can't find the warning that you're looking for.**`)
return message.channel.send('**✅ '+C+' warnings has been removed.**');
};
if(args == 'all') {
let c = 0;let W = warning[message.guild.id].warns; 
W.forEach(w =>{if(w.id !== undefined) c++;})
warning[message.guild.id] = {warns:[]};
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)})
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)})
return message.channel.send('**✅ '+c+' warnings has been removed.**')
}if(isNaN(args)) return message.channel.send(
    `**:rolling_eyes: Please specify warning number or user mention or (all) to delete all warnings.**`);
let W = warning[message.guild.id].warns;
let find = false;
W.forEach(w =>{
if(w.id == args) {
delete w.user;delete w.reason;delete w.id;delete w.by;delete w.time;
find = true;return message.channel.send('**✅ 1 warnings has been removed.**')
}});if(find == false) return message.channel.send(`**:mag: I can't find the warning that you're looking for.**`)}});




client.on('message', message =>{
  if(message.content.startsWith(prefix + 'addemoji')) {
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.channel.send('**Please type the emoji ID after the command!**')
    if(args.length < "18" || args.length > "18" || isNaN(args)) return message.channel.send(`**This emoji Can't be Found :x:**`)
    message.guild.createEmoji(`https://cdn.discordapp.com/emojis/${args}.png`, `${args}`).catch(mstry => {
     return message.channel.send(`**This emoji Can't be Found :x:**`)
    })
    message.channel.send(`**Successfully Added The Emoji ✅**`)
  }
});

var analyrics = require("analyrics"); //npm i analyrics
var hastebin = require('hastebin-gen'); //npm i hastebin-gen
analyrics.setToken("vQC2IQZ30BSOD664jJz7LKbUEy1It_qkNBWpCYR9WexY_xYhX0Tqzh4Y91dgT8eF");

client.on("message", async message => {
  if (message.content.startsWith("~lyrics")) {
    let args = message.content.split(" ").slice(1).join(" ");
    analyrics.getSong(args, function (song) {
      hastebin(song.title, "txt").then(r => {
        message.channel.send(`${song.title} **Lyrics in hastebin** : 
[ ${r} ]`)
      }).catch(console.error);
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`${song.lyrics}`)
        .setFooter(`**${song.title}` + " Song Lyrics**");
      message.channel.send(embed)
    });
  }
})

const ytScraper = require("yt-scraper"); // npm i yt-scraper
client.on('message', message => {
    if (message.content.startsWith(prefix + 'ytinfo')) {
      let args = message.content.split(" ").slice(1).join(" ");
      if(!args) return message.channel.send(`:rolling_eyes: **please type the channel link :link:**`)
      if(!args.includes("https://www.youtube.com/channel/")) return message.channel.send('**:face_with_monocle: | I Can\'t find This Channel 💢**')
    ytScraper.channelInfo(`${args}`).then(yt => {
        const embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setTitle(`**\`${yt.name}\`**'s channel Info`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/595057510436831252/youtube.png`)
        .addField(`**Subscribers**`, `${yt.subscribers}`,true)
        .addField(`**Views**`, `${yt.views}`,true)
        .addField(`**Created In**`, `${yt.joined}`,true)
        .addField(`**URL**`, `[__Click Here__](${yt.url})`,true)
        .addField(`**Description**`, `\`\`\`${yt.description}\`\`\``,true)
        .setFooter(`Requested by ${message.author.tag}`,message.author.avatarURL)
        .setTimestamp()
  message.channel.send({embed});
 
    })
}
});

const coolDown = new Set();
 
client.on("message", message => {
 const args = message.content.split(' ');
  const credits = require('./creditsCode.json');
  const path = './creditsCode.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "money")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}money`) return;
 
  if(args[2]) {
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the money you need to transfer! **`);
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} I can't find**`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| You can transfer the money to yourself**');
    if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, Write the number to complet**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:money_with_wings:  | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_mouth: | Transfering cancled**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
    message.channel.send(`**${mention.username}, your :moneybag:  money balance is** \`$${credits[mention.id].credits}\`**.** `);
  }
 
  }
        if(args[0].toLowerCase() === `${prefix}daily`) {  
     
if(credits[message.author.id].daily != moment().format('L')) {
 
       credits[message.author.id].daily = moment().format('L');
           
 
          let ammount = (300, 500, 100, 200, 120, 150, 350, 320,220,250);
          credits[author].credits += ammount;
       
       
          message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily money!**`);
        fs.writeFile("./creditsCode.json", JSON.stringify(credits), function(e) {
            if (e) throw e;
        })
 
      }else{
      message.channel.send(`:stopwatch: : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
      }
   
        }
         
   
 
});

      



  // fun codes! //
 

var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
      if(!message.channel.guild) return message.reply(':rage:Dont **type the commands on the **Bot DMs**');(':rage:Dont **type the commands on the **Bot DMs**');
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message', message => {
  if (message.content === prefix + 'cat') {
    message.react(`🐱`)
      message.channel.sendFile("http://thecatapi.com/api/images/get?format=src&type=png", "mystery-cat.png")
  }
 });

 client.on('message', message => {
  if (message.content.startsWith(prefix + "movie")) {
      let Movie21 = message.member.roles.find("name", "Movie")
if(!Movie21) return message.channel.send("**Ops :sweat_drops: . . .** This command for **Movie** role only :bangbang:")
     
      let filter = m => m.author.id === message.author.id;
     
      let namee;
      message.channel.send('**Please name the movie :slight_smile: **').then(msg => {

          message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
              })
              .then(collected => {
                  collected.first().delete();
                  namee = collected.first().content;
                  let pic;
                  msg.edit('**Please place your movie picture :slight_smile: **').then(msg => {
                      message.channel.awaitMessages(filter, {
                              max: 1,
                              time: 90000,
                              errors: ['time']
                          })
                          .then(collected => {
                              collected.first().delete();
                              pic = collected.first().content;
                              let dis;
                              msg.edit('**Please place the movie description :slight_smile: **').then(msg => {
                                  message.channel.awaitMessages(filter, {
                                          max: 1,
                                          time: 90000,
                                          errors: ['time']
                                      })
                                      .then(collected => {
                                          collected.first().delete();
                                          dis = collected.first().content;
                                          let old;
                                          msg.edit('**Please put the parental control film :slight_smile: **').then(msg => {
                                              message.channel.awaitMessages(filter, {
                                                      max: 1,
                                                      time: 90000,
                                                      errors: ['time']
                                                  })
                                                  .then(collected => {
                                                      collected.first().delete();
                                                      old = collected.first().content;
                                                      let timee;
                                                      msg.edit('**Please place the movie premiere :slight_smile: **').then(msg => {
                                                          message.channel.awaitMessages(filter, {
                                                                  max: 1,
                                                                  time: 90000,
                                                                  errors: ['time']
                                                              })
                                                              .then(collected => {
                                                                  collected.first().delete();
                                                                  timee = collected.first().content;
                                                                  let year;
                                                                  msg.edit('**Please place your movie release year :slight_smile: **').then(msg => {
                                                                      message.channel.awaitMessages(filter, {
                                                                              max: 1,
                                                                              time: 90000,
                                                                              errors: ['time']
                                                                          })
                                                                          .then(collected => {
                                                                              collected.first().delete();
                                                                              year = collected.first().content;
                                                                              let link;
                                                                              msg.edit('**Please place the movie link :slight_smile: **').then(msg => {
                                                                                  message.channel.awaitMessages(filter, {
                                                                                      max: 1,
                                                                                      time: 90000,
                                                                                      errors: ['time']
                                                                                  })
                                                                                   .then(collected => {
                                                                              collected.first().delete();
                                                                              link = collected.first().content;
                                                                              let t9nef ;
                                                                              msg.edit('**Please place the movie label :slight_smile: **').then(msg => {
                                                                                  message.channel.awaitMessages(filter, {
                                                                                      max: 1,
                                                                                      time: 90000,
                                                                                      errors: ['time']
                                                                                  })
                                                                                   .then(collected => {
                                                                              collected.first().delete();
                                                                              t9nef = collected.first().content;
                                                                              let tqem ;
                                                                              msg.edit('**Please place a movie rating**').then(msg => {
                                                                                  message.channel.awaitMessages(filter, {
                                                                                      max: 1,
                                                                                      time: 90000,
                                                                                      errors: ['time']
                                                                                  })
                                                                                 
                                                                                  .then(collected => {
                                                                              collected.first().delete();
                                                                              tqem = collected.first().content;
                                                                              let icone ;
                                                                              msg.edit('**Please put the site logo**').then(msg => {
                                                                                  message.channel.awaitMessages(filter, {
                                                                                      max: 1,
                                                                                      time: 90000,
                                                                                      errors: ['time']
                                                                                  })
                                                                                 
                                                                                          .then(collected => {
                                                                                              collected.first().delete();
                                                                                              icone = collected.first().content;
                                                                                              let Fuke ;
                                                                                              msg.edit('**:white_check_mark: Information has been sent**').then(msg => {
                                                                                                  message.channel.awaitMessages(filter, {
                                                                                                      max: 1,
                                                                                                      time: 90000,
                                                                                                      errors: ['time']
                                                                                                  })
                                                                                                  //client.channels.get('637588422340640768').send('@here')
                                                                                                  let embed = new Discord.RichEmbed()
                                                                                           
                                                                                            .addField('**movie name**', `${namee}`)
                                                                                            .addField('**the story of the movie**', `${dis}`)
                                                                                            .addField('**Movie Rating**', `${t9nef}`,true)
                                                                                            .addField('**Rate the movie**', `${tqem}/10`,true)
                                                                                            .addField('**Date of presentation**', `${year}`,true)
                                                                                            .addField('**Duration of the film**', `${timee} Min`,true)
                                                                                            .addField('**Parental control**', `+${old}`,true)
                                                                                            .setTitle('Movie Link')
                                                                                            .setURL(`${link}`)
                                                                                            .setImage(`${pic}`)
                                                                                            .setThumbnail(`${icone}`)
                                                                                            .setFooter(`${message.author.tag}`, message.author.avatarURL)
                                                                                           
                                                                                            client.channels.get('635504501465546762').send(embed)
                                                                                            .then(async msg=>{
                                                                                            await msg.react('☑');
                                                                                            await  msg.react('❌');
                                                                                            });                                          
                                                                                          })
                                                                                      })
                                                                                  })
                                                                              })
                                                                          })
                                                                      })
                                                                  })
                                                              })
                                                          })
                                                      })
                                                  })
                                              })
                                          })
                                      })
                                  })
                              })
                          })
                      })
                  })
              })
          })
     
     
 

}




});

client.on ('message', async (Message) => {
  var defineduser = Message.author.username;
 let filter = r => r.author.id === Message.author.id;
  var TAJRAS;
  var prix;
  var transfer;
  var winner;
  var Images = [{
    url: 'https://cdn.discordapp.com/attachments/634466872007327764/642335373111984128/taj.png',
    name: 'head'
  }, {
    url: 'https://cdn.discordapp.com/attachments/634466872007327764/642335372541558794/ras.png',
    name: 'star'
  }],
      Image = Images[Math.floor (Math.random () * Images.length)];
  if (Message.content != prefix + 'coinflip' )  return undefined;
else
   Message.channel.send('**♦ Star or Head  **');   
     var c = await Message.channel.awaitMessages(filter, {
      max: 1,
      time: 90000,
      errors: ["time"]
    });
TAJRAS = c.first().content;
var Words_fail = [
  ":diamonds: Noob ;d",
  ":diamonds: Do not try to",
  ":diamonds: Oh shit here we go again",
  ":diamonds: HaHaHaHa",
];
var hehe = Words_fail[Math.floor (Math.random () * Words_fail.length)];
var Words_win = [
  ":diamonds: Lucky",
  ":diamonds: Oh my good",
  ":diamonds: You are a hero",
  ":diamonds: Good boy",
];
var kfo = Words_win[Math.floor (Math.random () * Words_win.length)];
let win;
if (TAJRAS == Image.name) { win = defineduser + kfo ; } else { if (TAJRAS != Image.name) win = defineduser + hehe};
Message.channel.send (new (require ('discord.js')).RichEmbed ()
      .setColor("#5f5b5b")
      .setTitle(win)
      .setThumbnail(Message.author.avatarURL)
      .setAuthor(`${defineduser}`, `${Message.author.avatarURL}`)
      .setFooter(`${defineduser}`, `${Message.author.avatarURL}`)
      .setImage (Image.url)
      .setDescription (`**${Image.name}**`));
});

client.on("message", async function (message) {
if(message.author.bot) return;
if(!message.guild) return;
var args = message.content.split(" ");
var cmd = args[0].slice(prefix.length).toLowerCase();
if(!message.content.startsWith(prefix)) return;
switch (cmd) {
case 'mute':
let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
if(!tomute) return message.reply("**❌ | Couldn't find user**");
if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("**❌ | I Can't mute them!**");
if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(`**❌ | You don\'t have permission**`)
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send(`**❌ | I don\'t have permission**`)
let muterole = message.guild.roles.find(`name`, "Muted by Yazuriha-bot");
if(!muterole){
try{
muterole = await message.guild.createRole({
name: "Muted by Yazuriha-bot",
color: "#000000",
permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
await channel.overwritePermissions(muterole, {
SEND_MESSAGES: false,
ADD_REACTIONS: false
});
});
}catch(e){
console.log(e.stack);
}
}
let mutetime = args[2];
if(!mutetime) return message.reply("**❌ | Please type time :timer:**");
await(tomute.addRole(muterole.id));
message.reply(`**<@${tomute.id}> has been muted for ${ms(ms(mutetime))} **`);
setTimeout(function(){
tomute.removeRole(muterole.id);
message.channel.send(`**<@${tomute.id}> has been unmuted!**`);
}, ms(mutetime));
break;
}
});




// Others Codes! //

client.on('message', message => {
  if (message.content.startsWith(prefix + 'vote')) {
      if (message.author.bot) return
      if (!message.guild) return message.reply('**:x: This Commands Just In Server**')
      let Room = message.guild.channels.find(`name`, "vote")
      if (!Room) return message.channel.send(`**Error** :octagonal_sign:\n**I Can't find the __votes__ Channel**`)
    if(!Room.permissionsFor(client.user).has(['SEND_MESSAGES','READ_MESSAGES','EMBED_LINKS'])) return message.channel.send(`**Error** :octagonal_sign:
I Don\'t have Permissions on the votes channel`)
 
    var args =  message.content.split(' ').slice(1).join(' ')
    if (!args) return message.reply('**Please type your `vote announce` after the command**')
    let embed = new Discord.RichEmbed()
    .setColor('#0e0c0c')
   .setAuthor(`New vote by ${message.author.username}`, 'https://media.discordapp.net/attachments/584630360017469461/584661803003281408/72-512.png?width=375&height=375')
      .addField(`vote :`,`**${args}**`)
      .setThumbnail(message.author.avatarURL)
      .setTimestamp();
      Room.sendEmbed(embed).then(c => {
          c.react('👍').then(() =>
              c.react('👎'))
const sug = new Discord.RichEmbed()
.setColor(0x00e2f3)
.setAuthor(`**Done your vote announce was sent**`, 'https://media.discordapp.net/attachments/584630360017469461/584632506930823199/582246841186254869.png')
message.channel.sendEmbed(votes)
////
})
}
});



// Media Codes //


// Bot owner! //



  client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix+ `topserver`))  {
  
  const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
  message.channel.send(`**Top 10 Servers : **\n1. **${top[0].name}**: ${top[0].memberCount} \n2. **${top[1].name}**: ${top[1].memberCount}.\n3. **${top[2].name}**: ${top[2].memberCount}.\n4. **${top[3].name}**: ${top[3].memberCount}.\n5. **${top[4].name}**: ${top[4].memberCount}.\n6. **${top[5].name}**: ${top[5].memberCount}.\n7. **${top[6].name}**: ${top[6].memberCount}.\n8. **${top[7].name}**: ${top[7].memberCount}.\n9. **${top[8].name}**: ${top[8].memberCount}.\n10. **${top[9].name}**: ${top[9].memberCount} .`)
  }
    });
  
   client.on("message", message => {
      if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
          if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
          message.delete();
          message.reply(`you sent your token! Do not worry you've deleted it`);
          return;
      }
                                if(message.channel.type === "dm"){
      if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
          message.delete();
          message.reply(`you sent your token! Do not worry you've deleted it`);
          return;
      }
  }
  });



// Special Codes //

const { getInfoFromName } = require('myanimelists');
 
 
          client.on('message', message => {
            let anime = message.content.split(" ").slice(1).join(" ")
            if(message.content.startsWith(prefix + 'anime')) {
            getInfoFromName(anime)  
                .then(result => {
                    let embed = new Discord.RichEmbed()
                .setTitle(result.title)
                .addField('Trailer:', `${result.trailer}` || `Unknown`)
                .addField('Episodes:', `${result.episodes}` || `Unknown`)
                .addField('Status:', `${result.status}` || `Unknown`)
                .addField('Studios:', `${result.studios}` || `Unknown`)
                .addField('Genres:', `${result.genres}` || `Unknown`)
                .addField('Ranked:', `${result.ranked}` || `Unknown`)
                .addField('Favorites', `${result.favorites}` || `Unknown`)
                .addField('Rating:', `${result.rating}` || `Unknown`)
                .addField('Premiered:', `${result.premiered}` || `Unknown`)
                .addField('Duration:', `${result.duration}` || `Unknown`)
                .addField('Score:', `${result.score}` || `Unknown`)
                .addField('Scored By:', `${result.scoreStats} ` || `Unknown`)
                .setDescription(`${result.synopsis || 'Unknown'}`)
                .setImage(result.picture)  
                .setColor('#0a0000')
                message.channel.sendEmbed(embed)
                })
                .catch(error => console.log(error));
            }})



 


// Codes added //

client.on("message", async message => {
    if (message.content.startsWith(prefix + "submit")) {
      if (!message.channel.guild) return message.reply(" ");
   
      let rank = message.guild
        .member(message.author)
        .roles.find("name", "@everyone");
   
      if (!rank)
        return message.channel.send(
          "🛑 **| You need the ' Online role! **"
        );
   
      let jscodes = message.guild.channels.find(`name`, "bug-approval-queue");
   
      if (!jscodes)
        return message.channel.send("**❌ | I can't find the bugs #Channel!**");
   
      let filter = m => m.author.id === message.author.id;
   
      let thisMessage;
   
      let thisFalse;
   
      message.channel.send("📝 **| Please , write your report!... ✏ **").then(msg => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
   
            time: 90000,
   
            errors: ["time"]
          })
   
          .then(collected => {
            collected.first().delete();
   
            thisMessage = collected.first().content;
   
            let boi;
   
            msg.edit("📜 **| Please , write a short description of your report... ✏ **").then(msg => {
              message.channel
                .awaitMessages(filter, {
                  max: 1,
   
                  time: 90000,
   
                  errors: ["time"]
                })
   
                .then(collected => {
                  collected.first().delete();
   
                  boi = collected.first().content;
   
                  let boi2;
   
                  msg
                    .edit("🤵 **| Please , write your #Username... ✏ **")
                    .then(msg => {
                      message.channel
                        .awaitMessages(filter, {
                          max: 1,
   
                          time: 90000,
   
                          errors: ["time"]
                        })
                         
                      .then(collected => {
                        collected.first().delete();
 
                        boi2 = collected.first().content;
 
                        msg.edit(
                          "🛡 **| You want send your report [ Yes | No ]**"
                        );
 
                        message.channel
                          .awaitMessages(
                            response =>
                              response.content === "Yes" || ("No" && filter),
                            {
                              max: 1,
 
                              time: 90000,
 
                              errors: ["time"]
                            }
                          )
 
                          .then(collected => {
                            if (collected.first().content === "No") {
                              msg.delete();
 
                              message.delete();
 
                              thisFalse = false;
                            }
 
                            if (collected.first().content === "Yes") {
                              if (thisFalse === false) return;
 
                              msg.edit(
                                "🕊 **| Done ✅, The report has been sended successfully **"
                              );
 
                              collected.first().delete();
 
                              jscodes.send(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
** <Lemonade> ⬇**
\`\`\`css
${thisMessage}\`\`\`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**Report**: ${boi}
**Sended By**: ${message.author}
**Username**: ${boi2}`);
                            }
                          });
                      });
                  });
              });
          });
        });
    });
  }
}); // alright reserved to SasukeDEV //




// logs code //


client.on('message',message =>{
if(!message.guild) return;
if(message.author.id == client.user.id) return;
var log = message.guild.channels.find(c => c.name === 'logs');
if(!log) return;
if(message == '') return;
log.send(`> **#${message.channel.name} \`>\` ${message.author.tag}**: ${message}`)
});

client.on('message', message => {
    const swearWords = ["oooooo"]; 
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
        message.author.send('**Hey! That word has been banned, please don\'t use it!**');
      }
})



 





client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` You are panished by **Yuzuriha Inori Bot** because you share another server link #here`');
   
       
    }
})



client.on('message', message => {
  if(message.content.startsWith(`<@${client.user.id}>`)) {
    if(message.author.bot || message.channel.type == "dm") return
    let mention = new Discord.RichEmbed()
    .setColor('BLUE')
    .setDescription(`**Hey There, I'm Yuzuriha Inori Bot Wanna Check My Awesome Commands😍 \n try to type \`${prefix}help\`**`)
    message.channel.send(mention)
  }
});



// Free Primium //















    



// token //

client.login('');

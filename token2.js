const { Client, MessageEmbed } = require('discord.js-selfbot-v13')
const { joinVoiceChannel } = require('@discordjs/voice');
const { voicechannelid } = require('./config.json');
const { token2 } = require('./config.json');
const { customstatus } = require('./config.json');

const client = new Client({
    checkUpdate: false
   });
   
   client.on("ready", async () => {
    console.log(`${client.user.tag} giriş yapıldı!`);
    client.user.setActivity(customstatus);
    let channel = client.channels.cache.get(voicechannelid);
   
    client.guilds.cache.forEach(guild => {
       console.log(`Sunucu İsmi: ${guild.name}`);
       console.log(`Kişi Sayısı: ${guild.memberCount}`);
       const botMember = guild.members.cache.get(client.user.id);
       console.log(`Botun Yetkileri: ${botMember.permissions.toArray().join(', ')}`);
       
       console.log("-------------------------------------------");
   });
     
    if (channel) {
      const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator
      });
   
      connection.on('stateChange', (state) => {
        return;
      });
   
      connection.on('error', (error) => {
        return;
      });
   
      console.log(`Bot ses kanalına katıldı: ${channel.id}`);
    } else {
      console.error('Ses kanalı bulunamadı lütfen config.jsondan seskanal idyi ayarlayın veya değiştirin.');
    }
   });

client.login(token2)
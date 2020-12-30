const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js'); 
const client = new Client;
const embed = new MessageEmbed();

client.once('ready', () => {
    console.log('Konnichiwa, watashi wa aqua onraindesu!'); 
    client.channels.fetch('791999722394877964')
    .then(channel => {
        embed.setAuthor('Konnichiwa, watashi wa aqua onraindesu!').setColor(5814783);
        channel.send(embed);
    })
});

client.login('NzkzNDYyNzQ0NTM5ODU2OTE3.X-snxA.oiDVhbF2bTz3u1gpt8Xy3wJV5ek');
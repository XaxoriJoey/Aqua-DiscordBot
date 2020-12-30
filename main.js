const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js'); 
const client = new Client;
const embed = new MessageEmbed();
const token = process.env.DISCORD_BOT_SECRET;

client.once('ready', () => {
    console.log('Konnichiwa, watashi wa aqua onraindesu!'); 
    client.channels.fetch('791999722394877964')
    .then(channel => {
        embed.setAuthor('Konnichiwa, watashi wa aqua onraindesu!').setColor(5814783);
        channel.send(embed);
    })
});

client.login('token');

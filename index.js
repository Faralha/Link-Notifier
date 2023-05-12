const fs = require('node:fs');
const path = require('node:path');
const { member, Client, Collection, Events, GatewayIntentBits, EmbedBuilder, GuildMember } = require('discord.js');
const {token} = require('./token.json');

//import ip and port from json
let json = require('./get.json');
const moment = require('moment');

const PREFIX = '!';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c => {
    console.log('Ready!');
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return
    }

    if (interaction.commandName === 'test') {
        interaction.reply('Test berhasil')
    }

    if (interaction.commandName === 'link') {
        function localDate(){
            return moment().format('dddd') + ", " + moment().format('Do MMMM YY')
        };
        const linkEmbed = new EmbedBuilder()
            .setColor(5763719)
            .setTitle(json.ip)
            .setDescription(localDate())
        interaction.reply({embeds: [linkEmbed]});
    };

    if (interaction.commandName === 'start') {
        if (interaction.memberPermissions.has('Administrator')) {
            interaction.reply('Kamu adalah admin');
        };
        interaction.reply('Kamu bukan admin');
    };
});

client.login(token)
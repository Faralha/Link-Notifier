const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
let json = require('../get.json');
const tcp = require('tcp-ping');
const childProcess = require('node:child_process');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('link')
        .setDescription('Menampilkan link terkini server Minecraft'),
    async execute(interaction) {
        const linkServer = new Promise(function(nyala, mati) {
            tcp.probe('127.0.0.1', '25565', function(err, available){
                if(available === true) {
                    nyala(json.ip)
                } else {
                    mati('Server Offline!')
                }
            })
        })

        linkServer.then(
            function(value){
                const linkEmbed = new EmbedBuilder()
                    .setColor(5763719)
                    .setTitle(value)
                    .setDescription("Last Refreshed : " + json.timestamp)
                return interaction.reply({embeds: [linkEmbed]});
            },
            function(error){
                const serverMati = new EmbedBuilder()
                    .setColor(15548997)
                    .setTitle(error)
                    .setDescription(`Hubungi admin/mods untuk menghidupkan server!`)
                interaction.reply({embeds: [serverMati]})
            }
        )
    },
};
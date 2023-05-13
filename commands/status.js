const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const tcp = require('tcp-ping');
const json = require('../get.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Status server Minecraft'),
    async execute(interaction) {
        const statusServer = new Promise(function(nyala, mati) {
            tcp.probe('127.0.0.1', '25565', function(err, available) {
                if (available === true) {
                    nyala('Server Online!')
                } else {
                    mati('Server Offline!')
                }
            })
        })

        statusServer.then(
            function(value){
                const serverNyala = new EmbedBuilder()
                    .setColor(5763719)
                    .setTitle(value)
                    .setDescription('Sedang Online di IP ' + json.ip)
                interaction.reply({embeds: [serverNyala]})
            },
            function(error){
                const serverMati = new EmbedBuilder()
                    .setColor(15548997)
                    .setTitle(error)
                    .setDescription('Hubungi admin/mods untuk menghidupkan server!')
                interaction.reply({embeds: [serverMati]})
            }
        )
    }    
}
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
let json = require("./get.json");
const moment = require("moment")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('link')
        .setDescription('Menampilkan link terkini server Minecraft'),
    async execute(interaction) {
        function localDate(){
            return moment().format('dddd') + ", " + moment().format('Do MMMM YY')
        };
        const linkEmbed = new EmbedBuilder()
            .setColor(5763719)
            .setTitle(json.ip)
            .setDescription(localDate())
        return interaction.reply({embeds: [linkEmbed]});
    },
};
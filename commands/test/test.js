const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test'),
    async execute(interaction) {
        return interaction.reply('Test berhasil!')
    },
};
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start')
        .setDescription('Start server Minecraft. Sementara hanya diperbolehkan untuk admin/mods')
        .setDefaultMemberPermissions(0x0000000000000008),
    async execute(interaction) {
        return interaction.reply('Kamu adalah admin!')
    },
}
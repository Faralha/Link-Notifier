require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'test',
        description: 'A test commands',
    },
    {
        name: 'link',
        description: 'Menampilkan link terkini server Minecraft'
    },
    {
        name: 'start',
        description: 'Start server Minecraft. Sementara hanya diperbolehkan untuk admin/mods'
    },
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering Slash Commands...');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );

        console.log('Slash command was registered succesfully!');
    } catch (error) {
        console.log(`There was an error: ${error}`);
    };
})();
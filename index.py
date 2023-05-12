import discord
from discord.ext import commands
import ngrok_info

intents = discord.Intents.default()
intents.message_content = True

Bot = discord.Client(intents=intents)

bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    await bot.change_presence(activity=discord.Activity(type=discord.ActivityType.listening, name='!link'))

@bot.command()
async def link(ctx):
    ngrok_info.get_notext()
    getInfo = ngrok_info.adress + ':' + ngrok_info.port
    await ctx.send(getInfo)


bot.run('A')

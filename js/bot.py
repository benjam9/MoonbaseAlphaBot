# bot.py
import os
import random
import requests

from discord.ext import commands
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

bot = commands.Bot(command_prefix='?')

@bot.command(name='say')
async def say(ctx, inpMsg):
    mbUrl = 'http://tts.cyzon.us/tts?text=' + inpMsg
    response = requests.get(mbUrl)
    await ctx.send(response.url)
    
bot.run(TOKEN)
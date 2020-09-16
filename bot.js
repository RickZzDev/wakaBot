const Discord = require('discord.js')

const client = new Discord.Client()

const config = require('./config.json')
const { FONT_SANS_32_BLACK } = require('jimp')


client.on("ready", ()=>{
    console.log("O bot foi iniciado")
    // client.user.setGame(`Eu estou em ${client.guilds.size} servidores`)
})


client.on('guildMemberAdd', async member => {
    // var channel = member.guild.channels.find(ch => ch.name === 'Frozen');
    let channel = client.channels.cache.get('722973415128170601')
    // channel.send(``, {files:['./assets/imgBot.jpg']})
    channel.send(`>>> Olá ${member.user.username}, seja muito bem vindo ao nosso servidor do discord ${member.guild.name}\n \nPara comunicação geral utilizamos o canal de texto ou voz 'general' da categoria 'GENERAL CHANNELS'\n \nPara comunicação dos nossos devs temos os canais de texto e voz divididos por clientes, quaisquer comunicações ou assuntos referentes a essses clientes em específico favor tratar dentro desses canais.\n \nSinta-se em casa, Yibambé!`,FONT_SANS_32_BLACK)


})


client.login(config.token)

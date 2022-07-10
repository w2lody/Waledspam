const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "570952802482782218"; // ايدي السررفر
var channel = "617152221070491658";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send(' Relo the best ')
    },305);
})

client.login(process.env.BOT_TOKEN);

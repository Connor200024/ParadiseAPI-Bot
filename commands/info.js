//Start of Const Stuff!
const { MessageEmbed } = require ('discord.js');
//End of Const Stuff!

module.exports.run = async (client, message, args) => {
try {
message.delete().catch()
var milliseconds = parseInt((client.uptime % 1000) / 100),
seconds = parseInt((client.uptime / 1000) % 60),
minutes = parseInt((client.uptime / (1000 * 60)) % 60),
hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
hours = (hours < 10) ? "0" + hours : hours;
minutes = (minutes < 10) ? "0" + minutes : minutes;
seconds = (seconds < 10) ? "0" + seconds : seconds;
const getEmbed = new MessageEmbed()
.setTitle("Bot Information:")
.setAuthor("Paradise API Info:", client.config.embed_image)
.setColor(client.config.embed_color)
.addField("Name:", `${client.user.tag}`, true)
.addField("Developers:", "Paradise Development Team", true)
.addField("Uptime:", `${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`, true)
.addField("Latency:", `${client.ws.ping}ms`, true)
.addField("Bot Version:", 'v0.0.1', true)
.addField("API Version:", 'v1.10.0', true)
.addField("GitHub Link:", '[Click Me](https://github.com/ParadiseBotList/ParadiseAPI-Bot)', true)
.setTimestamp()
return message.channel.send(getEmbed)
} catch (e) {
const errorMessage = new MessageEmbed()
.setAuthor("(500) Internal Server Error:", client.config.embed_image)
.setDescription("An error occured while executing this command!")
.setColor(client.config.embed_color)
.addField('Error Message:', `${e.message}`)
.setTimestamp()
return message.channel.send(errorMessage);
}
} 
module.exports.help = {
name: "info",
category: "Information",
aliases: ['about'],
description: "Shows you some info about me!",
example: "api.info"
}
module.exports.requirements = {
userPerms: [],
clientPerms: ["EMBED_LINKS"],
ownerOnly: false
}
module.exports.limits = {
rateLimit: 2,
cooldown: 1e4
}

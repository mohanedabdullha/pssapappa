const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";

client.on('guildMemberAdd', member=> {

    client.channels.get("506518353855119402").send(`***__ Welcome To Server Magic${member}___***`);

});
client.login(process.env.BOT_TOKEN);

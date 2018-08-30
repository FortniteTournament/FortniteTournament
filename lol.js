const Discord = require("discord.js")
const token = process.env.token

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Prochain Tournoit // du // ");
    console.log("Le bot c'est connecter ");
});

bot.login(token);

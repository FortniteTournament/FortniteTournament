const Discord = require("discord.js")

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Prochain Tournoit // du // ");
    console.log("Le bot c'est connecter ");
});

bot.login("NDg0NzAxNTczNjA0MzExMDUz.Dml1xg.SN1kTwlTqMl2KZXBCi9Y5HG5R2g");
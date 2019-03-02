const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const token = process.env.token

client.commands = new Discord.Collection();

fs.readdir("./commands/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {
        let commande = require(`./commands/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events chargés`);

    f.forEach((f) => {
        const events = require(`./events/${f}`);
        const event = f.split(".")[0];

        client.on(event, events.bind(null, client));
    });
});

client.login(token);
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;

    message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Statistiques du l'utilisateur **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                name: "> ID :",
                value: membre.id 
                },
                {
                    name: "Crée le :",
                    value: membre.user.setTimestamp.createdAt
                },
                {
                    name: "Jeu :",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Aucun jeu"}`
                },
                {
                    name: "Rejoin le :",
                    value: membre.joinedAt
                }
            ],
            footer: {
                text: `Informations de l'utilisateur ${membre.user.username}`
            }
        }
    })

};

module.exports.help = {
    name: "stats"
}
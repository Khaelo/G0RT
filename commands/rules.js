const Discord = require('discord.js');

var rules1 = new Discord.RichEmbed()
        .addField("Rules (1/2):", "---------------------------------------------------------------------------------------\n" +
                                  "__**1.**__ Pas de spam ou de flood avec des messages, symbols ou photos, etc. \n" +
                                  "__**2.**__ Pas de messages en FULL MAJUSCULES, GRAS ou Italique sauf si vous êtes Admin. \n" +
                                  "__**3.**__ Les messages à caractère sexuel et choquant sont totalement interdit !\n" +
                                  "__**4.**__ Pas de contenu content des injures raciales, homophobes etc..\n" +
                                  "__**5.**__ No excessively cursing. \n" +
                                  "__**6.**__ Les pubs pour les Discord/Web sont totalement interdites ! \n" +
                                  "__**7.**__ Aucune publication de liens externes autres que des liens directs vers YouTube !\n", true)

        .setColor("0x#d81913")

var rules2 = new Discord.RichEmbed()
        .addField("Rules (2/2):", "__**8.**__ Ne pas utiliser le pseudo d'un autre utilisateur et/ou se faire passer pour lui ! \n" +
                                  "__**9.**__ L'abus de demande de grade est interdite ! \n" +
                                  "__**10.**__. Pas de noms offensants ni de noms contenant des gros mots. \n" +
                                  "__**11.**__ Une décission prise par un membre du staff/modo est définitive et donc ne sont pas discutables ! \n" +
                                  "__**12.**__ Ne pas envoyer de message à plusieurs reprises aux staff/modérateurs ou aux administrateurs sans autorisation.\n" +
                                  "__**13.**__ Ne pas envoyer de message aux staff/modérateurs contenant des questions \"STUPIDES\" \n" +
                                  "---------------------------------------------------------------------------------------\n", true)

        .setColor("0x#d81913")

module.exports.run = async (bot, message, args) => {

            message.channel.send(rules1)
            message.channel.send(rules2)

              .then(function (message) {
                message.react("Bin2:362263530424107009")
              })

}

module.exports.help = {
    name: "GoH"
}
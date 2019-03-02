const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let memberInfo = message.mentions.members.first();

  if(!memberInfo){
    var userinf = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setDescription(`Statistiques de l'utilisateur **${message.author.username}**`)
        .setColor(0xe43333)
        .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID:", message.author.id)
        .addField("Jeu:", `${message.author.user.game ? `${message.author.user.game.name}` : "Aucun jeu"}`)
        .addField("Created At:", message.author.createdAt)

        message.channel.send(userinf);

  }else{

    var userinfoo = new Discord.RichEmbed()
        .setAuthor(memberInfo.displayName)
        .setThumbnail(memberInfo.user.avatarURL)
        .setDescription("This is the user's info!")
        .setColor(0xe43333)
        .addField("Full Username:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
        .addField("ID:", memberInfo.id)
        .addField("Jeu:", `${memberInfo.user.game ? `${memberInfo.user.game.name}` : "Aucun jeu"}`)
        .addField("Created At:", memberInfo.user.createdAt)

        message.channel.send(userinfoo);
  }
}

module.exports.help = {
    name: "stats"
}
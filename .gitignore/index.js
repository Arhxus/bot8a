const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = ('!')

bot.on('guildMemberAdd', function (member){
	//const channel_bvn = member.guild.channels.find('bienvenue');
	//channel_bvn.send(`Bienvenue ${member} !`);
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue ' + member.displayName +"sur le serveur Agalia!/nJe suis le bot Twix, je t'aiderais sur ce serveur !/nSi tu as des question fait " + prefix + "help")
    }).catch(console.error);
})

bot.on('guildMemberAdd', member => {
	console.log('Check de ' + member.user.username)
	var role = member.guild.roles.find('name', 'Joueurs');
	member.addRole(role)
});

bot.on('ready', function (channel) {
    bot.user.setActivity(`Agalia.tdc`).catch(console.error)
    bot.user.setUsername('Agalia').catch(console.error)
    console.log("Le bot à bien demarré !")
})

bot.on("guildCreate", guild => {
  console.log(`Nouveau serveur rejoint !: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

bot.on("guildDelete", guild => {ld.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});


bot.on('message', function (message) {
    if (message.content === prefix +'ping') {
        message.reply('pong !')
    }
    if (message.content === prefix + 'help') {
        message.reply('Le message d''aide n''est pas encore définie !\nVeuillez patientez !')
    }
        
})



bot.login('process.env.TOKEN')

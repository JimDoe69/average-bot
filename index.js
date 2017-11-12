const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('guildMemberAdd', function(member) {
    member.guild.channels.find('name', 'general').sendMessage(member.toString() + ' Welcome To Our Discord, You Are Now A Member!!');

    member.addRole(member.guild.roles.find('name', 'Member'));
});





                          

bot.login('Mzc3OTU1ODgxNDYwOTU3MTg2.DOUeWw._exTeE8KstkLD32Y_l4WU1Scdw0');

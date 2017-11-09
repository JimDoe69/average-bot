const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('guildMemberAdd', function(member) {
    member.guild.channels.find('name', 'general').sendMessage(member.toString() + ' Welcome To The Average Discord, You Are Now A Member!!');

    member.addRole(member.guild.roles.find('name', 'Member'));
});

bot.on('message', (message) => {

    if(message.content == 'chodey') {
        // message.reply('cody');
        message.channel.sendMessage('cody');
    } 

});

bot.on('message', (message) => {
    
        if(message.content == '!gnome') {
            // message.reply('Im not supposed to tell you this but brandino has a fetish for gnomes.');
            message.channel.sendMessage('Im not supposed to tell you this but brandino has a fetish for gnomes.');
        } 
    
    });

bot.on('message', (message) => {
        
         if(message.content == '!autism') {
              message.reply('https://www.autismspeaks.org');
        } 
        
    });

 bot.on('message', (message) => {
                
         if(message.content == '!bai') {
             // message.reply('Get baited bitch!');
            message.channel.sendMessage('Get baited bitch!');
         } 
                
     });

 bot.on('message', (message) => {
                    
         if(message.content == 'Average Bot') {
             // message.reply('Im a slave not a friend!!');
             message.channel.sendMessage('Im a slave not a friend!!');
         } 
                    
     });

bot.on('message', (message) => {
                        
        if(message.content == '!matthew') {
            // message.reply('Vegtable!!');
            message.channel.sendMessage('Vegtable!!');
        } 
                        
    });

 bot.on('message', (message) => {
                            
         if(message.content == '!brandino') {
            // message.reply('Irrealevant');
             message.channel.sendMessage('Irrealevant');
        } 
                            
     });

 bot.on('message', (message) => {
                                
        if(message.content == '!cringe') {
            // message.reply('retarded newcomer to axiom network');
                message.channel.sendMessage('retarded newcomer to axiom network');
        } 
                                
     });



                          

bot.login('Mzc3OTU1ODgxNDYwOTU3MTg2.DOUeWw._exTeE8KstkLD32Y_l4WU1Scdw0');

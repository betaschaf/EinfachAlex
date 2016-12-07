var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("Event",  (Guild) =>  {
console.log(Guild.name);
});
bot.on("Event",  (GuildChannel) =>  {
console.log(GuildChannel.name);
});
bot.on('message', message => {
  var random = Math.floor((Math.random() * 7) + 1);

    if (random === 1) {
        bot.user.setGame('here', 'https://twitter.com/einfachalex_');
  }

    if (random === 2) {
        bot.user.setGame('by beta#0922,Mel#2760 and AstroGD#3426');
  }
  if (random === 3) {
      bot.user.setGame('EinfachAlex <3');
  }
    if (random === 4) {
      bot.user.setGame('https://www.youtube.com/c/EinfachAlexander');
  }
    if (random === 5) {
      bot.user.setGame('https://www.instagram.com/einfachalexyt/');
  }
    if (random === 6) {
      bot.user.setGame('by beta#0922,Mel#2760 and AstroGD#3426');
  }
    if (random === 7) {
      bot.user.setGame('by beta#0922,Mel#2760 and AstroGD#3426');
  }
//////////////
//Durchsage//
/////////////
  var random = Math.floor((Math.random() * 75) + 1);
  var randomt = Math.floor((Math.random() * 7) + 1);

if(random === 74) {
  if(randomt === 1 || randomt === 5 || random === 9) {
    message.channel.sendMessage("[Info] ``Schau doch mal bei Alex' Youtube-Kanal vorbei`` **->** https://www.youtube.com/c/EinfachAlexander")
  }
  if(randomt === 2 || randomt === 6 || random === 10) {
    message.channel.sendMessage("[Info] ``Schau doch mal bei Alex' Instagram vorbei`` **->** https://www.instagram.com/einfachalexyt/")
  }
  if(randomt === 3 || randomt === 7 ) {
    message.channel.sendMessage("[Info] ``Schau doch mal bei Alex' Twitter vorbei`` **->** https://twitter.com/einfachalex_")
  }
  if(randomt === 4 || randomt === 8) {
    message.channel.sendMessage("[Info] ``Zeig den Server doch deinen Freunden!`` **->**  https://discord.gg/0wh1mzilMwYn9iV0")
  }
}
////////
//Log//
///////
  if(message.author !== bot.user) {
    var logchannel = message.guild.defaultChannel;
    logchannel.id = "255045981572169738";
    logchannel.sendMessage("\n[Autor]          ``" + message.author.username + '`` | ``' + message.author.id + "``\n[Nachricht]    ``" + message.cleanContent + "``\n[Kanal]           " + message.channel + "\n--------------------------------------------------------------------------");
  }
//////////////////////
//Auto-Texterkennung//
//////////////////////
  var shortcuts = new Map([
    ["twitter", "**[EAlexTWITTER]** https://twitter.com/einfachalex_"],
    ["insta", "**[EAlexINSTA]** https://instagram.com/einfachalexyt/"],
    ["youtube", "**[EAlexYOUTUBE]** https://www.youtube.com/c/EinfachAlexander"],
    ["invite", "**[EAlexDISCORD]** https://discord.gg/0wh1mzilMwYn9iV0"],
  ]);


  var input = message.content.toUpperCase()
  var twitter = 0
  var insta = 0
  var youtube = 0
  var done = 0
  var discord = 0

  if (message.author !== bot.user) {

    if(message.content.toUpperCase().indexOf('ALEX') !== -1) {

      if (message.content.toUpperCase().indexOf('TWITTER' ) !== -1) {
        var twitter = 1
      }

      if (message.content.toUpperCase().indexOf('INSTA') !== -1) {
        var insta = 1
      }

      if (message.content.toUpperCase().indexOf('YOUTUBE' ) !== -1) {
        var youtube = 1
      }
      if (message.content.toUpperCase().indexOf('DISCORD' ) !== -1) {
        var discord = 1
      }

        if (twitter !== 0) {
          if (done === 0) {message.channel.sendMessage("**[EinfachAlex' Social Media]**")}
          var done = 1
          message.channel.sendMessage(shortcuts.get('twitter'))
        }
        if (insta !== 0) {
          if (done === 0) {message.channel.sendMessage("**[EinfachAlex' Social Media]**")}
          var done = 1
          message.channel.sendMessage(shortcuts.get('insta'))
        }
        if (youtube !== 0) {
          if (done === 0) {message.channel.sendMessage("**[EinfachAlex' Social Media]**")}
          var done = 1
          message.channel.sendMessage(shortcuts.get('youtube'))
        }
        if (discord !== 0) {
          if (done === 0) {message.channel.sendMessage("**[EinfachAlex' Social Media]**")}
          var done = 1
          message.channel.sendMessage(shortcuts.get('invite'))
        }
        return;
     }

}
/////////////
//Commands//
////////////
  var input = message.content.toUpperCase();
  if(input === "!TWITTER")
{
    message.channel.sendMessage("**[EAlexTWITTER]** https://twitter.com/einfachalex_");
}
var input = message.content.toUpperCase();
if(input === "!INSTA")
{
  message.channel.sendMessage("**[EAlexINSTAGRAM]** https://instagram.com/einfachalexyt/");
}
var input = message.content.toUpperCase();
if(input === "!YT")
{
  message.channel.sendMessage("**[EAlexYOUTUBE]** https://www.youtube.com/c/EinfachAlexander");
}
if(input === "!PROJEKT")
{
  message.channel.sendMessage("**[EAlexPROJEKT]**\n[Projekt] ``ChristmasCraft``\n[Wie?] ``In #will-mitmachen will mitmachen schrieben``\n[Wann endlich..] ``Alex loost ein paar Leute in seinen Streams aus. Alle kommen rein.``\n");
}
var input = message.content.toUpperCase();
if(input === "!REGELWERK")
{
//censored
}
var input = message.content.toUpperCase();
if(input === "!HILFE")
//in_work

///////////////////////////////
//Anti-Senden-Von-Nachrichten//
///////////////////////////////

var input = message.content.toUpperCase();
if(message.content.toUpperCase().includes("<#234243467209998337>")) {
message.delete()
};

//////////
//STATS//
/////////

if(message.content.toUpperCase().startsWith("!STATS")) {
  message.channel.sendMessage("[Ersteller] " + message.guild.owner.username + "\n[Erstellt] " + message.guild.createdAt + "\n[Userzahl] " + message.guild.memberCount + "\n[Standort] " + message.guild.region);// + "   \n[AFK-Kanal] " + message.guild.afkChannelID);
}

////////////////////////
//Auto-Verwarnung+Akte//
////////////////////////
//well_this_is_not_here

bot.login("well NO");

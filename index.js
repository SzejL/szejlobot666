const Commando = require("discord.js-commando");
const ytdl = require('ytdl-core');
const client = new Commando.Client({
owner: '311170075073970176',
commandPrefix: '$'
});﻿const ILOSC_KOTOW = 9; //BO KOTOW JEST 6 ALE PROGRAM LICZY OD 0!!! DLATEGO ZAMIAST 6 JEST 5

//TUTAJ DODAJESZ NAZWY PLIKOW Z KOTAMI :3
var koty = ["kot1.jpg", "kot2.jpg", "kot3.jpg", "kot4.jpg", "kot5.jpg", "kot6.jpg", "kot7.jpg", "kot8.jpg", "kot9.jpg", "kot10.jpg"];

const ILOSC_PSOW = 5; //BO PSOW JEST 6 ALE PROGRAM LICZY OD 0!!! DLATEGO ZAMIAST 6 JEST 5

//TUTAJ DODAJESZ NAZWY PLIKOW Z PSAMI :3
var psy = ["pies1.jpg", "pies2.jpg", "pies3.jpg", "pies4.jpg", "pies5.jpg", "pies6.jpg"];
client.registry.registerGroup("chat", "Chat");
client.registry.registerCommandsIn(__dirname + "/commands");
client.login("MzQzNDYxMTE4Mjg4NTkyODk2.XVKjlA.JIaZ5vCCV9xQKiThI6-_CCrTx4w");

client.on("ready", function() {
  console.log("I am ready!");
});

client.on("message", (message)=>{
  if(message.content === "cześć"){
    message.channel.send("cześć!");
  }
});
client.on("message", (message)=>{
  if(message.content === "pa"){
    message.channel.send("papa");
  }
});
client.on("message", (message)=>{
  if(message.content === "hej"){
    message.channel.send("no hej :D");
  }
});
client.on("message", (message)=>{
  if(message.content === "siema"){
    message.channel.send("siemka!");
  }
});
client.on("message", (message)=>{
  if(message.content === "elo"){
    message.channel.send("a no elo :P");
  }
});
client.on("message", (message)=>{
  if(message.content === "zw"){
    message.channel.send("czekamy aż wrócisz!");
  }
});
client.on("message", (message)=>{
  if(message.content === "jestem"){
    message.channel.send("świetnie!");
  }
});
client.on("message", (message)=>{
  if(message.content === "przytul"){
    message.channel.send("[przytulam] https://media.giphy.com/media/LWTxLvp8G6gzm/giphy.gif");
  }
});
client.on("message", (message)=>{
  if(message.content === "yo"){
    message.channel.send("yo!");
  }
});
client.on("message", (message)=>{
  if(message.content === "gitara siema"){
    message.channel.send("siemano kolano!");
  }
});
client.on("message", (message)=>{
  if(message.content === "siemano kolano"){
    message.channel.send("gitara siema!");
  }
});
client.on("message", (message)=>{
  if(message.content === "o boże"){
    message.channel.send("https://media.giphy.com/media/26n6Y9GdOdx8jqWFa/giphy.gif");
  }
});
client.on("message", (message)=>{
  if(message.content === "tajna komenda"){
    message.channel.send(":) :heart_eyes: :heart_eyes: :heart_eyes: ");
  }
});

client.on("message", (message)=>{
  if(message.content === "wiesz co zrób"){
    message.channel.send("spal i zakop! ");
  }
});
client.on("message", (message)=>{
  if(message.content === "jj"){
    message.channel.send("ekstra!");
  }
});
client.on("message", (message)=>{
  if(message.content === "nara"){
    message.channel.send("naraa!");
  }
});
client.on("message", (message)=>{
  if(message.content === "ide kupe"){
    message.channel.send("Powodzenia :poop: ");
  }
});
client.on("message", (message)=>{
  if(message.content === "2137"){
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
	  message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
      message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
      message.channel.send("https://media.giphy.com/media/ogQBhqOaClCuI/giphy.gif");
  }
});
client.on("message", (message) => {
    if (message.content === "21:37") {
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
		message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/ogQBhqOaClCuI/giphy.gif");
    }
});

client.on("message", (message)=>{
  var randomowyKot = Math.floor((Math.random() * ILOSC_KOTOW));

  if(message.content === "pchlarz"){
    message.channel.send("Miał!", {
      file: koty[randomowyKot]
    });
  }
});
client.on("message", (message)=>{
  var randomowyPies = Math.floor((Math.random() * ILOSC_PSOW));

  if(message.content === "pies"){
    message.channel.send("HAU!", {
      file: psy[randomowyPies]
    });
  }
});


//teraz komendy SzejLa});



client.on('message', message => {
    if (message.content === '21s37') {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('Dołącz to kanału ciołeczku');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=2yusdx60_aw', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
});
client.on('message', message => {
    if (message.content === 'hardbass') {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('Dołącz to kanału ciołeczku');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=fro6je9L5kg', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
});
client.on('message', message => {
    if (message.content === 'opole666') {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('Dołącz to kanału ciołeczku');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=jkGqFsBAme8', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
});
client.on('message', message => {
    if (message.content === '21d37') {
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('Dołącz to kanału ciołeczku');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=2yusdx60_aw', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
});

client.on('message', message => {
    if (message.content === 'aya') {
		message.channel.send("https://media.giphy.com/media/c1kMXfJ7kMSLC/giphy.gif");
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('Dołącz to kanału ciołeczku');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=dukKqDMYvDU', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
});
client.on('message', message => {
    if (message.content === 'grunge') {
        message.channel.send("https://media.giphy.com/media/ajvi44FjB19E4/giphy.gif");
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('Dołącz to kanału ciołeczku');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=VVkcyHVRZ-A', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
});
client.on('message', message => {
    if (message.content === 'młoda krew') {
        message.channel.send("płynie w moich żyłach w to co mówi hejter kutasa wbijam:shrug: ");
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('Dołącz to kanału ciołeczku');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=4cf1bLhHSOg', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
});
client.on('message', message => {
    if (message.content === 'modls sie') {
        message.channel.send("In nomine Dei Nostri Satanas ,Luciferi Excelsi. W imię Szatana, Władcy Ziemi , Prawdziwego Boga , wszechmogącego i niewysłowionego , któryś stworzył człowieka , aby odzwierciedlał twój wizerunek , zapraszamy Siły Ciemności by obdarzyły mnie Swoją piekielną mocą . Otwórzcie bramy piekła i przyjdźcie powitać mnie jako swojego brata/ siostrę i przyjaciela. Wybaw mnie o Potężny Szatanie , od wszystkich przeszłych błędów i złudzeń , napełnij mnie prawdą , wiedzą i zrozumieniem, uchowaj mnie silnym w mojej wierze i usłudze. Niech trwam w Tobie z Chwała , Czcią i Sławą oddawaną ci po wszech czasy. ave satans");
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('Dołącz to kanału ciołeczku');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=205DuJs8iwM', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
});
client.on('message', message => {
    if (message.content === 'ayaya') {
        message.channel.send("https://media.giphy.com/media/c1kMXfJ7kMSLC/giphy.gif");
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('Dołącz to kanału ciołeczku');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=9wnNW4HyDtg', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
});
client.on('message', message => {
    if (message.content === 'jpop') {
		message.channel.send("https://media.giphy.com/media/c1kMXfJ7kMSLC/giphy.gif");
        if (message.channel.type !== 'text') return;

        const { voiceChannel } = message.member;

        if (!voiceChannel) {
            return message.reply('Dołącz to kanału ciołeczku');
        }

        voiceChannel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=CZbW-3N-pWs', { filter: 'audioonly' });
            const dispatcher = connection.playStream(stream);

            dispatcher.on('end', () => voiceChannel.leave());
        });
    }
});






client.on("message", (message) => {
    var date = new Date();
    var godzina = date.getHours();
    var minuta = date.getMinutes();
    var czas1 = (60 * godzina);
    var czas2 = (minuta);
    var czas3 = (czas2 + czas1);
    var czas4 = (czas3 - 1297);
    var czas5 = (czas4 * -1);
    var czas6 = (czas5 -1440*-1);
    if (message.content === "czas") {
        if (czas4 <= 0) {
            
            message.channel.send("Do papieżańska pozostało" + " " + czas5 + " " + "Minut");
        }
        else {
            message.channel.send("Do papieżańska pozostało" + " " + czas6 + " " + "Minut");

        }
        if (czas4 === 0) {
            
            if (message.channel.type !== 'text') return;

            const { voiceChannel } = message.member;

            if (!voiceChannel) {
                return message.reply('Dołącz to kanału ciołeczku');
            }

            voiceChannel.join().then(connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=2yusdx60_aw', { filter: 'audioonly' });
                const dispatcher = connection.playStream(stream);

                dispatcher.on('end', () => voiceChannel.leave());
            });
        }
        else  return;
    }
});



client.on("message", (message) => {
    if (message.content === "Do papieżańska pozostało 0 Minut") {
        message.channel.send("https://tenor.com/view/papaj-cenzoj-gif-14137867");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://tenor.com/view/papaj-jp2gmd-2137-pope-vatican-gif-7339313");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://tenor.com/view/papaj-cenzoj-gif-14137867");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://tenor.com/view/papaj-jp2gmd-2137-pope-vatican-gif-7339313");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/yBp14HzwXdKEg/giphy.gif");
        message.channel.send("https://media.giphy.com/media/AWgh7039ogPzq/giphy.gif");
        message.channel.send("https://media.giphy.com/media/ogQBhqOaClCuI/giphy.gif");
    }
});

client.on("message", (message) => {
    if (message.content === "wyjdz") {
        const { voiceChannel } = message.member;
        voiceChannel.leave();
    }
});

client.on("message", (message) => {
    if (message.content === "s") {
        message.delete(0)
        message.member.setNickname('SzejLak');

    }
    else return;
});

//AbKV3e_DD8FYGGJXJGTXOGbDsyhnULyG
const Commando = require("discord.js-commando");

class CleanChatCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name: "clean",
            group: "chat",
            memberName: "clean",
            description: "Czyści x wiadomości z chatu!",
            examples: ["!clean LiczbaWiadomosciDoSkasowania"]
        });
    }

    async run(message, args){
        let role = message.guild.roles.find("name", "Administracja");

        if(message.member.roles.has(role.id)){
            var number = parseInt(args);

            if(number != 0)
                message.channel.fetchMessages({limit: number}).then(messages => message.channel.bulkDelete(messages));
            else
                message.reply("Niepoprawna liczba!");
        }
        else{
            message.reply("Ta komenda jest tylko dla administracji! Myślałeś że ten bot nie ma żadnych zabezpieczeń?  TO SIE MYLIŁEŚ");
        }
    }
}

module.exports = CleanChatCommand;
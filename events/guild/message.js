module.exports = (Discord, client, message) => {
    const prefix = process.env.PREFIX;
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd);
    try {
        command.execute(client, message, args, Discord);
    } catch(err) {
        message.reply("there was an error trying to execute this command!");
        console.log(err);
    }
}
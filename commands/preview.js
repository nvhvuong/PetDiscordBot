module.exports = {
    name: 'preview',
    async execute(client, message, args){
        await message.channel.send('Under Construction!');
    }
}
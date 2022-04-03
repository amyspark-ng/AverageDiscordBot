module.exports.run = (client, message, args) => {
	const { MessageEmbed } = require('discord.js');
	
	const someEmbed = new MessageEmbed()
	.setColor('#fcc168')
	.setTitle('« YOUR BOT NAME HERE »')
	.setAuthor({ name: 'AUTHOR OF IT', iconURL: 'https://cdn.discordapp.com/emojis/918004469692780574.webp?size=96&quality=lossless', url: 'https://discord.com/channels/917590717788983367/917590717822541878/928817797029584947' })
	.setDescription('* Description of the embed')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Some text', value: 'value' },
		{ name: '• Some other text:', value: 'another value', inline: true },
		{ name: '• Third text:', value: 'lol', inline: true },
		{ name: '• yes:', value: 'no', inline: true },
	)
	.setTimestamp()
	
	message.channel.send({ embeds: [someEmbed] });
}

module.exports.name = 'embed'

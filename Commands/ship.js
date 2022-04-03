module.exports.run = (client, message, args) => {
	let mentionedUsers = message.mentions.users.first(2);
	let randomPercent = (Math.random() * (100 - 1 + 1)) << 0

	if (!mentionedUsers[0] || !mentionedUsers[1]) {
		return message.reply({ content: `Tienes que pingear almenos 2 personas :angry:`, allowedMentions: { repliedUser: false } })
	}

	else {
		message.channel.send(`**${mentionedUsers[0].username.toString()}** and **${mentionedUsers[1].username.toString()}** have a compatibility of ${randomPercent}% !`)
	}
	
	console.log(`COMMAND | Ship command was executed by ${message.author.username}`)
	console.log(`^ - The ship was ${mentionedUsers[0].username.toString()}, ${mentionedUsers[1].username.toString()} and the percent was ${randomPercent}%`)
}

module.exports.name = 'ship'
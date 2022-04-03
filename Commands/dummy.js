module.exports.run = (client, message, args) => {
	let mentionedUser = message.mentions.users.first()

	if (!mentionedUser) {
		message.reply({ content: `You have to ping someone`, allowedMentions: { repliedUser: false } })
		return
	}

	else {
		message.channel.send(`${mentionedTontin} you're a dummy`)
	}

	console.log(`COMMAND | dummy command was executed by ${message.author.username}`)
	console.log(`^ - The mentioned dummy was ${mentionedUser.username}`)
}

module.exports.name = 'dummy'

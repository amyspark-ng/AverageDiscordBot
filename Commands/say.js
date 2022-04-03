module.exports.run = (client, message, args) => {
	let toSay = message.content.slice(5).trim()

	if (!toSay) {
		return
	}

	else {
		message.channel.send(toSay)
		message.delete()
	}

	console.log(`COMMAND | say command was executed by ${message.author.username}`)
	console.log(`^ - The message was: ${toSay}`)
}

module.exports.name = 'say'

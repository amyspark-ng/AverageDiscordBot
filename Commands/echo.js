module.exports.run = (client, message, args) => {
	let messageToSend = message.content.slice(6).trim()
	let channelToSend = message.mentions.channels.first()

	if (!messageToSend || messageToSend.includes("m!echo")) {
		message.channel.send("I can't send an invalid or empty message")
	}

	else {
		if (!channelToSend) {
			message.channel.send(messageToSend)
		}
		else {
			// me cago en
			messageToSend = messageToSend.replace(/<#.?[0-9]*?>/g, "")
			channelToSend.send(messageToSend)
			message.react('✅')
		}
	}

	console.log(`COMMAND | echo command was executed by ${message.author.username}`)
	
	if (!messageToSend || !channelToSend) {
		console.log(`^ - The command was incomplete, it either missed a channel or a message`)
	}

	else {
		console.log(`^ - The message was ${messageToSend} and the channel was ${channelToSend.name}`)
	}
}

module.exports.name = 'echo'

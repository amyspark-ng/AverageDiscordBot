module.exports.run = (client, message, args) => {
	message.channel.send("pong!")

	console.log(`COMMAND | ping command was executed by ${message.author.username}`)
}

module.exports.name = "ping"
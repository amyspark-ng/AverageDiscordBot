module.exports.run = (client, message, args) => {
	let randomPhrases = ["Hello world!", "Discord.js is cool", "Some phrase",
		":D", "AmySparkNG was here", "Some other phrase", "I ran out of phrases",
	]

	let randomIndex = (Math.random() * (randomPhrases.length - 1 + 1)) << 0

	message.channel.send(randomPhrases[randomIndex])

	console.log(`COMMAND | randomPhrase command was executed by ${message.author.username}`)
}

module.exports.name = 'randomPhrase'

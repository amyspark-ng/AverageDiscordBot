module.exports.run = (client, message, args) => {
	let adminRole = message.guild.roles.cache.find(role => role.name === "Admin")

	let unbannedUser = message.mentions.members.first()

	let botID = 'yourbotidhere'

	if (!message.member.roles.cache.has(adminRole.id)) {
		message.reply({ content: `You don't have the permissions!`, allowedMentions: { repliedUser: false } })
	}

	else {
		if (!unbannedUser) {
			message.reply({ content: `You have to ping someone!`, allowedMentions: { repliedUser: false } })
		}

		else if (unbannedUser.id == message.member.id) {
			message.reply({ content: `You can't ban yourself`, allowedMentions: { repliedUser: false } })
		}

		else if (unbannedUser.id == botID) {
			message.reply({ content: `You can't ban me!`, allowedMentions: { repliedUser: false } })
		}
		
		else {
			unbannedUser.ban()
			message.reply({ content: `**${unbannedUser.user.username}** has been banned`, allowedMentions: { repliedUser: false } })
		}
	}

	console.log(`COMMAND | ban command was executed by ${message.member.username}`)
}

module.exports.name = 'ban'

module.exports.run = (client, message, args) => {
	let adminRole = message.guild.roles.cache.find(role => role.name === "Admin")
	
	let unkickedUser = message.mentions.members.first()

	if (!message.member.roles.cache.has(adminRole.id)) {
		message.reply({ content: `You don't have the permissions`, allowedMentions: { repliedUser: false } })
	}

	else {
		if (!unkickedUser) {
			message.reply({ content: `You have to ping someone!`, allowedMentions: { repliedUser: false } })
		}

		else if (unkickedUser.id == message.member.id) {
			message.reply({ content: `You can't kick yourslef`, allowedMentions: { repliedUser: false } })
		}

		else if (unkickedUser.roles.cache.has(adminRole.id)) {
			message.reply({ content: `You can't kick an admin`, allowedMentions: { repliedUser: false } })
		}

		else {
			unkickedUser.kick();
			message.reply({ content: `**${unkickedUser.user.username}** has been kicked!`, allowedMentions: { repliedUser: false } })
		}
	}

	console.log(`COMMAND | kick command has been executed by ${message.author.username}`)
}

module.exports.name = 'kick'

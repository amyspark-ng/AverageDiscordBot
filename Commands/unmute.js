module.exports.run = (client, message, args) => {
	let adminRole = message.guild.roles.cache.find(role => role.name === "Admin")
	let muteRole = message.guild.roles.cache.find(role => role.name === "Muted")
	
	let mutedUser = message.mentions.members.first()
	
	if (!message.member.roles.cache.has(adminRole.id)) {
		message.reply({ content: `You don't have enough permissions`, allowedMentions: { repliedUser: false } })
	}

	else {
		if (!mutedUser) {
			message.reply({ content: `You have to ping someone`, allowedMentions: { repliedUser: false } })
		}

		else if (mutedUser.id == message.member.id) {
			message.reply({ content: `You can't unmute yourself, how does that even work?`, allowedMentions: { repliedUser: false } })
		}

		else if (!mutedUser.roles.cache.has(muteRole.id)) {
			message.reply({ content: `This users is not muted`, allowedMentions: { repliedUser: false } })
		}

		else {
			mutedUser.roles.remove(muteRole);
			message.channel.send(`**${mutedUser.user.username}** has been unmuted`)
		}
	}
}

module.exports.name = 'unmute'

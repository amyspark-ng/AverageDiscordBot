module.exports.run = (client, message, args) => {
	let adminRole = message.guild.roles.cache.find(role => role.name === "Admin")
	let muteRole = message.guild.roles.cache.find(role => role.name === "Muted")
	
	let unmutedUser = message.mentions.members.first()

	if (!message.member.roles.cache.has(adminRole.id)) {
		message.reply({ content: `You don't have the permissions`, allowedMentions: { repliedUser: false } })
	}

	else {
		if (!unmutedUser) {
			message.reply({ content: `You have to ping someone`, allowedMentions: { repliedUser: false } })
		}

		else if (unmutedUser.id == message.member.id) {
			message.reply({ content: `You can't mute yourself`, allowedMentions: { repliedUser: false } })
		}

		else if (unmutedUser.roles.cache.has(muteRole.id)) {
			message.reply({ content: `This user has already been muted`, allowedMentions: { repliedUser: false } })
		}

		else {
			unmutedUser.roles.add(muteRole);
			message.channel.send(`**${unmutedUser.user.username}** has been muted`)
		}
	}

	console.log(`COMMAND | mute command was executed by ${message.author.username}`)
}

module.exports.name = 'mute'
module.exports.run = (client, message, args) => {
	let adminRole = message.guild.roles.cache.find(role => role.name === "Admin")
	
	let bannedUserID = message.content.slice(7).trim()

	if (!message.member.roles.cache.has(adminRole.id)) {
		message.reply({ content: `You don't have the permissions!`, allowedMentions: { repliedUser: false } })
	}

	else {
		if (!bannedUserID) {
			message.reply({ content: `You have to put a valid id`, allowedMentions: { repliedUser: false } })
		}

		// Bans
		else {
			message.guild.members.unban(bannedUserID);
			message.reply({ content: `The user has been unbanned`, allowedMentions: { repliedUser: false } })
		}
	}

	console.log(`COMMAND | unban command has been executed by ${message.member.username}`)
}

module.exports.name = 'unban'

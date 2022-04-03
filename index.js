const express = require("express")
const app = express()

app.listen(3000, () => {
	console.log("The bot has compiled succesfully")
})

app.get("/", (req, res) => {
	res.send("Bot has started working!")
})

// Libraries stuff
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const fs = require("fs")
const PREFIX = "!"

client.commands = new Discord.Collection()

const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))

for (file of commands) {
	const commandName = file.split(".")[0]
	const command = require(`./Commands/${commandName}`)
	client.commands.set(commandName, command)
}

client.on("messageCreate", message => {
	if (message.content.startsWith(PREFIX)) {
		const args = message.content.slice(PREFIX.length).trim().split(/ +/g)
		
		const commandName = args.shift()
		const command = client.commands.get(commandName)

		if (!command) return
		command.run(client, message, args)
	} 
})

// m!ping @people
// args[0] = "ping" args[1] = @people

// Your key has to be named token
client.login(process.env.token)

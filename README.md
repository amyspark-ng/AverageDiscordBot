# AVERAGE DISCORD.JS BOT

## -Index
- [Introduction](#introduction)
- [How](#how)
- [Code Stuff](#code-stuff)
- [Sign off](#sign-off)
- [TODO](#to-do)

## -Introduction
I made this repo as a little introduction for people who want to start making a discord bot using Discord.js V13, here's basically a collection of average commands most bots have, you can edit them and add yourself some with some code snippets i will explain later on.

### - ACLARATION
EVERYTHING OF THIS IS BASED AROUND [IMAGINEGAMINGPLAY](https://www.youtube.com/channel/UCzBQ65qoUGqNPcbiNQN2pJA)'S SERIES ON HOW TO MAKE A DISCORD BOT if you don't want to follow along and just copy everything and replace stuff this is your place, you will get the series links here tho

- [How to make a discord bot without download anything](https://www.youtube.com/watch?v=1KVGyUemRy0&ab_channel=ImagineGamingPlay)
- [Discord.js command handler](https://www.youtube.com/watch?v=1KVGyUemRy0&ab_channel=ImagineGamingPlay)

## - How

0.5 First of all you need to have a github account, a replit account (which you can log in having a gitub one) and a discord account

### Creating the discord app

1. Now you need to go to https://discord.com/developers and create a new application, after created you should click on the bot part and click add bot
<img src = "https://media.discordapp.net/attachments/918405493620359189/960030255987449916/unknown.png?width=960&height=427"> 
Then, you click on reset token, this is the private token of your bot DON'T GIVE IT TO ANYONE they can make their own bot using your token and mess everything up, just be careful with it, that's why we don't include it in the code. 

After creating our bot we want to invite him to our server, so we go to OAuth2 part and click on url generator, then on permissions we hit bot and administrator, so it can have all the permisions, but be careful with that lol

<img src = "https://media.discordapp.net/attachments/918405493620359189/960032412237189160/unknown.png?width=928&height=468">

Then we click on the copy url button below, and invite our bot the server, you should know how to do that

Now, let's bring our bot to life :)

### Setting up the replit stuff

2. Now we go to the second step, go to https://replit.com and sign up (if you don't have an account) using github, you can sign up without a github account but if you have it then you won't have 2 separated accounts (i think)

Then we must click on the '+' button to create a new repl and select the Node.js template, give a name and click create
<img src = "https://cdn.discordapp.com/attachments/918405493620359189/960033258907770930/unknown.png">

<img src = "https://media.discordapp.net/attachments/918405493620359189/960033627905863690/unknown.png">

After the repl was created you should see a confusing UI and stuff, i'll just guide you, go to packages part (the cube thingy) and search for express, download the first one you see

Repeat this proccess instead of download express search for Discord.js and download the first one

<img src = "https://media.discordapp.net/attachments/918405493620359189/960034285551771648/unknown.png?width=960&height=420">

Now, you see the big black terminal thingy on the right? There should be a button that says shell, click there and paste this code:

`
npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
`

^ Credits to [ImageGamingPlay](https://www.youtube.com/channel/UCzBQ65qoUGqNPcbiNQN2pJA)

Now wait a minute while it downloads and does stuff on it

...

Now, where the files are, click on the one that says package.json and search the part where it says "test", at the end of that line add a comma (,) and below add this line:
```json
"start": "node ."
```

As the last replit thingy, click on add new file and name it .replit and add:

`
run = "npm start"
`

4. Now, this is where we almost get to the coding stuff, like 2 steps left and i'll go to [Code Stuff](#code-stuff)


Now what you need to do is download the source code of this repository, un-zip it, delete the README.md file (this one) and drag ALL the files to where the file thingies are, replace index.js too

5. Go back to https://discord.com/developers, go to your bot's page and copy the secret token the page has given you

Then on the repl, search for the secrets tab, on key put "token" and on value paste the token the page has given you

<img src = "https://media.discordapp.net/attachments/918405493620359189/960037668517978122/unknown.png">

### Your bot is alive!!

6. After adding the basic code, the token, done the discord-application thingy and all of that, if you click the big green button that says "RUN" and you wait a little your should be now up and running! Try the ping command to see how it replies and all :D

<img src = "https://media.discordapp.net/attachments/918405493620359189/960039358973505546/unknown.png">

### Keep your bot alive

7. Now, to keep your bot alive all the time (well almost all the time, it can break sometimes and stuff) you need to go to https://uptimerobot.com/, click on register (if you don't have an account), after signing up you should see another confusing UI, just click on the button that says add monitor and put these settings

<img src = "https://media.discordapp.net/attachments/918405493620359189/960041023969583134/unknown.png?width=656&height=468">

To get the url of it, run your bot from replit, the white window (page) of the terminal should have a link above that, copy it and paste it there

<img src = "https://media.discordapp.net/attachments/918405493620359189/960041357341237248/unknown.png">

### AND THAT'S ALL!!!!!

Your bot should be now 24/7 online, it may go down sometimes but it will be very briefly, now these are the basic little thingies, if you want to go more complex and do your own commands go to [CODE STUFF](#code-stuff), if not thanks for reading all of this!! Hope it worked out for you :D

## - Code stuff
YOU NEED BASIC JAVASCRIPT KNOWLEDGE not only javascript generally basic coding knowledge, i've seen people asking stuff but it's them not knowing how to code, so pls, learn coding first, if you don't want to, im pretty sure there's plenty of ways to make a discord bot without coding, if you do have knowledge of coding and javascript keep reading

### How to create a command?
You create a .js file with the name of your command on the Commands folder, and add this code inside:

```js
module.exports.run = (client, message, args) => {
	// Your command stuff
}

module.exports.name = 'commandName'
```
On commandName you should put the same thingy you put on the file name so it works properly and stuff thingies all of that

### How to get users/roles
You can for example get a variable of the user that sent the command writing:

```js
let user = message.member
```

To fetch a role by name you do:

```js
let role = message.guild.roles.cache.find(role => role.name === "rolename")
```

And to check if a certain user has a role you can do this:

```js
if (user.roles.cache.has(role.id)) {
	// do stuff
}
```

That some of the basics of Discord.JS, if you want to get more into you should check the documentation of it, find it here:

[- DISCORD.JS DOCS -](https://discord.js.org/#/)

## - Sign off
So... Yeah! That's basically all, hope this helped you out or something, it's currently like 2AM so if i missed anything or something broke or wharever, please let me know in a github issue

—AmySparkNG

## - TO-DO
Here are some things that are missing on the commands stuff or general things

- [ ] Add ban command and unban

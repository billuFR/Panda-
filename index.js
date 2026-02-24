const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  PermissionsBitField
} = require("discord.js");

require("dotenv").config();
const commands = require("./commands");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
});

const prefix = ".";


// ================= REGISTER SLASH =================
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands.slashData }
    );
    console.log("Slash commands loaded");
  } catch (err) {
    console.log(err);
  }
})();


// ================= READY =================
client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});


// ================= WELCOME =================
client.on("guildMemberAdd", member => {
  if (member.guild.systemChannel)
    member.guild.systemChannel.send(`👋 Welcome ${member}`);
});


// ================= PREFIX COMMANDS =================
client.on("messageCreate", async msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  if (cmd === "ping")
    return msg.reply(`Pong ${client.ws.ping}ms`);

  if (cmd === "help")
    return msg.reply(commands.helpText);

  if (cmd === "say")
    return msg.channel.send(args.join(" "));

  if (cmd === "clear") {
    if (!msg.member.permissions.has(PermissionsBitField.Flags.ManageMessages))
      return msg.reply("No permission");
    await msg.channel.bulkDelete(args[0], true);
  }

  if (cmd === "kick") {
    if (!msg.member.permissions.has(PermissionsBitField.Flags.KickMembers))
      return msg.reply("No permission");

    const user = msg.mentions.members.first();
    if (!user) return msg.reply("Mention user");
    await user.kick();
    msg.channel.send("User kicked");
  }

  if (cmd === "ban") {
    if (!msg.member.permissions.has(PermissionsBitField.Flags.BanMembers))
      return msg.reply("No permission");

    const user = msg.mentions.members.first();
    if (!user) return msg.reply("Mention user");
    await user.ban();
    msg.channel.send("User banned");
  }
});


// ================= SLASH COMMANDS =================
client.on("interactionCreate", async i => {
  if (!i.isChatInputCommand()) return;

  if (i.commandName === "ping")
    return i.reply(`Pong ${client.ws.ping}ms`);

  if (i.commandName === "help")
    return i.reply(commands.helpText);

  if (i.commandName === "say")
    return i.reply(i.options.getString("text"));
});


client.login(process.env.TOKEN);

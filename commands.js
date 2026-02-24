const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  // ================= SLASH COMMAND DATA =================
  slashData: [
    // General
    new SlashCommandBuilder().setName("ping").setDescription("Check bot latency"),
    new SlashCommandBuilder().setName("help").setDescription("Show all commands"),
    new SlashCommandBuilder()
      .setName("say")
      .setDescription("Make bot say something")
      .addStringOption(o => o.setName("text").setDescription("Message to send").setRequired(true)),

    // Moderation
    new SlashCommandBuilder()
      .setName("kick")
      .setDescription("Kick a member")
      .addUserOption(o => o.setName("user").setDescription("User to kick").setRequired(true)),
    new SlashCommandBuilder()
      .setName("ban")
      .setDescription("Ban a member")
      .addUserOption(o => o.setName("user").setDescription("User to ban").setRequired(true)),
    new SlashCommandBuilder()
      .setName("unban")
      .setDescription("Unban a member")
      .addStringOption(o => o.setName("userid").setDescription("ID of user to unban").setRequired(true)),
    new SlashCommandBuilder()
      .setName("mute")
      .setDescription("Mute a member")
      .addUserOption(o => o.setName("user").setDescription("User to mute").setRequired(true)),
    new SlashCommandBuilder()
      .setName("unmute")
      .setDescription("Unmute a member")
      .addUserOption(o => o.setName("user").setDescription("User to unmute").setRequired(true)),
    new SlashCommandBuilder()
      .setName("clear")
      .setDescription("Delete messages")
      .addIntegerOption(o => o.setName("amount").setDescription("Number of messages").setRequired(true)),

    // Utility
    new SlashCommandBuilder()
      .setName("userinfo")
      .setDescription("Get info about a user")
      .addUserOption(o => o.setName("user").setDescription("User").setRequired(false)),
    new SlashCommandBuilder().setName("serverinfo").setDescription("Get server info"),
    new SlashCommandBuilder().setName("avatar").setDescription("Show avatar of a user").addUserOption(o => o.setName("user").setDescription("User").setRequired(false)),

    // Fun
    new SlashCommandBuilder().setName("joke").setDescription("Get a random joke"),
    new SlashCommandBuilder().setName("meme").setDescription("Get a random meme"),
    new SlashCommandBuilder().setName("roll").setDescription("Roll a dice"),
    new SlashCommandBuilder().setName("8ball").setDescription("Ask the magic 8ball a question").addStringOption(o => o.setName("question").setDescription("Your question").setRequired(true)),

    // Music
    new SlashCommandBuilder()
      .setName("play")
      .setDescription("Play music from YouTube")
      .addStringOption(o => o.setName("song").setDescription("Song URL or name").setRequired(true)),
    new SlashCommandBuilder().setName("skip").setDescription("Skip the current song"),
    new SlashCommandBuilder().setName("stop").setDescription("Stop music and clear queue"),
    new SlashCommandBuilder().setName("queue").setDescription("Show current music queue"),

    // Security / Anti-Nuke
    new SlashCommandBuilder().setName("whitelist").setDescription("Add/remove role to anti-nuke whitelist").addRoleOption(o => o.setName("role").setDescription("Role to whitelist").setRequired(true))
  ].map(cmd => cmd.toJSON()),

  // ================= PREFIX COMMAND HELP TEXT =================
  helpText: `
**All Commands**

**Prefix Commands**
.ping
.help
.say <message>
.kick @user
.ban @user
.unban <userID>
.mute @user
.unmute @user
.clear <number>
.userinfo [@user]
.serverinfo
.avatar [@user]
.joke
.meme
.roll
.8ball <question>
.play <song>
.skip
.stop
.queue
.whitelist <role>

**Slash Commands**
/ping
/help
/say <message>
/kick <user>
/ban <user>
/unban <userID>
/mute <user>
/unmute <user>
/clear <amount>
/userinfo [user]
/serverinfo
/avatar [user]
/joke
/meme
/roll
/8ball <question>
/play <song>
/skip
/stop
/queue
/whitelist <role>
`
};const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  // ================= SLASH COMMAND DATA =================
  slashData: [
    // General
    new SlashCommandBuilder().setName("ping").setDescription("Check bot latency"),
    new SlashCommandBuilder().setName("help").setDescription("Show all commands"),
    new SlashCommandBuilder()
      .setName("say")
      .setDescription("Make bot say something")
      .addStringOption(o => o.setName("text").setDescription("Message to send").setRequired(true)),

    // Moderation
    new SlashCommandBuilder()
      .setName("kick")
      .setDescription("Kick a member")
      .addUserOption(o => o.setName("user").setDescription("User to kick").setRequired(true)),
    new SlashCommandBuilder()
      .setName("ban")
      .setDescription("Ban a member")
      .addUserOption(o => o.setName("user").setDescription("User to ban").setRequired(true)),
    new SlashCommandBuilder()
      .setName("unban")
      .setDescription("Unban a member")
      .addStringOption(o => o.setName("userid").setDescription("ID of user to unban").setRequired(true)),
    new SlashCommandBuilder()
      .setName("mute")
      .setDescription("Mute a member")
      .addUserOption(o => o.setName("user").setDescription("User to mute").setRequired(true)),
    new SlashCommandBuilder()
      .setName("unmute")
      .setDescription("Unmute a member")
      .addUserOption(o => o.setName("user").setDescription("User to unmute").setRequired(true)),
    new SlashCommandBuilder()
      .setName("clear")
      .setDescription("Delete messages")
      .addIntegerOption(o => o.setName("amount").setDescription("Number of messages").setRequired(true)),

    // Utility
    new SlashCommandBuilder()
      .setName("userinfo")
      .setDescription("Get info about a user")
      .addUserOption(o => o.setName("user").setDescription("User").setRequired(false)),
    new SlashCommandBuilder().setName("serverinfo").setDescription("Get server info"),
    new SlashCommandBuilder().setName("avatar").setDescription("Show avatar of a user").addUserOption(o => o.setName("user").setDescription("User").setRequired(false)),

    // Fun
    new SlashCommandBuilder().setName("joke").setDescription("Get a random joke"),
    new SlashCommandBuilder().setName("meme").setDescription("Get a random meme"),
    new SlashCommandBuilder().setName("roll").setDescription("Roll a dice"),
    new SlashCommandBuilder().setName("8ball").setDescription("Ask the magic 8ball a question").addStringOption(o => o.setName("question").setDescription("Your question").setRequired(true)),

    // Music
    new SlashCommandBuilder()
      .setName("play")
      .setDescription("Play music from YouTube")
      .addStringOption(o => o.setName("song").setDescription("Song URL or name").setRequired(true)),
    new SlashCommandBuilder().setName("skip").setDescription("Skip the current song"),
    new SlashCommandBuilder().setName("stop").setDescription("Stop music and clear queue"),
    new SlashCommandBuilder().setName("queue").setDescription("Show current music queue"),

    // Security / Anti-Nuke
    new SlashCommandBuilder().setName("whitelist").setDescription("Add/remove role to anti-nuke whitelist").addRoleOption(o => o.setName("role").setDescription("Role to whitelist").setRequired(true))
  ].map(cmd => cmd.toJSON()),

  // ================= PREFIX COMMAND HELP TEXT =================
  helpText: `
**All Commands**

**Prefix Commands**
.ping
.help
.say <message>
.kick @user
.ban @user
.unban <userID>
.mute @user
.unmute @user
.clear <number>
.userinfo [@user]
.serverinfo
.avatar [@user]
.joke
.meme
.roll
.8ball <question>
.play <song>
.skip
.stop
.queue
.whitelist <role>

**Slash Commands**
/ping
/help
/say <message>
/kick <user>
/ban <user>
/unban <userID>
/mute <user>
/unmute <user>
/clear <amount>
/userinfo [user]
/serverinfo
/avatar [user]
/joke
/meme
/roll
/8ball <question>
/play <song>
/skip
/stop
/queue
/whitelist <role>
`
};

import { OAuth2Scopes } from "discord.js";
import { ArgsOf, Discord, On } from "discordx";

@Discord()
class ReadyEvent {
  @On({
    event: "ready",
  })
  ready([client]: ArgsOf<"ready">) {
    let inviteLink = client.generateInvite({
      scopes: [OAuth2Scopes.ApplicationsCommands, OAuth2Scopes.Bot],
      permissions: [
        "SendMessages",
        "CreatePublicThreads",
        "CreatePrivateThreads",
        "SendMessagesInThreads",
        "ManageMessages",
        "ManageThreads",
        "EmbedLinks",
        "AttachFiles",
        "ReadMessageHistory",
        "UseExternalEmojis",
        "AddReactions",
        "UseApplicationCommands",
        "MuteMembers",
        "DeafenMembers",
        "MoveMembers",
        "UseVAD",
        "ReadMessageHistory",
        "ModerateMembers",
        "ManageRoles",
        "ManageChannels",
        "ViewChannel",
      ],
    });
    console.log("Bot is ready! Invite with " + inviteLink);
  }
}

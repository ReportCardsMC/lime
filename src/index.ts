import "reflect-metadata";
import * as dotenv from "dotenv";
import { Client } from "discordx";
import { importx } from "@discordx/importer";
dotenv.config();

if (!process.env.TOKEN) throw new Error("No token provided");

export class Bot {
  client: Client;

  constructor() {
    console.log(" > Bot Created");

    let client = new Client({
      intents: [
        "Guilds",
        "GuildMessages",
        "GuildMembers",
        "GuildVoiceStates",
        "GuildMessageReactions",
        "GuildPresences",
        "GuildInvites",
        "GuildBans",
        "GuildModeration",
        "MessageContent",
        "AutoModerationExecution",
        "DirectMessageReactions",
        "DirectMessages",
      ],
      silent: false,
      allowedMentions: {
        parse: ["users", "roles"],
        repliedUser: true,
      },
    });

    client.once("ready", () => {
      client.initApplicationCommands();
    });

    client.on("interactionCreate", (interaction) => {
      client.executeInteraction(interaction);
    });

    this.client = client;
  }

  async start(token: string) {
    await importx(__dirname + "/commands/**/*.{ts,js}");
    await importx(__dirname + "/events/**/*.{ts,js}");

    // TODO: Setup typegoose

    await this.client.login(token);
    console.log(" > Bot Started");
  }
}

export const bot = new Bot();
bot.start(process.env.TOKEN);

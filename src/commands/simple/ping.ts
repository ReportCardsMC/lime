import { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
class PingCommand {
  @Slash({
    name: "ping",
    description: "Ping the bot",
    dmPermission: true,
  })
  async ping(interaction: CommandInteraction) {
    let now = Date.now();
    interaction.reply("Loading...").then((msg) => {
      let wsPing = interaction.client.ws.ping;
      let roundTrip = Date.now() - now;

      msg.edit(
        `Pong!\nRoundtrip: \`${roundTrip}ms\`, Heartbeat: \`${wsPing}ms\``
      );
    });
  }
}

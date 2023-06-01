import { ModelOptions, getModelForClass, prop } from "@typegoose/typegoose";
import { Trigger } from "../../common/trigger";
import { Module } from "../../common/module";

interface User {
  id: string;
  name: string;
}

interface GuildConfig {
  modules: {
    [key in Module]: boolean;
  };
  triggers: Trigger[];
}

@ModelOptions({ schemaOptions: { collection: "guilds" } })
export class GuildModel {
  @prop({ required: true, _id: true })
  id!: string;

  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  config!: GuildConfig;
}

import { ModelOptions, prop } from "@typegoose/typegoose";
import { BasicUser } from "../../common/basic";

@ModelOptions({
  options: {
    allowMixed: 0,
  },
  schemaOptions: {
    timestamps: true,
  },
})
export class Case {
  @prop({ required: true, _id: true, match: /[a-zA-Z0-9]{4,6}/ })
  id!: string;

  @prop({ required: true, match: /\d{18}/ })
  guildId!: string;

  @prop({ required: true })
  target!: BasicUser;

  @prop({ required: true })
  moderator!: BasicUser;
}

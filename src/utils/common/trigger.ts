import { Embed } from "discord.js";

interface TriggerResponse {
  embed?: Embed;
  message?: string;
  delete?: number;
}

export enum TriggerType {
  EXACT = "exact",
  INCLUDES = "includes",
  STARTS_WITH = "starts_with",
  ENDS_WITH = "ends_with",
}

export interface Trigger {
  word: string;
  type: TriggerType;
  response: TriggerResponse;
}

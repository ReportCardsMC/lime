export abstract class Action {
  public abstract type: string;
  public abstract execute(): boolean;
  public abstract sendDM(userID: string): void;
  public abstract sendModLog(guildID: string): void;
}

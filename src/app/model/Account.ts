import {Role} from "./Role";

export class Account{
  public username !: string;
  public token !: string;
  public id !: number;
  public roles !: Role[];
}

import {Combattant} from "../ts-combattants/Interface-combatant";

export interface Attaque {
  nomAtk: string;
  degatAtk: number;
  hitChance: number;

  lancerAttaque(): number;

  get nom(): string;
  set nom(nom: string);

  get degats(): number;
  set degats(degats: number);
}

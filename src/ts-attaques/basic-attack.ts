import {Tools} from "../tools";
import {Attaque} from "./interface-attaque";
import {Combattant} from "../ts-combattants/Interface-combatant";

export class BasicAttack implements Attaque {
  nomAtk: string;
  degatAtk: number;
  hitChance: number;

  // constructor(public nomAtk: string, public degatAtk: number, public hitChance: number)

  constructor(nom: string, degats: number, hitChance: number) {
    this.nomAtk = nom;
    this.degatAtk = degats;
    this.hitChance = hitChance;
  }

  // --------------------------------------------
  lancerAttaque(): number {
    let random = Tools.randomNumberInRange(0, 100);

    let result;

    if (random < this.hitChance) {
      result = this.degatAtk;
    } else {
      result = 0;
      console.log("vous n'avez pas touché");
    }

    return result;
  }
  // --------------------------------------------
  get nom(): string {
    return this.nomAtk;
  }
  set nom(nom: string) {
    this.nomAtk = nom;
  }
  get degats(): number {
    return this.degatAtk;
  }
  set degats(degats: number) {
    this.degatAtk = degats;
  }
}

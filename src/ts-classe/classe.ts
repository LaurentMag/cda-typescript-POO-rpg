import {Tools} from "../tools";
import {BasicAttack} from "../ts-attaques/basic-attack";
import {Attaque} from "../ts-attaques/interface-attaque";

export class Class {
  nom: string;
  attackList: BasicAttack[];

  constructor(nom: string, attackList: BasicAttack[]) {
    this.nom = nom;
    this.attackList = attackList;
  }

  getSkillToUse(): Attaque {
    let arrayLength = this.attackList.length;
    let random = Tools.randomNumberInRange(0, arrayLength - 1);
    // let random = Tools.randomArrayIndex(this.attackList);

    return this.attackList[random];
  }
}

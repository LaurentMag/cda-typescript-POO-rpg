import {Class} from "../ts-classe/classe";
import {Combattant} from "./Interface-combatant";
import {AbstractCombattant} from "./abstractCombattant";

export class Personnage extends AbstractCombattant implements Combattant {
  classe: Class;

  constructor(nom: string, pv: number, degats: number, classe: Class) {
    // now its class / name / pv / dmg
    super(nom, pv, degats);
    this.classe = classe;
  }

  attaquer(adversaire: Combattant): void {
    console.log(this.nom, " attaque avec : ", this.classe.getSkillToUse().nom, " || Dégâts de : ", this.classe.getSkillToUse().degatAtk);

    // get skill to use from the classe.ts method
    let skillUsed = this.classe.getSkillToUse();
    // check what damage is going to be applied with the "lancerAttaque()"
    // from basic-Attack.ts
    let damage = skillUsed.lancerAttaque();
    adversaire.setDmg(damage);
  }

  //   attaquer(adversaire: Combattant): void {
  //     adversaire.defendre(this.degats);
  //     console.log(`il y a eu une attaque de ${this.degats} dégâts`);
  //   }
}

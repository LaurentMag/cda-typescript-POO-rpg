import read from "readline-sync";
import {Monstre} from "../ts-combattants/monstre";
import {Tools} from "../tools";

import {Personnage} from "../ts-combattants/personnage";
import {Combattant} from "../ts-combattants/Interface-combatant";
import {Class} from "../ts-classe/classe";
import {BasicAttack} from "../ts-attaques/basic-attack";

export class Monde {
  //
  static personnageFactory(): Personnage {
    let persoName: string = read.question("Entrer le nom de votre personnage : ");

    let guerrier: Class = new Class("guerrier", [
      new BasicAttack("coup de bouclier", 5, 60),
      new BasicAttack("pique", 20, 40),
      new BasicAttack("tranche air", 10, 50),
    ]);
    let newPerso: Personnage = new Personnage(persoName, 100, 10, guerrier);

    return newPerso;
  }
  //

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  public static monsterNameGenerator(): string {
    let suffix: string[] = ["Goules", "Farfadets", "gobelin", "moustique", "Ronflex", "guivre", "ver"];
    let prefix: string[] = ["des enfers", "de glace", "en bois", "paisible", "des sous-terrain", "des Abyss"];

    let monsterName = suffix[Tools.randomArrayIndex(suffix)] + " " + prefix[Tools.randomArrayIndex(prefix)];

    return monsterName;
  }
  //
  static monsterFactory(monsterName: string): Monstre {
    let newMonster: Monstre = new Monstre(monsterName, 75, 10);

    return newMonster;
  }
  //
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  static afficherInformation(): void {
    console.log("C'est un log temporaire des info du monde...");
  }

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  static combat(combattant1: Combattant, combattant2: Combattant): void {
    while (combattant1.pv > 0 && combattant2.pv > 0) {
      // premier tour perso attaque mob
      combattant1.attaquer(combattant2);
      console.log("combattant2", combattant2.pv);

      combattant2.attaquer(combattant1);
      console.log("combattant1", combattant1.pv);

      console.log("-------");

      if (combattant1.pv <= 0) {
        console.log(`le gagant est ${combattant2.nom}, ${combattant2.pv} restant`);
      }
      if (combattant2.pv <= 0) {
        console.log(`le gagant est ${combattant1.nom}, ${combattant1.pv} pv restant`);
      }
    }
  }
}

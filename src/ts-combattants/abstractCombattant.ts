import {Combattant} from "./Interface-combatant";

export abstract class AbstractCombattant implements Combattant {
  // _nom: string;
  // _pv: number;
  // _degats: number;

  // constructor(nom: string, pv: number, degats: number) {
  //   this._nom = nom;
  //   this._pv = pv;
  //   this._degats = degats;
  // }

  // VERSION SIMPLIFIEE
  constructor(private _nom: string, private _pv: number, private _degats: number) {}

  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  setDmg(degats: number): void {
    this.pv = this.pv - degats;
  }

  attaquer(adversaire: Combattant): void {
    adversaire.setDmg(this.degats);
    console.log(`il y a eu une attaque de ${this.degats} dégâts`);
  }

  toString(): string {
    return `Personnage de nom : ${this.nom}, PV : ${this.pv}, Dégats : ${this.degats} `;
  }

  // ----------------------------
  get nom(): string {
    return this._nom;
  }

  get pv(): number {
    return this._pv;
  }

  get degats(): number {
    return this._degats;
  }
  // ----------------------------
  set nom(nom: string) {
    this._nom = nom;
  }

  set pv(pv) {
    this._pv = pv;
  }

  set degats(degats: number) {
    this._degats = degats;
  }
}

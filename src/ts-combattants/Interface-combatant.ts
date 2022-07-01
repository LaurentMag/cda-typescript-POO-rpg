export interface Combattant {
  attaquer(adversaire: Combattant): void;
  setDmg(degats: number): void;

  get nom(): string;
  set nom(nom: string);

  get pv(): number;
  set pv(pv: number);

  get degats(): number;
  set degats(degats: number);
}

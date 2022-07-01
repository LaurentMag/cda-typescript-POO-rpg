// static combat(personnage: Personnage, monster: Monstre): void {
//   console.log(`le joueur ${personnage.nom} va combattre : ${monster.nom} || pv : ${monster.pv} || dégats : ${monster.degats}`);

//   // let gagnant: string;
//   // let perdant: string;

//   while (personnage.pv > 0 && monster.pv > 0) {
//     // premier tour perso attaque mob
//     monster.pv = monster.pv - personnage.degats;
//     console.log(monster.pv);

//     personnage.pv = personnage.pv - monster.degats;
//     console.log(personnage.pv);

//     // if (personnage.pv <= 0) {
//     //   perdant = personnage.nom;
//     //   gagnant = monster.nom;
//     // }

//     // if (monster.pv <= 0) {
//     //   perdant = monster.nom;
//     //   gagnant = pesr.nom;
//     // }
//     console.log("-------");
//   }

//   console.log(`Combat terminé, personnage pv : ${personnage.pv} || Monstre pv : ${monster.pv}`);

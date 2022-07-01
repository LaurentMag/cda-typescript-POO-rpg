import {Monde} from "./monde/monde";
import {Tools} from "./tools";

// let newperso = Monde.personnageFactory();
// console.log(newperso.toString());

// Monde.afficherInformation();

Monde.combat(Monde.personnageFactory(), Monde.monsterFactory(Monde.monsterNameGenerator()));

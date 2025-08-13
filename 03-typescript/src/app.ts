import { findHeroById } from "./services/hero.service";




const hero = findHeroById(3);
//console.log(hero);
console.log(hero?.name ?? "hero not found");
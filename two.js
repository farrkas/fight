/*
https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

Create a function that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
*/

const Fighter = class {
  constructor(name, health, attackPoint) {
    this.name = name;
    this.helath = health;
    this.attackPoint = attackPoint;
  }
};

function declareWinner(fighter1, fighter2, firstAttacker) {
  let gracz1 = {};
  let gracz2 = {};
  if (firstAttacker == fighter1.name) {
    gracz1 = fighter1;
    gracz2 = fighter2;
  } else if (firstAttacker == fighter2.name) {
    gracz1 = fighter2;
    gracz2 = fighter1;
  }

  do {
    gracz1.health -= gracz2.attackPoint;
    console.log(gracz1);

    gracz2.health -= gracz1.attackPoint;
    console.log(gracz2);
  } while (gracz1.health > 0 || gracz2.health > 0);

  if (fighter1.health == 0) {
    console.log(fighter1.name);
    return fighter1.name;
  } else if (fighter2.health == 0) {
    console.log(fighter2.name);
    return fighter2.name;
  } else "coś poszło nie tak";
}

declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"); // "Lew");

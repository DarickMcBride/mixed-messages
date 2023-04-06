"use strict";

let potterData = require("./data/harryPotter.json");
let spellData = require("./data/spells.json");

class Message {
  //fields
  #houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  #wands;
  #spells;
  constructor() {
    //get wand data
    const wandsData = potterData.map((item) => item.Wand);
    const filteredWands = wandsData.filter(
      (wand) => wand !== "Unknown" && wand !== "" && !wand.includes("Inherited")
    );

    //get spell data
    const filteredSpells = spellData.filter(
      (spell) => spell.Incantation !== "Unknown" && spell.Incantation !== ""
    );

    this.#wands = filteredWands;
    this.#spells = filteredSpells;
  }

  //methods
  #createRandomSpells() {
    let spellsArr = [];
    do {
      // Generating random number
      const randomNumber = Math.floor(Math.random() * 100) + 1;

      // Pushing into the array only
      // if the array does not contain it
      if (!spellsArr.includes(this.#spells[randomNumber])) {
        spellsArr.push(this.#spells[randomNumber]);
      }
    } while (spellsArr.length < 3);
    return spellsArr;
  }
  writeMessage() {
    let house = this.#houses[Math.floor(Math.random() * this.#houses.length)];
    let wand = this.#wands[Math.floor(Math.random() * this.#wands.length)];
    let learnedSpells = this.#createRandomSpells();

    console.log(
      `Welcome to Hogwarts! You have been sorted into the ${house} house. The wand you have been assigned is: ${wand}. You have also learned three spells: `
    );
    console.log("");
    learnedSpells.map((spell, x) =>
      console.log(
        `#${x + 1} Spell: ${spell.Name}; Spells Effect: ${spell.Effect}`
      )
    );
    console.log("");
  }
}

const message1 = new Message();
message1.writeMessage();

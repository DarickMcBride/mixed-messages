'use strict';

let potterData = require('./data/harryPotter.json');

class message {
    //fields
    #houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    #wands = [];
    constructor() {
        const wandsData = potterData.map(item => item.Wand)
        const filteredWands = wandsData.filter(wand => wand !== 'Unknown' && wand !== '' && !wand.includes('Inherited'))
        const wands = filteredWands
        this.#wands = wands

    }

    //methods
    writeMessage() {
        console.log(`Welcome to Hogwarts! Your have sorted into the ${this.#houses[0]} house. The wand you have been assigned is: ${this.#wands[0]}`)
    }
    
}


const message1 = new message();
message1.writeMessage()
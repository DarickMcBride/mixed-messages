'use strict';

let potterData = require('./data/harryPotter.json');

class message {
    constructor(wands, houses) {
        const wandsData = potterData.map(item => item.Wand)
        const filteredWands = wandsData.filter(wand => wand !== 'Unknown' && wand !== '' && !wand.includes('Inherited'))
        wands = filteredWands
        houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']
        this.wands = wands
        this.houses = houses
    }
}


const message1 = new message();
console.log(message1.wands)
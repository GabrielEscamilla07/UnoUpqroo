// juego uno 
const rl = require("readline-sync");

//define todas las 108 cartas
var deck = [];
var colors = ["yellow","blue", "red", "green"];
var types = ["comun", "especial", "comodin"];

var card = {
    color: null, // color puede ser amarillo, rojo, azul y verde
    number: null, // 0-9
    type: null //comun, especiales y comodines
};

for (var cColor = 0; cColor < colors.length; cColor++ ) {
   
    for (var cNumber = 0; cNumber < 10; cNumber++ ) {
        deck.push({color: colors[cColor], number: cNumber, type: "comun"})
    }
    for (var cNumber1 = 1; cNumber1 < 10; cNumber1++ ) {
        deck.push({color: colors[cColor], number: cNumber1, type: "comun"})
    }
 deck.push({color: colors[cColor], number: "+2", type: "especiales"});
 deck.push({color: colors[cColor], number: "+2", type: "especiales"});
 deck.push({color: colors[cColor], number: "B", type: "especiales"});
 deck.push({color: colors[cColor], number: "B", type: "especiales"});
 deck.push({color: colors[cColor], number: "R", type: "especiales"});
 deck.push({color: colors[cColor], number: "R", type: "especiales"});
}

 deck.push({color: null, number: "+4", type: "Comodin"});
 deck.push({color: null, number: "+4", type: "Comodin"});
 deck.push({color: null, number: "+4", type: "Comodin"});
 deck.push({color: null, number: "+4", type: "Comodin"});
 deck.push({color: null, number: "CC", type: "Comodin"});
 deck.push({color: null, number: "CC", type: "Comodin"});
 deck.push({color: null, number: "CC", type: "Comodin"});
 deck.push({color: null, number: "CC", type: "Comodin"});

 console.log(deck);

const players = rl.question("cuantos jugadores seran?", {})

console.log(players);
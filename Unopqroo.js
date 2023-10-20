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

// console.log(deck);

const players = rl.question("cuantos jugadores seran?", {})
const totalCards = players * 7;
//reparitir 7 cartas x jugador
//recorro el totaal de tarjetas (total de tarjetas = trajetas/7 * jugador)
//un arregolo * jugador
var cardsPlayers = {};

for(var cTCards = 0; cTCards < 7; cTCards++){
    for(var cPlayers = 0; cPlayers < players; cPlayers++){
       if (!cardsPlayers["player_"+cPlayers]){
        cardsPlayers["player_"+cPlayers] = [];
       }
       
        cardsPlayers["player_"+cPlayers].push(deck.shift());
    }
}

var trash = [];
trash.push (deck.shift());

console.log(trash);
 
function cardValidation (card) {
    console.log(card.number);
    if (card.color == trash[trash.length-1].color || card.number == trash[trash.length-1].number) {
        console.log("es igual");    
    } else {
        console.log("no es igual");
    }
}
//console.log();
//cardValidation({color: "yellow",number: 2,type: "comun"});

//for(const player in cardsPlayers){}
for (var MoreFour = 0; MoreFour < 4; MoreFour++) {
    cardsPlayers["player_1"].push(deck.shift());
}
console.log("jugador actual", cardsPlayers["player_0"]);
console.log("siguiente jugador", cardsPlayers["player_1"]);
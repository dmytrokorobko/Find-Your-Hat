const { Field } = require('./Field');
const { Player } = require('./Player');
const { Game } = require('./Game');

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//Initialize level
const myField = new Field(Field.generateRandomLevel(10, 10, 30));

//Initialize player
const player = new Player();
player.setRandomPosition(myField.getLevelWidth(), myField.getLevelHeight());

//Initialize game
const game = new Game(myField, player);

//Play game
let play = true;
while(play) {
   myField.print();
   const move = prompt('Where to move? u - up, d - down, l - left, r - right: ');
   if (move === 'q') {
      console.log('Exit game');
      break;
   }
   player.setLocation(move);
   const result = game.playerMove();
   if (game.isGameContionue(result)) continue;
   else break;   
}
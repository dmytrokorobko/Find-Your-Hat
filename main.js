const { Field } = require('./Field');
const {Player} = require('./Player');
const {Game} = require('./Game');

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const myField = new Field([
   [pathCharacter, fieldCharacter, hole],
   [fieldCharacter, hole, fieldCharacter],
   [fieldCharacter, hat, fieldCharacter]
]);

const player = new Player(0, 0);
const game = new Game(myField, player);

let play = true;
while(play) {
   myField.print();
   const move = prompt('Where to move? u - up, d - down, l - left, r - right: ');
   if (move === 'q') {
      console.log('Exit game');
      break;
   }
   player.setLocation(move);
   const result = game.playerMove(hat, hole);
   if (game.isGameContionue(result, pathCharacter)) continue;
   else break;   
}
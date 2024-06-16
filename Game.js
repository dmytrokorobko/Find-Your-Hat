class Game {
   constructor(level, player) {
      this.level = level;
      this.player = player;
   }

   playerMove(hat, hole) {
      //check borders
      if (this.player.getLocation().y >= 0 && this.player.getLocation().y < this.level.getLevel().length && 
                           this.player.getLocation().x >= 0 && this.player.getLocation().x < this.level.getLevel()[0].length) {
         if (this.level.getLevel()[this.player.y][this.player.x] === hole) return 'hole';
         else {
            if (this.level.getLevel()[this.player.y][this.player.x] === hat) return 'win';
            else return 'continue';
         }
      } else return 'borders';
   }

   isGameContionue(playerPosition, pathCharacter) {
      if (playerPosition === 'win') {
         console.log('You have won!!!');
         return false;
      }
      else if (playerPosition === 'hole' || playerPosition === 'borders') {
         if (playerPosition === 'hole') console.log('You have got in hole');
         else console.log('You have got out of the borders');
         return false;
      } 
      else {
         //draw player's move
         this.level.updateLevel(this.player.getLocation().x, this.player.getLocation().y, pathCharacter);
         return true;
      } 
   }
}

module.exports = {Game};
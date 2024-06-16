class Game {
   constructor(level, player, hat = '^', hole = 'O', pathCharacter = '*') {
      this.level = level;
      this.player = player;
      this.hat = hat;
      this.hole = hole;
      this.pathCharacter = pathCharacter;        
      this.updatePlayerLocationOnMap();    
   }

   playerMove() {
      //check borders
      if (this.player.getLocation().y >= 0 && this.player.getLocation().y < this.level.getLevel().length && 
                           this.player.getLocation().x >= 0 && this.player.getLocation().x < this.level.getLevel()[0].length) {
         if (this.level.getLevel()[this.player.y][this.player.x] === this.hole) return 'hole';
         else {
            if (this.level.getLevel()[this.player.y][this.player.x] === this.hat) return 'win';
            else return 'continue';
         }
      } else return 'borders';
   }

   isGameContionue(playerPosition) {
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
         this.updatePlayerLocationOnMap();
         return true;
      } 
   }

   updatePlayerLocationOnMap() {
      this.level.updateLevel(this.player.getLocation().x, this.player.getLocation().y, this.pathCharacter);
   }
}

module.exports = { Game };
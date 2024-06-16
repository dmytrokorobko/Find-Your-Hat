class Player {
   constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
   }

   setRandomPosition(levelWidth, levelHeight) {
      const posX = Math.floor(Math.random() * levelWidth);
      const posY = Math.floor(Math.random() * levelHeight);
      this.x = posX;
      this.y = posY;
   }

   setLocation(direction) {
      if (direction === 'u') this.y -= 1;
      else if (direction === 'd') this.y += 1;
      else if (direction === 'l') this.x -= 1;
      else if (direction === 'r') this.x += 1;
   }

   getLocation() {
      return {x: this.x, y: this.y};
   }
}

module.exports = { Player };
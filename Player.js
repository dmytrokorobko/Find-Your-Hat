class Player {
   constructor(x, y) {
      this.x = x;
      this.y = y;
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

module.exports = {Player};
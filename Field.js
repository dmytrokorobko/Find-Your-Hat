class Field {
   constructor(level) {
      this.level = level;
   }

   getLevel() {
      return this.level;
   }

   getLevelWidth() {
      if (this.level !== undefined && this.level[0] !== undefined) return this.level[0].length;
      else return 0;
   }

   getLevelHeight() {
      if (this.level !== undefined) return this.level.length;
      else return 0;
   }

   updateLevel(x, y, sign) {
      this.level[y][x] = sign;
   }

   print() {
      for (let i = 0; i < this.level.length; i++) {
         let row = this.level[i].join("");
         console.log(row);
      }
   }

   static generateRandomLevel(width, height, hard, hat = '^', hole = 'O', field = '░') {
      const randomLevel = [];      
      for (let i = 0; i < height; i++) {
         const rr = []
         for (let j = 0; j < width; j++) {
            rr.push(field);
         }
         randomLevel.push(rr);
      }
      const holesMax = width * height * hard / 100;
      for (let i = 0; i < holesMax; i++) {
         const randomX = Math.floor(Math.random() * width);
         const randomY = Math.floor(Math.random() * height);
         randomLevel[randomY][randomX] = hole;
      }

      const randomX = Math.floor(Math.random() * width);
      const randomY = Math.floor(Math.random() * height);
      randomLevel[randomY][randomX] = hat;

      return randomLevel;
   }
}

module.exports = { Field };
class Field {
   constructor(level) {
      this.level = level;
   }

   getLevel() {
      return this.level;
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
}

module.exports = {Field};
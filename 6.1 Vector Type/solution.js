class Vec {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  plus(vector) {
    this.x += vector.x
    this.y += vector.y
    return this
  }
  minus (vector) {
    this.x -= vector.x
    this.y -= vector.y
    return this
  }
  get length() {
    //To find the length of a cordinations we use the Pythagorean Formula
    let result = Math.pow(this.x, 2) + Math.pow(this.y, 2)
    return Math.sqrt(result)
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
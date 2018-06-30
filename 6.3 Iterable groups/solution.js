class Group {
    constructor (array) {
      this.array = array
    }
    static from (array) {
      let group = new Group(array)
      return group.array
    }
  }
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c
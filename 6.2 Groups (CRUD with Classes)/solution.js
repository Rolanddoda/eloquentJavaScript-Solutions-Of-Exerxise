class Group {
    constructor (array) {
      this.array = array
    }
    add(number) {
      this.array.push(number)
    }
    delete (number) {
      let index = this.array.findIndex(item => item === number)
      if (index !== -1)
        this.array.splice(index, 1)    
    }
    has (number) {
      return this.array.includes(number)
    }
    static from (array) {
      return new Group(array)    
    }
  }
  
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false
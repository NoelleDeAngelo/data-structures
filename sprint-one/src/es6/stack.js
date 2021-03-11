class Stack {

  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    var popped = this.storage[this.count - 1];
    if (this.count > 0) {
      this.count -= 1;
    }
    return popped;
  }

  size() {
    return this.count;
  }
}
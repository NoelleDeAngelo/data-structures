class Queue {

  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    var dequeued = this.storage[0];
    if (this.count > 0) {
      this.count -= 1;
    }
    for (var i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    return dequeued;
  }

  size() {
    return this.count;
  }

}

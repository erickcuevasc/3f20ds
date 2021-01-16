//Priority
//Erick Cuevas Ceballos 3°F
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    }
function enqueue(element) {
        this.dataStore.push(element);
}
function dequeue() {
    return this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length-1];
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
    return true;
    }
    else {
    return false;
  }
}
function Player(name, code) {
    this.name = name;
    this.code = code;
}
function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
    if (this.dataStore[i].code < priority) {
    priority = i;
    }
    }
    return this.dataStore.splice(priority,1);
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i].name + " Turno: "
    + this.dataStore[i].code + "\n";
    }
    return retStr;
}
var p = new Player("Erick",5);
var ed = new Queue();
ed.enqueue(p);
p = new Player("Juan", 4);
ed.enqueue(p);
p = new Player("Fernando", 3);
ed.enqueue(p);
p = new Player("Rodolfo", 2);
ed.enqueue(p);
p = new Player("Grecia", 1);
ed.enqueue(p);
console.log(ed.toString());

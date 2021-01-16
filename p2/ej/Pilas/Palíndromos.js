//Pilas Palíndromos
//Erick Cuevas Ceballos
class Stack {
    constructor(){
        this.items = {};
        this.top = 0;
    }
    push(data){
        this.top++;
        this.items[this.top] = data;
    }
    pop(){
        let deletedata;
        if(this.top){
            deletedata = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedata;
        }
    }
    length(){
        return this.top;
    }
}
function isPalindrome (word){
        var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
    rword += s.pop();
    }
    if (word == rword) {
    return true;
    }
    else {
    return false;

 }
}
var word = "oso";
if (isPalindrome(word)) {
console.log(word + " es palíndromo.");
}
else {
console.log(word + " no es palíndromo.");
}
var word = "erick";
if (isPalindrome(word)) {
console.log(word + " es palíndromo.");
}
else {
console.log(word + " no es palíndromo.");
}
//Conversión
//Erick Cuevas Ceballos 3°F
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
function mulBase(num, base) {
    var s = new Stack();
    do {
    s.push(num % base);
    num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
    converted += s.pop();
    }
    return converted;
    }
    var num = 7;
    var base = 5;
    var newNum = mulBase(num, base);
    console.log(num + " Convertido a base " + base + " es " + newNum);
    
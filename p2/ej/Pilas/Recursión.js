//Pilas recursión
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
function factorial(n) {
    if (n === 0) {
    return 1;
    }
    else {
    return n * factorial(n-1);
    }
    }
    console.log("Factorial de "+ 10 +" es = " +factorial(10)); 
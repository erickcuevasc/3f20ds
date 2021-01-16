//Lista Enlazada simple
//Erick Cuevas Ceballos
class Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.begin = null;
        this.size = 0;
    }
    add(data){
        let newNode = new Node(data,null);
        if(!this.begin){
            this.begin = newNode;
        }else{
            let here = this.begin;
            while(here.next){
                here = here.next;
            }
        }
        this.size++;
    }
}
let List = new LinkedList();
console.log(List);
 List.add(1);
 List.add(2)
 console.log(List);
//Presiona F5 para evitar un error de sintaxís

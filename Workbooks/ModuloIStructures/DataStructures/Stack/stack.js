import Node from "../Node.js";

export default class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push = val => {
        const node = new Node(val) //Creamos el nodo con el valor.
        if(!this.first){//Si aún no hay un primer elemento
            this.first = node;
            this.last = node;//El primer nodo de un stack vacío siempre será el último
        }
        else {
            let aux = this.first;
            this.first = node;
            this.first.next = aux //El anterior elemento se guarda como referencia.
        }
        return ++this.size //incrementamos el valor de la pila
    }

    pop = () =>{
        if(!this.first) return null //si no hay nada, no devuelvas nada.
        let aux = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        /**
         * Si hay un siguiente elemento, entonces ese será el nuevo "primero", caso contrario
         * estará recibiendo un null, indicando que la pila está vacía.
         */
        this.first = this.first.next;
        this.size--;
        return aux.value;
    }
}
import Node from "../Node.js";

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Un append siempre agrega un nodo al final
  append(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Remueve el último nodo de una lista
  remove(value) {
    if (this.length === 0) {
      return null; // Si la lista está vacía, no hay nada que remover
    }

    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        if (current === this.head) {
          // Si el nodo actual es la cabeza "Head"
          this.head = current.next;
          if (this.head) {
            this.head.previous = null;
          } else {
            this.tail = null; // Si ya no queda ni siquiera el head, entonces la lista está vacía
          }
        } else if (current === this.tail) {
          // Si el nodo a remover está en la cola
          this.tail = current.previous;
          this.tail.next = null;
        } else {
          // Si no es ninguno de los extremos, recorreremos la lista hasta encontrarlo
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
        this.length--;
        return current.value; // Nodo removido correctamente. 
      }
      current = current.next;
    }

    return null; // No se pudo encontrar el valor en la lista
  }

  search(taskDescription) {
    let current = this.head;
    while (current !== null) {
      if (current.value.task === taskDescription) {
        return current; // Encontramos el nodo en el task
      }
      current = current.next;
    }
    return null; // Nodo no encontrado
  }


  //Método para mostrar la información
  printList() {
    let current = this.head;
    let values = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}
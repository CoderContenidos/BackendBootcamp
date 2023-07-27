import Stack from '../../DataStructures/Stack/stack.js';

/*
 * Para 
 */
function reverseString(inputString) {
    //Creamos la pila que llenaremos
    const stack = new Stack();
  
    // Insertamos los elementos a la pila
    for (let char of inputString) {
      stack.push(char);
    }
  
    // Gracias al principio LIFO, bastará con hacer 'pop' hasta que se vacíe la pila.
    let reversedString = '';
    while (stack.size > 0) {
      reversedString += stack.pop();
    }
  
    return reversedString;
  }


  console.log(reverseString("Hola a todos"));
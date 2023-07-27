import Stack from "../../DataStructures/Stack/stack.js";

function isBalanced(expression) {
  const stack = new Stack();

  // Mapearemos los elementos de abertura, con los de cierre
  const symbolPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let char of expression) {
    // Si el caracter que entra es de apertura, hay que meterlo a la pila
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      // Aquí va lo interesante, si el símbolo es un caracter de cierre, compararemos con el último caracter de la expresión 
      const lastOpeningSymbol = stack.pop();

      // Si la pila estaba vacía, o el par obtenido no corresponde al caracter actual, retornamos falso.
      if (!lastOpeningSymbol || char !== symbolPairs[lastOpeningSymbol]) {
        return false;
      }
    }
  }

  // At the end, the stack should be empty for a balanced expression
  return stack.size === 0;
}

// Test the function
const expression1 = "(({}))";
const expression2 = "{[({})]}";
const expression3 = "(()";
const expression4 = "[(])";

console.log(isBalanced(expression1)); // Output: true
console.log(isBalanced(expression2)); // Output: true
console.log(isBalanced(expression3)); // Output: false
console.log(isBalanced(expression4)); // Output: false
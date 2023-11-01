// Ejercicio 23 - Copia Superficial de Subarray

// Dado un array de números, utiliza el método slice() para crear una copia superficial de una porción del array. Luego, imprime el subarray resultante.
const numeros = [1, 2, 3, 4, 5]
const subArray = numeros.slice(2, 4)
// slice selecciona desde la posicion 2 hasta la 4 sin incluir esta última
// slice(p): selecciona todos los elementos desde la posicion p
// slice(-p): selecciona las últimas p posiciones del Array

console.log(subArray)
// Resultado: [3, 4]

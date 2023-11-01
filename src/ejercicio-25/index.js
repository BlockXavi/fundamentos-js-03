// Ejercicio 25 - Filtrar Números Pares

// Dado un array de números, utiliza el método filter() para crear un nuevo array que contenga solo los números pares. Luego, imprime el nuevo array resultante.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
const numerosPares = numeros.filter((num) => num % 2 === 0)
// Utilizo una función flecha para determinar qué elemento num del Array son pares

console.log(numerosPares)
// Resultado: [2, 4, 6, 8]


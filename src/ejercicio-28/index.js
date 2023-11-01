// Ejercicio 28 - Crear Nuevo Array con map()

// Dado un array de números, utiliza el método map() para crear un nuevo array que contenga el cuadrado de cada número. Luego, imprime el nuevo array resultante.
const numeros = [1, 2, 3, 4, 5]
const numerosCuadrado = numeros.map((num) => num*=num)

console.log(numerosCuadrado)
// Resultado: [1, 4, 9, 16, 25]


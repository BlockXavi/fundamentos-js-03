// Ejercicio 30 - Reducir a un Solo Valor

// Dado un array de números, utiliza el método reduce() para sumar todos los números y obtener un valor total. Luego, imprime el valor total.
const array = [1, 2, 3, 4, 5]
const suma = array.reduce((total, num) => total+=num, 0) 

console.log(suma)
// Resultado: 15

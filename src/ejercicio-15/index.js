// Ejercicio 15 - Redondear

// Dado un número decimal, utiliza la función Math.round() para redondearlo al entero más cercano. Luego, imprime el resultado.
const valor = 3.5
const valorRedondeado = Math.round(valor)

console.log(valorRedondeado)
// Resultado: 4 (desde 3.5 ya redondea a 4)
console.log(Number.isInteger(valorRedondeado))
// Resultado: true

// Acceder a los elementos de un Array

document.write("<h3>ELEMENTOS DE UN ARRAY</h3>")
const numbers = [1, 2, 3, 4, 5]

document.write("El Arreglo en su primera posición es "+numbers[0]+"<br>")

document.write("El Arreglo de la posición dos es "+numbers[2]+"<br>")

//usar variables para acceder a los elementos de un array

let index = 4

document.write("La variable index corresponde a: "+numbers[index]+"<br>")

//Modificar los elementos de un Array

numbers[0] = 10
numbers[2] = 30

document.write("El Array modificado es: "+numbers+"<br>")

//Longitud de un Array
document.write("<h3>LA LONGITUD DE UN ARRAY</h3>")

const frutas = ["manzana", "pera", "platáno", "fresa"]

document.write("El Array de frutas es: "+frutas+"<br>")
document.write("El Array de frutas tiene una longitud de: "+frutas.length+"<br>")
const obj = {
    numero: 1
}

console.log (obj.numero)

const copia = obj /* é uma referência ao objeto principal */
copia.numero = 5 /* altera diretamente o objeto prinicpal*/

console.log (copia.numero)
console.log (obj.numero)

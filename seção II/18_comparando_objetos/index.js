function ninja (nome, arma) {
    this.nome = nome,
    this.arma = arma
}

const naruto = new ninja ('Naruto', 'shuriken')
const sasuke = new ninja ('Sasuke', 'Kunai')
const cloneNaruto = new ninja ('Naruto', 'shuriken')
const realCloneNaruto = naruto

console.log (naruto === sasuke) /* falso, pois os objetos são diferentes*/
console.log (naruto === cloneNaruto) /* falso, pois são objetos diferentes, embora os valores das propriedades sejam iguais */
console.log (naruto === realCloneNaruto) /* true, pois um objeto é referência do outro */
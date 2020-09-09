const pessoa1 = {
    nome: 'Tiago',
    sobrenome: 'Laneri',
    getName () {
        `O nome da pessoa1 é ${this.name}${this.sobrenome}`
    }
}

const pessoa2 = {
    nome:'José'
}

Object.assign (pessoa2, pessoa1)
console.log (pessoa2)


pessoa2.nome = 'José'
console.log (pessoa2)
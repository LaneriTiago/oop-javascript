let Humano = class {
    constructor (name, idade) {
        this.name = name
        this.idade = idade
    }
    getName () {
        return `O nome dele é ${this.name}`
    }
}

let fulano = new Humano ('Tiago Luis Laneri', 27)

console.log (fulano)
console.log (fulano.name)
console.log (fulano.getName())
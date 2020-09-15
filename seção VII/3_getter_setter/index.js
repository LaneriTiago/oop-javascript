class Humano {
    constructor (name, idade) {
        this.name = name
        this.idade = idade
    }
    
    set setName (name) {
        this.name = name
    }

    get getName () {
        return `O nome dele é ${this.name}`
    }

}

let fulano = new Humano ('Tiago Luis Laneri', 27)


fulano.setName = 'Thiago Luiz Laneri' // set permite alterar o valor de uma propriedade

console.log (fulano.name) // propriedade name com valor alterado

console.log (fulano.getName) // get permite chamar uma propriedade
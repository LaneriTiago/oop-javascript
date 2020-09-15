class Humano {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
}

class Indio extends Humano {
    constructor (name, age, tribe) { // atributos do pai e filho
        super (name, age) // chamar as propriedades pai (classe Humano)
        this.people = 'Índio'
        this.tribe = tribe
    }
}

let indio = new Indio ('Aiyra', 25, 'Tatuyos')

console.log (indio)
console.log (indio.name)
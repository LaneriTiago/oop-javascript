console.log ('Exercício 3')

// Crie um objeto ninja por construction function
// Crie uma propriedade nome e um método atirarShuriken

function ninja (nome) {
    this.nome = nome,
    this.atirarShuriken = function () {
        return `O ${this.nome} atirou uma shuriken`
    }
}

const newNinja = new ninja ('Naruto')

console.log (newNinja.nome)
console.log (newNinja.atirarShuriken())
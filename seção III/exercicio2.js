console.log ('Exercício 2')
// Crie um objeto Pessoa que tem uma propriedade nome. 
//Crie um método que exibe o nome do objeto pessoa.

const pessoa = {
    name: 'Tiago Luis Laneri',
    getName () {
        return `O nome da pessoa é ${this.name}` 
    }
}

console.log (pessoa.getName())


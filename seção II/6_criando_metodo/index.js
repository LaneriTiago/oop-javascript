const pessoa = {
    nome: 'Tiago Luis Laneri',
    falar: function (name) {
        if (!name) {
            return 'Olá, mundo!'
        } else {
            return `${pessoa.name = name} diz: Olá, mundo`} 
    }
}

console.log (pessoa.falar())

console.log (`${pessoa.nome} diz: ${pessoa.falar()}`)

console.log (pessoa.falar('Luís Inácio'))
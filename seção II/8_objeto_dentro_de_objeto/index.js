const pessoa = {
    nome: 'Tiago Luis Laneri',
    idade: 18,
    falar: function (name) {
        if (!name) {
            return 'Olá, mundo!'
        } else {
            return `${pessoa.name = name} diz: Olá, mundo`} 
    },
    podeDirigir: function () {
        if (this.idade >= 18) {
            return `${this.nome} pode dirigir`
        } else {
            return `${this.nome} não pode dirigir`
        }
    },
    caracteristicas: {
        cnh: true,
        carteira: ['dinheiro', 'rg', 'cpf', 'foto']
    }
}

let n = pessoa.caracteristicas.carteira

console.log (pessoa.caracteristicas.carteira[3])

for (let i = 0; i < n.length; i++) {
    console.log (n[i])
}
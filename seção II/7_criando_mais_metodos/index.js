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
    }
}

console.log (pessoa.podeDirigir())
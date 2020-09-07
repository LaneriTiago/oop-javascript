function militar (nome) {
    this.nome = nome
    this.patente = ['soldado', 'cabo', 'sargento', 'tenente', 'coronel', 'capitao']
    this.arma = '.40'
    this.acao = function () {
        return `O militar ${this.nome} atira com a ${this.arma}`
    }
}

const militar01 = new militar ('josé')
console.log (`O nome do 01 é ${militar01.nome} e sua patente é ${militar01.patente[0]}`)

const militar02 = new militar ('Juca')
console.log (militar02.acao)

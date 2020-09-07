function quarto (porta, cama, videogame, computador, guardaroupa) {
    return {
        corPorta: porta,
        tipoCama: cama,
        videogame: videogame,
        computador: computador,
        guardaroupa: guardaroupa
    }
}

const quarto1 = quarto('mogno', 'casal', 'playstation 4', 'notebook samsung', 'simples')

console.log (quarto1)
console.log (quarto1.constructor)

function outroQuarto (porta, cama, videogame, computador, guardaroupa) {
        this.corPorta = porta,
        this.tipoCama = cama,
        this.videogame = videogame,
        this.computador = computador,
        this. guardaroupa = guardaroupa
}

const quarto2 = new outroQuarto ('mogno', 'casal', 'playstation 4', 'notebook samsung', 'simples')

console.log (quarto2)
console.log (quarto2.constructor)
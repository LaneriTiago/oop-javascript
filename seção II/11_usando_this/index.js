const militar = {
    uniforme: true,
    patente: ['soldado', 'cabo', 'sargento', 'tenente', 'capitão', 'major'],
    arma: '.40',
    atirar: function () {
        return console.log (this.arma)
    }
}

militar.atirar()
for (let i = 0; i < militar.patente.length; i++) {
    console.log (militar.patente[i])
}

militar.patente.map((item, index, array) => {
    return console.log (index, item)
})


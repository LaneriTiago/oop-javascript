function carro (marca, modelo, portas, ano, liga) {
    return {
        marca: marca,
        modelo: modelo,
        portas: portas,
        ano: ano,
        liga: function () {
            if (this.liga === true) {
                return `O carro da marca ${this.marca} está ligado`}
            else {
                return `O carro da marca ${this.marca} está desligado`
            }
        }
    }
}

const carro1 = carro('Chevrolet', 'onix', 4, 2018, true)

console.log (carro1.portas)
console.log (carro1.liga())

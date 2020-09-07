const marca = 'chevrolet'
const modelo = 'onix'
const ano = 2016
const portas = 4


const carro = {
    marca,
    modelo,
    ano,
    portas,
    ligar () {
        return 'O carro ligou'
    },
    desligar () {
        return 'O carro desligou'
    }
}

console.log (carro.ligar())
console.log (carro.desligar())



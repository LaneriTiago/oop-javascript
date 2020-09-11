console.log ('Exercício 7')
//Crie dois objetos que compartilhem nomes de propriedades via object literals;
//Uma variável deve definir a parte que se repete nas propriedades dos objetos;

const marca = 'volkswagem'
const modelo = 'gol'
const ano = '2013'

const carro1 = {
    marca,
    modelo,
    ano
}

const carro2 = {
    marca,
    modelo,
    ano,
    ligado: false,
    ligar () {
        this.ligado = true
    }
}

console.log (carro2.ligar())
console.log (carro1, carro2)

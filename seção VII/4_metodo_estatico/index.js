class Helper {
    static tratamento (tratamento, nome) {
        return `Bem-vindo ${tratamento} ${nome}`
    }
}

let pessoa1 = Helper.tratamento ('Ms.', 'Tiago')
let pessoa2 = Helper.tratamento ('Dr.', 'Laneri')
let pessoa3 = Helper.tratamento ('Sr.', 'Tício')

console.log (pessoa1)
console.log (pessoa2)
console.log (pessoa3)
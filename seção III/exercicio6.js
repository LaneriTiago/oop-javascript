console.log ('Exercício 6')
//Crie uma função que retorna se o objeto é uma instância de outro objeto;
//Deve apresentar no console as mensagens de positivo e negativo;
function estoque (arroz, feijao, batata) {
    this.arroz = arroz,
    this.feijao = feijao,
    this.batata = batata
}

function funcionarios (nome, sobrenome, dataContratacao) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.dataContratacao = dataContratacao
}


const mevio = new funcionarios ('Mevio', 'da Silva', '20/08/2020')
const estqMarc = new estoque (30, 24, 80)

function compareObj (obj1, classe) {
    if (obj1 instanceof classe) {
        return true
    } else {
        return false
    }
}

console.log (compareObj (mevio, estoque)) // false
console.log (compareObj (mevio, funcionarios)) // false

// (obj instanceof classe) verifica se o obj pertence à classe
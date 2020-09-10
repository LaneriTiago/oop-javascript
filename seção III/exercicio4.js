console.log ('Exercício 4')

//Criar um objeto ninja com a propriedade shuriken e com 4 estrelas ninja
//A cada método do disparo subtraia uma;
//O ninja não pode jogar mais shurikens caso elas tenham acabado

const ninja1 = {
    shuriken: 4,
    action () {
        if (this.shuriken > 0) {
            return this.shuriken--, `Now the ninja has ${ninja1.shuriken} shurikens`
        } else {
            return 'there is no more shurikens'
        }
    }
}

console.log (ninja1.action())
console.log (ninja1.action())
console.log (ninja1.action())
console.log (ninja1.action())
console.log (ninja1.action())

function ninja2 (name, qtd) {
    this.name = name
    this.shuriken = qtd
    this.action = function () {
        if (this.shuriken > 0) {
            return this.shuriken -= 1, `${this.name} has ${this.shuriken} shurikens`
        } else {
            return 'there is more no shuriken'
        }
    }
}

const sasuke = new ninja2 ('sasuke', 4)

console.log (sasuke.action())
console.log (sasuke.action())
console.log (sasuke.action())
console.log (sasuke.action())
console.log (sasuke.action())






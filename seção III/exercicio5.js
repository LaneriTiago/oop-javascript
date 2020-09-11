console.log ('Exercício 5')
//Crie um objeto inimigo, com as propriedades nome e vivo (que é um boolean e inicie como true);
//O método atirarShuriken do exercício passado deve 'matar' 
//o inimigo, setando a propriedade do inimigo vivo como false

function ninja2 (name, qtd) {
    this.name = name
    this.shuriken = qtd
    this.action = function (enemy) {
        if (this.shuriken > 0) {
            return `${this.name} has ${this.shuriken -= 1} shurikens, ${enemy.alive = false}`
        } else {
            return 'there is more no shuriken'
        }
    }
}

function inimigo (name) {
    this.name = name
    this.alive = true
}

const kakashi = new ninja2 ('Kakashi', 4)
const rockLee = new inimigo ('Rock Lee')

console.log (kakashi)
console.log (rockLee)
console.log (kakashi.action(rockLee))
console.log (rockLee.alive)





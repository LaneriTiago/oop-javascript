console.log ('Exercício 8')
//Crie um objeto que tenha características de um caminhão e coloque em propriedades distintas;
//Com destructuring coloque essas propriedades em variáveis separadas


const caminhao = {
    boleia: true,
    cabineEstendida: true,
    roda: 'aro 16',
    marca1: 'Ford',
    modelo1: 'Cargo 816'
}

let {boleia, cabineEstendida, roda, marca1, modelo1} = caminhao

console.log (boleia, cabineEstendida, roda, marca1, modelo1)
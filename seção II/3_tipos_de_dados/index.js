let computador = {
    material: 'plástico',
    componentes: ['processador', 'memória', 'de entrada', 'de saída'],
    sistemaOperacional: ['windows', 'MAC', 'Linux' ],
    funciona: true
}

console.log (computador)
console.log (computador.componentes[2])
console.log (computador.sistemaOperacional)

for (let i = 0; i < computador.componentes.length; i++) {
    console.log (`Componente ${computador.componentes[i]}`)
}
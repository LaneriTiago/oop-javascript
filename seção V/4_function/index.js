function teste (a) {
    return a
}

console.log (teste('opa!'))


teste1 = new Function (
    'a',
    'return arguments'
)

console.log (teste1('testando')[0])
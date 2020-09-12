const a = '     teste  '.trim()
const b = new String ('teste')

console.log (a.toUpperCase())
console.log (b[0].toUpperCase())

console.log (a.charAt(2))

console.log (a.slice(0))



function teste (str) {
     return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`
}

console.log (teste('tiaGO lUIS lANERI'))
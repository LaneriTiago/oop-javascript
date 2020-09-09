const obj = {
    a: 1
}

const obj2 = {
    a: 2
}

console.log (Object.is (obj, obj2)) // false //

const obj3 = obj

console.log (Object.is (obj, obj3)) // true //

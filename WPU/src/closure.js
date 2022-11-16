// buat function factories
let ucapSalam = (waktu)  => {
    return (nama) => {
        return `Hai ${nama}, selamat ${waktu}!`
    }
}

let selamatSiang = ucapSalam('siang')
console.log(selamatSiang('Nova'))


// seolah olah membuat private method
// IIFE
let add = (function() {
    let counter = 0
    return function() {
        return ++counter
    }
})()

console.log(add())
console.log(add())
console.log(add())

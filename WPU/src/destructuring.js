// const hobies = ['reading', 'listening music', 'eating', 'sleeping']
// const [ hobby1, hobby2, hobby3, hobby4 ] = hobies
// console.log(hobby1)

// skipping items
// const [ hobby1, , , hobby4 ] = hobies
// console.log(hobby4)

// return value function
// const coba = () => [1, 2]
// const [ a, b ] = coba()
// console.log(a)

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5]
// console.log(a)
// console.log(values)

// const person = {
//     name: 'Nova',
//     age: 17
// }

// tidak akan berhasil
// const { a, b } = person

// nama variabel harus sama dengan property pada object
// const { name, age } = person
// console.log(name)
// console.log(age)

// assignment tanpa deklarasi object
// ({ name, age } = { name: 'Nova', age: 17 })
// console.log(age)

// materi destructuring object di buku


// Destructuring function
// urutan sangat penting
// jika data yg direturn adalah array
// let kalkulasi = function(a, b) {
//     return [ a + b, a - b, a * b, a / b ]
// }

// const [ kurang, tambah, kali, bagi ] = kalkulasi(2, 3)
// console.log(kurang)

let kalkulasi = function(a, b){
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}

const { kali, tambah, bagi, kurang } = kalkulasi(2, 3)
console.log(kali)




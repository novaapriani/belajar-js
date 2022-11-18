const angka = [-1, 3, 7, 5, 2, -4, 9, -3]

// ilustrasi filter menggunakan looping
// const angkaBaru = [] // yang tidak boleh diganti adalah tipe data
// for(let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         angkaBaru.push(angka[i])
//     }
// }
// console.log(angkaBaru)

// const angkaBaru = angka.filter(a => a >= 3)
// console.log(angkaBaru)

// const angkaBaru = angka.map(a => a * 2)
// console.log(angkaBaru)

// const angkaBaru = angka.reduce((accumulator, currentValue) => accumulator + currentValue)
// console.log(angkaBaru)

// method chaining
const angkaBaru = angka
    .filter(a => a > 5)
    .map(a => a * 3)
    .reduce((accumulator, a) => accumulator + a)
console.log(angkaBaru)
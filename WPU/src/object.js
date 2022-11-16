// tidak efektif dalam pembuatan dalam jumlah banyak
// let pelajar1 = {
//     nama: 'Nova',
//     energi: 10,
//     makan: (porsi) => {
//         this.energi += porsi
//         console.log(`Hai ${this.nama}, selamat makan!`) 
//     }
// }

// let pelajar2 = {
//     nama: 'Apriani',
//     energi: 20,
//     makan: (porsi) => {
//         this.energi += porsi
//         console.log(`Hai ${this.nama}, selamat makan!`) 
//     }
// }

// method yang digunakan tidak bisa menggunakan arrow function
// scope dari keyword 'this' nya akan berbeda 
// let methodPelajar = {
//     makan: function(porsi) {
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     },
//     main: function(jam) {
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     },
//     tidur: function(jam) {
//         this.energi += jam * 2
//         console.log(`Halo ${this.nama}, selamat tidur!`)
//     }
// }

// function Pelajar(nama, energi) {
//     // let pelajar = {}
//     let pelajar = Object.create(methodPelajar)
//     pelajar.nama = nama
//     pelajar.energi = energi

//     return pelajar
// }

// let nova = Pelajar('Nova', 10)
// let apriani = Pelajar('Apriani', 20)

// function yang dibuat tidak dimasukkan ke prototype
// function Pelajar(nama, energi){
//     this.nama = nama
//     this.energi = energi
//     this.makan = function(porsi){
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }

// let nova = new Pelajar('Nova', 10)

// function dimasukkan ke prototype
// prototypical inheritance
// function Pelajar(nama, energi){
//     let this = {Object.create.prototype} -> terjadi di balik layar
//     this.nama = nama
//     this.energi = energi

//     return this -> terjadi di balik layar
// }

// Pelajar.prototype.makan = function(porsi){
//     this.energi += porsi
//     console.log(`Halo ${this.nama}, selamat makan!`)
// }

// Pelajar.prototype.tidur = function(jam){
//     this.energi += jam * 2
//     console.log(`Halo ${this.nama}, selamat tidur!`)
// }

// Pelajar.prototype.main = function(jam){
//     this.energi -= jam
//     console.log(`Halo ${this.nama}, selamat bermain!`)
// }

// let nova = new Pelajar('Nova', 10)

// versi class 
// yang terjadi di balik layar sama seperti membuat object dengan ada prototype
class Pelajar {
    constructor(nama, energi){
        this.nama = nama
        this.energi = energi
    }

    makan(porsi){
        this.energi += porsi
        console.log(`Halo ${this.nama}, selamat makan!`)
    }

    main(jam){
        this.energi -= jam
        console.log(`Halo ${this.nama}, selamat bermain!`)
    }

    tidur(jam){
        this.energi += jam * 2
        console.log(`Halo ${this.nama}, selamat tidur!`)
    }
}

let nova = new Pelajar('Nova', 10)
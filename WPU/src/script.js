// variabel dan tipe data
let nama
nama = 'Nova Apriani'
let umur = 17
let hobi = ['rebahan', 'makan', 'repeat']
let masihSekolah = true

// aritmatika
const angkaPertama = 2
const angkaKedua = 5
let hasilTambah = angkaPertama + angkaKedua
let hasilKurang = angkaPertama - angkaKedua
let hasilKali = angkaPertama * angkaKedua
let hasilBagi = angkaPertama / angkaKedua

// function
let hitungLuasLingkaran = function (jariJari) {
    const phi = 3.14
    let hasilLuasLingkaran = phi * jariJari ** 2
    return hasilLuasLingkaran
}
console.log(`Luas lingkaran = ${hitungLuasLingkaran(10)}`)

let hitungLuasSegitiga = (alas, tinggi) => alas * tinggi / 2
let hasilLuasSegitiga = hitungLuasSegitiga(8, 4)
console.log(`Luas segitiga = ${hasilLuasSegitiga}`)

let hasil = 0
let numbers = [5, 2, 3, 4, 4]
numbers.forEach(number => {
    hasil += number 
    return hasil
})
console.log(hasil)

// looping
var i = 1
for(i; i <= 5; i++){
    console.log(`Ini adalah angka ke-${i}`)
}

let printNama = (nama) => {
    while(i <= 10){
        console.log(`Hello ${nama}`)
        i++
    }
}
printNama('Nova')

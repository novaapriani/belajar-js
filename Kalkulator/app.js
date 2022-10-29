const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Masukkan angka pertama : ', (inputAngkaPertama) => {
    rl.question('Masukkan operator : ', (operator) => {
        rl.question('Masukkan angka kedua: ', (inputAngkaKedua) => {

            const angkaPertama = parseInt(inputAngkaPertama)
            const angkaKedua = parseInt(inputAngkaKedua)
            switch (operator) {
                case '*':
                    let hasilKali = angkaPertama * angkaKedua
                    console.log(`Hasil dari ${angkaPertama} x ${angkaKedua} = ${hasilKali}`)
                    break;
                case '/':
                    let hasilBagi = angkaPertama / angkaKedua
                    console.log(`Hasil dari ${angkaPertama} / ${angkaKedua} = ${hasilBagi}`)
                    break
                case '+':
                    let hasilTambah = angkaPertama + angkaKedua
                    console.log(`Hasil dari ${angkaPertama} + ${angkaKedua} = ${hasilTambah}`)
                    break
                case '-':
                    let hasilKurang = angkaPertama - angkaKedua
                    console.log(`Hasil dari ${angkaPertama} - ${angkaKedua} = ${hasilKurang}`)
                    break
                default:
                    console.log('Kamu memasukkan operator yang salah!')
                    break;
            }
            rl.close()
        })
    })
});
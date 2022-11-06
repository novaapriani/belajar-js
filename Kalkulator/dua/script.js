const inputAngkaPertama = document.querySelector('[data-angka1]')
const inputAngkaKedua = document.querySelector('[data-angka2]')
const buttons = document.querySelectorAll('[data-button]')
const hasilKalkulator = document.querySelector('[data-hasil]')

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let angkaPertama = parseInt(inputAngkaPertama.value)
        let angkaKedua = parseInt(inputAngkaKedua.value)
        let hasil = 0
        switch (event.target.innerText) {
            case 'Kali':
                hasil = angkaPertama * angkaKedua
                hasilKalkulator.innerHTML += `Hasil dari ${angkaPertama} * ${angkaKedua} = ${hasil}`
                break
            case 'Bagi':
                hasil = angkaPertama / angkaKedua
                hasilKalkulator.innerHTML += `Hasil dari ${angkaPertama} / ${angkaKedua} = ${hasil}`
                break
            case 'Tambah':
                hasil = angkaPertama + angkaKedua
                hasilKalkulator.innerHTML += `Hasil dari ${angkaPertama} + ${angkaKedua} = ${hasil}`
                break
            case 'Kurang':
                hasil = angkaPertama - angkaKedua
                hasilKalkulator.innerHTML += `Hasil dari ${angkaPertama} - ${angkaKedua} = ${hasil}`
                break
            case 'Clear':
                inputAngkaPertama.value = ''
                inputAngkaKedua.value = ''
                hasilKalkulator.innerHTML = ''
                break
            default:
                alert('Terdeteksi bukan operator!')
                break;
        }
    })
})
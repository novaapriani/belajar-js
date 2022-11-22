// menggunakan library jquery
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: movies => console.log(movies)
// })

// menggunakan vanilla js
// function getDataFilm(url, success, error) {
//     const xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === XMLHttpRequest.DONE){
//             if(xhr.status === 200){
//                 success(xhr.response)
//             } else if(xhr.status === 404){
//                 error()
//             }
//         }
//     }

//     xhr.open('get', url)
//     xhr.send()
// }

// getDataFilm('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers', movies => console.log(JSON.parse(movies)), () => {})

// menggunakan fetch yg mengembalikan promise
// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(movies => movies.json())
//     .then(movies => console.log(movies))

// latihan promise
// let ditepati = true
// const janji = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('Janji ditepati setelah beberapa waktu.')
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             reject('Janji tidak ditepati setelah beberapa waktu')
//         }, 1000)
//     }
// })

// console.log('mulai')
// janji
//     .finally(() => console.log('Selesai menunggu'))
//     .then(response => console.log(`OK : ${response}`))
//     .catch(response => console.log(`Not OK : ${response}`))
// console.log('selesai')


// const pelajar = new Promise((resolve) => {
//     resolve({
//         nama: 'Nova',
//         umur: 17
//     })
// })

// const cuaca = new Promise((resolve) => {
//     resolve({
//         kota: 'Majalengka',
//         temp: 26
//     })
// })

// Promise.all([pelajar, cuaca])
//     .then(values => {
//         values.map(value => console.log(value.nama))
//     })

// function getDataPelajar(url, success, error){
//     let xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === XMLHttpRequest.DONE){
//             if(xhr.status === 4){
//                 success(xhr.response)
//             } else if(xhr.status === 404){
//                 error()
//             }
//         }
//     }

//     xhr.open('get', url)
//     xhr.send()
// }

// getDataPelajar('../data/pelajar.json', (results) => {
//     console.log(results)
// }, () => {

// })

// aynchrounous callback using jquery
$.ajax({
    url: '../data/pelajar.json',
    success: (results) => {
        results.forEach(p => console.log(p.nama))
    },
    error: (e) => console.log(e)
})
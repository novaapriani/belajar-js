function getPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 3000
        if(waktu < 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, waktu)
        } else {
            reject('kelamaan!')
        }  
    })
}

async function getAsync() {
    const promise = await getPromise()
    console.log(promise)
}

getAsync()
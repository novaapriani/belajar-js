function getPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 7000
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
    try {
        const promise = await getPromise()
        console.log(promise)
    }
    catch(err) {
        console.log(err)
    }
}

getAsync()
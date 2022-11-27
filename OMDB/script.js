const btnSearch = document.querySelector('.btn-search')
const inputMovie = document.querySelector('.input-movie')

btnSearch.addEventListener('click', function() {
    fetch(`http://www.omdbapi.com/?apikey=dca61bcc&s=${inputMovie.value}`)
    .then(response => response.json())
    .then(data => {
        const movies = data.Search
        let cards = ''
        movies.forEach(movie => {
            cards += showCards(movie)

            const movieEl = document.querySelector('.movie-elements')
            movieEl.innerHTML = cards

            const btnModal = document.querySelectorAll('.btn-modal')
            btnModal.forEach(btn => {
                btn.addEventListener('click', function() {
                    // tangkap data-.. pada setiap button yg diklik
                    console.log(this.dataset.imdbid)
                    fetch(`http://www.omdbapi.com/?apikey=dca61bcc&i=${this.dataset.imdbid}`)
                        .then(response => response.json())
                        .then(data => {
                            const modalMovie = document.querySelector('.modal-body')
                            modalMovie.innerHTML = showModal(data)
                        })
                })
            })
        })

        
    })
})



function showCards(movie) {
    return `<div class="col-md-4 my-5">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <img src="${movie.Poster}" class="card-img-top" alt="...">
                    <h5 class="card-title">${movie.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                    <button type="button" class="btn btn-primary btn-modal" data-bs-toggle="modal" data-bs-target="#movieModal" data-imdbID="${movie.imdbID}">Show Details</button>
                    </div>
                </div>
            </div>`
}

function showModal(data) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${data.Poster}" alt="" class="img-fluid">
                    </div>

                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${data.Title} ${data.Year}</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${data.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${data.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${data.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong> <br> ${data.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}
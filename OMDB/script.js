fetch(`http://www.omdbapi.com/?apikey=dca61bcc&s=Twilight`)
    .then(response => response.json())
    .then(data => {
        const movies = data.Search
        let cards = ''
        movies.forEach(movie => {
            cards += showCards(movie)

            const movieEl = document.querySelector('.movie-elements')
            movieEl.innerHTML = cards
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
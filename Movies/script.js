$.ajax({
    url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=Twilight',
    succes: response => {
        const movies = response.Search
        let cards = ''
        movies.forEach(movie => {
            cards += `<div class="col-md-4 my-5">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                            <img src="${movie.Poster}" class="card-img-top" alt="...">
                            <h5 class="card-title">${movie.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                            <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#movieModal">Show Details</a>
                            </div>
                        </div>
                    </div>`
        })
                   
        $('.movie-elements').html(cards)
    },
    error: err => console.log(err.responseText)
})
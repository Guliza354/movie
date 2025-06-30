const movie = window.localStorage.getItem('movie')
const film = JSON.parse(movie)
const img_url = 'https://image.tmdb.org/t/p/original'
// DOM - Document object Model and fetch
const h3FilmName = document.querySelector('h3')
const imgPoster = document.querySelector('#poster')
const mainPoster = document.querySelector('#main-poster')
const h1Name = document.getElementById('name')
const spanVoite = document.getElementById('voite')
const h3Year = document.getElementById('year')
const pOverview = document.getElementById('overview')
const h3Genres = document.getElementById('genres')
const genreListURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=2fa8f297328a4293f06805fe0c1b915d&language=ru-Ru'
function getGenreList() {
    fetch(genreListURL)
        .then((response) => {
            return response.json()
        })
        .then((genre) => {
            console.log(genre)
            for (const id of film.genre_ids) {
                const g = genre.filter((item) => {
                    h3Genres.innerText = genre
                    return item.id
                })
            }

        })
}
getGenreList()


// h3FilmName.innerText = film.title
imgPoster.src = img_url + film.poster_path
mainPoster.src = img_url + film.backdrop_path
h1Name.innerText = film.title
spanVoite.innerText = film.vote_average.toFixed(1)
h3Year.innerText = film.release_date
pOverview.innerText = film.overview



const movie = window.localStorage.getItem('movie')
const  film = JSON.parse(movie)
const img_url = 'https://image.tmdb.org/t/p/original'
// DOM - Document object Model and fetch
const h3FilmName = document.querySelector('h3')
const imgPoster = document.querySelector('#poster')
const mainPoster = document.querySelector('#main-poster')

h3FilmName.innerText = film.title
imgPoster.src = img_url + film.poster_path
mainPoster.src = img_url + film.backdrop_path

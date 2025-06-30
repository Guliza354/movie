const h2Title = document.getElementById('h2')
const filterBtns = document.querySelectorAll('.filter-btns button')
const img_url = 'https://image.tmdb.org/t/p/original'
const API_KEY = '?api_key=2fa8f297328a4293f06805fe0c1b915d'
const BASE_URL = 'https://api.themoviedb.org/3'
const endPoints = {
    trendingMovies: '/trending/movie/week'
}
const cards = document.querySelector('.cards')
function renderMovies(movies =[]){
     cards.innerHTML = ''
    for (const m of movies) {
        cards.innerHTML +=
        `<div class="card">
                    <span> <img src="/img/star.svg" alt="">${m. vote_average.toFixed(1)}</span>
                    <img class="poster" src="${img_url+m.poster_path}" alt="">
                    <h3>${m.title}</h3>
                </div>`
    }
}
// anydesk
for (const btn of filterBtns) {
    btn.onclick = () => {
        h2Title.innerHTML =
            `${btn.innerText} <span>(120)</span>`
    }
}
let card = null 
function getTrendingMovies() {
    fetch(BASE_URL + endPoints.trendingMovies + API_KEY)
        .then(response => response.json())
        .then(movies => {
            console.log(movies); //movies{ results: [20]}
            console.log(movies.results);
            renderMovies(movies.results);
            card = document.querySelectorAll('.card')
            card.forEach((c,index)=>{
                c.addEventListener('click',()=>{
                    console.log(movies.results[index])
                    window.localStorage.setItem('movie',JSON.stringify(movies.results[index]))
                    window.location.href ='/detail.html'
                })
            })
        })
};

getTrendingMovies();
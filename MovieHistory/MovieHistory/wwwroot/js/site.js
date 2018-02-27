<<<<<<< HEAD
// Write your JavaScript code.

﻿$("#movieSearch__button").click(evt => {
=======
﻿$("#movieGrid").on("click", evt => {
    const apiId = evt.target.parentElement.id.split("--")[1]
    const movie = MovieStore.movies.find(m => parseInt(apiId) === m.id)

    window.location = `/Movie/Track/?apiId=${movie.id}&title=${movie.title}&img=${movie.poster_path}`
})

$("#movieSearch__button").click(evt => {
>>>>>>> upstream/master
    const userSearchString = $("#movieSearch").val()
    $.ajax({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?api_key=${moviedb.key}&language=en-US&query=${userSearchString}&page=1&include_adult=false`
    }).then(res => {
<<<<<<< HEAD
        let titles = "<div class='row'>"
        res.results.forEach((m, idx) => {
            titles += `
                <div class="col-md-3">
                    <h2>${m.title}</h2>
                    <img src="https://image.tmdb.org/t/p/w154${m.poster_path}" />
=======
        MovieStore.movies = res.results
        let titles = "<div class='row'>"
        res.results.forEach((m, idx) => {

            titles += `
                <div class="col-md-3 movieGrid__movie" id="movie--${m.id}">
                    <h2 class="fakeLink">${m.title}</h2>
                    <img class="fakeLink" src="https://image.tmdb.org/t/p/w154${m.poster_path}" />
>>>>>>> upstream/master
                </div>
            `
            if ((idx + 1) % 4 === 0) {
                titles += "</div><div class='row'>"
            }
        })

        titles += "</div>"

        $("#movieGrid").html(titles)
    })
});
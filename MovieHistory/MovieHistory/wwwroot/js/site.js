// Write your JavaScript code.

$("#movieSearch__button").click(evt => {

    console.log("click working");

    const userSearchString = $("#movieSearch").val();
    let keywords = userSearchString.replace(/ {2}/g, "+").replace(/ /g, "+");
    const movieDbString = "http://www.omdbapi.com/?apikey=406c1403&s=" + keywords;
    
    $.ajax({
        "method": "GET",
        "URL": movieDbString
    }).then(result => {
        console.log(result)
    })
});

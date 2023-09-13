'use strict';

document.addEventListener('DOMContentLoaded', function(){
    console.log("DOM Content Loaded");

    const filmHere= document.getElementById('filmHere');

    fetch('https://swapi.dev/api/films/')
        .then(function(response){
            console.log("RESPONSE:", response);
            return response.json();
        })
        .then(function(data){
            console.log("DATA:", data);
            const moo = data.results.map();
            //I NEED A FUNCTION WITHIN MAP!!!!
            showFilm(moo, filmHere);
            return data;
        })
        .catch(function(err){
            console.log("ERROR:", err);
        })
});

function showFilm(film, element){
    console.log("FILM:", film);
    element.innerText = film;
}
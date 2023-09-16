'use strict';

//KEEP THIS 
function get(url) {
    return fetch(url)
        .then(function (response) {
            // console.log("RESPONSE:", response);
            return response.json();
        })
        .then(function (data) {
            // console.log("DATA:", data);
            return data;
        })
        .catch(function (err) {
            console.log("ERROR:", err);
        })
};
//KEEP THIS ^

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Content Loaded");

    const filmsUrl = 'https://swapi.dev/api/films/';

    get(filmsUrl).then(function (response) {
        generateFilmList(response.results.map(x => {
            //I think x stands for results
            console.log(x.title);
            return x.title;
        }));
    });
});
// DOM FUNCTION ENDS ^

//this displays the drop-down menu with the titles displayed.

const categoryListForm = document.getElementById('categoryListForm');

function generateFilmList(categoryArray) {
    console.log(categoryArray);
    const selectElement = document.createElement('select');
    categoryArray.map(function (category) {
        //create option element
        const option = document.createElement('option');
        //define option atributes
        option.value = category;
        option.text = category;
        //append option to <select>
        selectElement.appendChild(option);
    })
    //append the <select> to <form>
    categoryListForm.append(selectElement);
};

//THIS STUFF WORKS DO NOT TOUCH!!! ^





//BELOW IS MY WORK FOR GENERATING INFO :))

const urlList = [];

const filmInfo = document.getElementById('filmInfo');

const title = document.getElementById('title');
const episode = document.getElementById('episode');
const director = document.getElementById('director');
const producer = document.getElementById('producer');
const releaseDate = document.getElementById('releaseDate');
const openingCrawl = document.getElementById('openingCrawl');


function generateFilmInfo(response){
    title.innerHTML = "Title: " + response.title;
    episode.innerHTML = "Episode: " + response.episode_id;
    director.innerHTML = "Director: " + response.director;
    producer.innerHTML = "Producer: " + response.producer;
    releaseDate.innerHTML = "Release Date: " + response.release_date;
    openingCrawl.innerHTML = "Opening Crawl: " + response.opening_crawl;

    filmInfo.appendChild(title);
};

//START OF BUTTON EVENT:
const submit = document.getElementById('submit');
submit.addEventListener('click', function (event) {
    const selectedItem = categoryListForm.querySelector('select').value;
    console.log(selectedItem);

    if (selectedItem){
        const filmOne = 'https://swapi.dev/api/films/';
        get(filmOne).then(function (response) {
            console.log(response.results);
            const movie = response.results.filter((x) => x.title === selectedItem)[0];
            
            generateFilmInfo(movie);
        })
    
    };

    // if (selectedItem = filmTwo){
    //     const filmTwo = 'https://swapi.dev/api/films/2/';
    //     get(filmTwo).then(function (response) {
    //         generateFilmInfo(response);
    //     });
    // };



});
//END OF BUTTON EVENT ^
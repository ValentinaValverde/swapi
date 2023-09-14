'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Content Loaded");

    function get(url) {
        return fetch(url)
            .then(function (response) {
                console.log("RESPONSE:", response);
                return response.json();
            })
            .then(function (data) {
                console.log("DATA:", data);
                // showFilm(data, filmHere);
                return data;
            })
            .catch(function (err) {
                console.log("ERROR:", err);
            })
    };

    const filmsUrl = 'https://swapi.dev/api/films/';

    get(filmsUrl).then(function (response) {
        console.log("FILM LIST:", response.results);
        generateFilmList(response.results.map(x => {
            console.log(x.title);
            return x.title;
        }));
    });

});

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

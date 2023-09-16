'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Content Loaded");

    function get(url) {
        return fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                return data;
            })
            .catch(function (err) {
                console.log("ERROR:", err);
            })
    };

    //trying out the wookie translation :)
    const wookieTranslation = 'https://swapi.dev/api/films/?format=wookiee';

    get(wookieTranslation).then(function (response) {
        console.log("FILM LIST:", JSON.parse(response));
        generateFilmListInWookie(response.rcwochuanaoc.map(x => {
            //I think x stands for results
            console.log(x.aoahaoanwo);
            return x.aoahaoanwo;
        }));
    });
});


//Wookie drop-down menu :)
const wookieFilmTitle = document.getElementById('wookieFilmTitles');

function generateFilmListInWookie(categoryArray) {
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
    wookieFilmTitle.append(selectElement);
};

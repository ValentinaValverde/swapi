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

    const planetsUrl = 'https://swapi.dev/api/planets/';

    get(planetsUrl).then(function (response) {
        generatePlanetList(response.results.map(x => {
            //I think x stands for results
            console.log(x.name);
            return x.name;
        }));
    });
});
// DOM FUNCTION ENDS ^

//this displays the drop-down menu with the titles displayed.

const categoryListForm = document.getElementById('categoryListForm');

function generatePlanetList(categoryArray) {
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

//BELOW IS MY WORK FOR GENERATING INFO :))

const planetName = document.getElementById('name');
const climate = document.getElementById('climate');
const gravity = document.getElementById('gravity');
const population = document.getElementById('population');
const terrain = document.getElementById('terrain');
const diameter = document.getElementById('diameter');


function generatePlanetInfo(response){
    planetName.innerHTML = "Name: " + response.name;
    climate.innerHTML = "Climate: " + response.climate;
    gravity.innerHTML = "Gravity: " + response.gravity;
    population.innerHTML = "Population: " + response.population;
    terrain.innerHTML = "Terrain: " + response.terrain;
    diameter.innerHTML = "Diameter: " + response.diameter;
};

//START OF BUTTON EVENT:
const submit = document.getElementById('submit');
submit.addEventListener('click', function (event) {
    const selectedItem = categoryListForm.querySelector('select').value;
    console.log(selectedItem);

    if (selectedItem){
        const planetUrl = 'https://swapi.dev/api/planets/';
        get(planetUrl).then(function (response) {
            console.log(response.results);
            const planet = response.results.filter((x) => x.name === selectedItem)[0];
            
            generatePlanetInfo(planet);
        })
    
    };
});
//END OF BUTTON EVENT ^
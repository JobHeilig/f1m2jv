const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

const knopNoord = document.getElementById('knopNoord');
const knopOost = document.getElementById('knopOost');
const knopZuid = document.getElementById('knopZuid');
const knopWest = document.getElementById('knopWest');

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest'),
}

let current_index = 0;

let lokaties = [ // array
    { //0 = object
        "titel":"Ingang",
        "image":"img/0.jpg",
        "directions": {
            "zuid": 1,
        }
    },
    { //1 = object
        "titel":"Gang bij docentenkamer",
        "image":"img/1.jpg",
        "directions": { // = object
            "west": 2,
            "oost": 5,
            "zuid": 4,
            "noord":0
        }
    },
    {
        "titel":"Deur naast docentenkamer",
        "image":"img/2.jpg",
        "directions": { // = object
            "oost": 1,
            "zuid": 3,
        }
    },
    {
        "titel":"In een kleine kamer",
        "image":"img/3.jpg",
        "directions": { // = object
            "noord": 2,
        }
    },
    {
        "titel":"De docentenkamer",
        "image":"img/4.jpg",
        "directions": { // = object
            "noord": 1,
        }
    },
    {
        "titel":"Gang",
        "image":"img/5.jpg",
        "directions": { // = object
            "noord": 10,
            "oost": 6,
            "west": 1,
        }
    },
    {
        "titel":"Voor de toiletten ( ͡° ͜ʖ ͡°)",
        "image":"img/6.jpg",
        "directions": { // = object
            "oost": 7,
            "zuid": 11,
            "west": 5,
        }
    },
    {
        "titel":"Voor lokaal 093",
        "image":"img/7.jpg",
        "directions": { // = object
            "noord": 9,
            "zuid": 8,
            "west": 6,
        }
    },
    {
        "titel":"Lokaal 093",
        "image":"img/8.jpg",
        "directions": { // = object
            "noord": 7,
        }
    },
    {
        "titel":"Werkende studenten",
        "image":"img/9.jpg",
        "directions": { // = object
            "oost": 1,
            "west": 10,
        }
    },
    {
        "titel":"Voorkant lokaal 090",
        "image":"img/10.jpg",
        "directions": { // = object
            "oost": 9,
            "zuid": 5,
        }
    },
    {
        "titel":"In de toiletten ( ͡° ͜ʖ ͡°)",
        "image":"img/11.jpg",
        "directions": { // = object
            "noord": 6,
        }
    }
];

function show(index) {
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
    current_index = index;

    //Knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){
    // haal de mogelijke directions op voor de current_index
    let possible = lokaties[current_index].directions;
    // zet de direction keys in een aparte variable
    let possible_keys = Object.keys(possible);

    // zet de keys van de buttons in een aparte variable.
    let button_keys = Object.keys(directionButtons);

    // zet eerst alle knoppen uit
    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    // zet nu de knoppen (directions) aan
    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    }
}


function getInput(){
    show(myInput.value);
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting){
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index);
}


show(0);
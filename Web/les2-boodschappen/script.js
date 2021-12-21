console.log("Script is geladen!");

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function zetinFruitLa(fruit){
    console.log(fruit);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTHML = fruit;
    nieuwElement.className = 'rood';
    fruitvak.appendChild(nieuwElement);
}

function zetinGroenteLa(groente){
    console.log(groente);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTHML = groente;
    groentevak.appendChild(nieuwElement);
}
var zborovi = ["mecka", "nosorog", "zirafa", "mesecina", "sonce", "krevet", "vrata", "prozor", "laptop", "krava", "majmun", "koala", "prolet", "vreme", "nevreme", "sisarka", "sendvic", "cokolada", "vanila", "karamela"];

var izbranZbor = zborovi[Math.floor(Math.random() * zborovi.length)];

var zborPogodi = izbranZbor.split('');
var dadeniBukvi = Array(3).fill('').map(function () {
    return zborPogodi.pop();
});
var ostanatiObidi = 5;

updateDisplay();

function updateDisplay() {
    document.getElementById('zborle').textContent = dadeniBukvi.join(' ');
    document.getElementById('obidi').textContent = ostanatiObidi;
}

function proveri() {
    var guess = document.getElementById('pogodi').value.toLowerCase();

    if (ostanatiObidi > 0 && guess.length > 0) {
        if (guess === izbranZbor) {
            dadeniBukvi = izbranZbor.split('');
        } else {
            ostanatiObidi--;
        }

        updateDisplay();

        if (dadeniBukvi.join('') === izbranZbor) {
            alert("Zborot go pogodi!");
            pocniNovaIgra();
        } else if (ostanatiObidi === 0) {
            alert("Zborot ne go pogdi :(. Toj bese:  " + izbranZbor);
            pocniNovaIgra();
        }
    }
}

function pocniNovaIgra() {
    izbranZbor = zborovi[Math.floor(Math.random() * zborovi.length)];
    zborPogodi = izbranZbor.split('');
    dadeniBukvi = Array(3).fill('').map(function () {
        return zborPogodi.pop();
    });
    ostanatiObidi = 5;

    document.getElementById('pogodi').value = '';

    updateDisplay();
}

// Dark-Mode-Umschalter: fügt einen Button hinzu, der zwischen hellem
// und dunklem Design wechselt.
function darkModeUmschalten() {
    document.body.classList.toggle("dark-mode");
}

// Schriftgröße des Absatzes anpassen: erhöht oder verringert die
// Schriftgröße des <p>-Elements in 2px-Schritten (Barrierefreiheit).
function schriftGroesseAendern(differenz) {
    const absatz = document.querySelector("p");
    const aktuelleGroesse = parseInt(window.getComputedStyle(absatz).fontSize);
    const neueGroesse = Math.min(40, Math.max(12, aktuelleGroesse + differenz));
    absatz.style.fontSize = neueGroesse + "px";
}

document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.createElement("button");
    darkModeButton.textContent = "Dark Mode umschalten";
    darkModeButton.addEventListener("click", darkModeUmschalten);
    document.body.appendChild(darkModeButton);

    const groesserButton = document.createElement("button");
    groesserButton.textContent = "Schrift größer (A+)";
    groesserButton.addEventListener("click", function () {
        schriftGroesseAendern(2);
    });
    document.body.appendChild(groesserButton);

    const kleinerButton = document.createElement("button");
    kleinerButton.textContent = "Schrift kleiner (A-)";
    kleinerButton.addEventListener("click", function () {
        schriftGroesseAendern(-2);
    });
    document.body.appendChild(kleinerButton);
});

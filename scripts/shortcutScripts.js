function wysokoscDokumentu(){
    document.querySelector(".container").style.height = 8*window.innerHeight+"px";
}
function insertujTeksty(){
let teksty = [
    "Hej, to jest skrócona wersja portfolio zawierająca wyciąg z całości bez oprawy, by móc od razu przejść do konretów, by móc łątwo i przyjemnie spojrzeć na clue sprawy - projekty. Z lewej strony przypięta nawigacja, pozwalająca na szybkie przejście do odpowiedniego projektu."
];
let nazwy = [
    "Witryna salonu fryzjerskiego",
    "Witryna fundacji",
    "Witryna osobista/hobby",
    "Aplikacja pogoda",
    "Aplikacja kalendarz",
    "Aplikacja edytor",
    "Aplikacja music player"
]
const opisy = [
    "Witryna wykonana na zlecenie zakładu fryzjerskiego.",
    "Witryna wykonana na zlecenie fundacji pomagającej wcześniakom.",
    "Witryna wykonana dla osoby prywatnej do wykorzystania we własnych celach.",
    "Aplikacja pobiera lokalizacje oraz dane z zewnętrznego źródła o pogodzie. Google Speech Api odczytuje komendę głosową oraz czyta pogodę.Bro tip: Niezbędne jest włączenie lokalizacji.Bro tip 2: Musi być uruchomiona na Chrome",
    "Aplikacja wyświetlająca kalendarz, w którym można dodać planowane wydarzenia. Zapisuje wydarzenia w local storage.",
    "Aplikacja edytor tekstu. Pozwala na edycje tekstu i na kilka opcji edytorskich. Aplikacja pozwala także na zapisanie tekstu w local storage lub pobranie go na dysk.",
    "Aplikacja player muzyczny. Pozwala na odtworzenie wybranych utworów oraz oferuje wizualizację stworzoną za pomocą audio context."
]
const techologie = [
    "Bootstrap, Javascript, w pełni responsywna",
    "Wordpress",
    "JS ES6, Speech Api, Weather Api",
    "JS ES6, jQuery",
    "JS ES6, canvas, audio context"
]
const live = [
    "http://maliwojownicy.org",
    "http://kasia-salon.prv.pl",
    "http://lapkoczyn.prv.pl",
    "https://github.io/pogoda/pogoda.html/",
    "https://github.io/pogoda/pogoda.html/",
    "https://github.io/pogoda/pogoda.html/",
    "https://github.io/pogoda/pogoda.html/",
];
document.querySelector(".header").innerHTML += teksty[0];
}
document.onload = wysokoscDokumentu(),insertujTeksty();
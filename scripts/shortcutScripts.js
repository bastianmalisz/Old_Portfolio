function wysokoscDokumentu(){
    document.querySelector(".container").style.height = 7*window.innerHeight+"px";
}
function insertujTeksty(){
let teksty = [
    "To jest skrócona wersja portfolio zawierająca wyciąg z całości bez oprawy. By móc od razu przejść do konretów, by łatwo i przyjemnie spojrzeć na clue sprawy - projekty. Z lewej strony przypięta nawigacja, pozwalająca na szybkie przejście do odpowiedniego projektu."
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
const technologie = [
    "Bootstrap, Javascript, w pełni responsywna",
    "Wordpress",
    "Wordpress",
    "JS ES6, Speech Api, Weather Api",
    "JS ES6, jQuery",
    "JS ES6, jQuery",
    "JS ES6, canvas, audio context"
]
const live = [
    `<a href = "http://kasia-salon.prv.pl">Salon fryzjerski</a>`,
    `<a href = "http://maliwojownicy.org">Witryna fundacji</a>`,
    `<a href = "http://lapkoczyn.co.nf">Strona hobby</a>`,
    `<a href = "https://bastianmalisz.github.io/pogoda/pogoda.html">Live pogoda</a>`,
    `<a href = "https://bastianmalisz.github.io/kal2/kalendarz.html">Live kalendarz</a>`,
    `<a href = "https://bastianmalisz.github.io/text-editor/editor.html">Live edytor</a>`,
    `<a href = "https://bastianmalisz.github.io/mp3/mp3.html">Live music player</a>`
];

document.querySelector(".header").innerHTML += teksty[0];
let j = 0;
const opisy1 = document.querySelectorAll(".opis");
for(let i = 0; i<opisy1.length;i+=2 ){
    opisy1[i].children[0].innerHTML+=nazwy[j];
    opisy1[i].children[1].innerHTML+=technologie[j]
    opisy1[i].children[2].innerHTML+=opisy[j];
    opisy1[i].children[3].innerHTML+=live[j];
    j++;
}
}

function clickNavi(){
    const navBar = document.querySelector(".navigation");
    navBar.addEventListener("click",function(e){
        
        switch(e.target.classList[0]) {
                case "w1":
                window.scrollTo(0, (document.querySelector("#web1").offsetTop));
                break;
                case "w2":
                window.scrollTo(0, document.querySelector("#web2").offsetTop);
                break;
                case "w3":
                window.scrollTo(0, document.querySelector("#web3").offsetTop);
                break;
                case "a1":
                window.scrollTo(0, document.querySelector("#ap1").offsetTop);
                break;
                case "a2":
                window.scrollTo(0, document.querySelector("#ap2").offsetTop);
                break;
                case "a3":
                window.scrollTo(0, document.querySelector("#ap3").offsetTop);
                break;
                case "a4":
                window.scrollTo(0, document.querySelector("#ap4").offsetTop);
                break;
                case "konta":
                window.scrollTo(0, document.querySelector("#kont").offsetTop);
                break;
            default:
                return;
        }
    });
}    
document.onload = wysokoscDokumentu(),insertujTeksty(),clickNavi();

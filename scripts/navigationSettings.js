// Skrypt ustawiający navbar

const navBar = document.querySelectorAll(".nav-page");
const winHeight = window.innerHeight;
//NAJAZD MYSZKA - DODAJ KLASE POWIEKSZAJACA NA NAJECHANY ELEMENT
for (i = 0; i < navBar.length; i++) {
    navBar[i].addEventListener("mouseenter", function(e) {
        e.target.classList.add("nav-big");
        for (j = 0; j < navBar.length; j++) {
            if (navBar[j].classList.contains("nav-big") == false)
                navBar[j].classList.add("nav-small");
        }
    });
}
//WYJSCIE MYSZKA - USUN KLASE Z ELEMENTOW
for (i = 0; i < navBar.length; i++) {
    navBar[i].addEventListener("mouseleave", function(e) {
        e.target.classList.remove("nav-big");
        for (j = 0; j < navBar.length; j++) {
            if (navBar[j].classList.contains("nav-small"))
                navBar[j].classList.remove("nav-small");
        }
    });
}
//KLIKNIECIE MYSZKA EVENT PRZESUWA DO DANEJ SEKCJI
for (i = 0; i < navBar.length; i++) {
    navBar[i].addEventListener("click", function(e) {
        switch (e.target.classList[0]) {
            case "nav-page1":
                window.scrollTo(0, winHeight * 2)
                break;
            case "nav-page2":
                window.scrollTo(0, winHeight * 3)
                break;
            case "nav-page3":
                window.scrollTo(0, winHeight * 4)
                break;
            case "nav-page4":
                window.scrollTo(0, winHeight * 6)
                break;
                case "nav-page5":
                window.open("shurtcut.html","_self")
                break;
        }


    });
}
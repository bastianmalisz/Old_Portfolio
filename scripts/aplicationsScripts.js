// Ustawienia rozwiązania ekranu aplikacji dla małych ekranów, dodawaie klasy powiększającej kliknięty element a reszcie nadawanie pomniejszającą
if(window.innerWidth < 750){
document.querySelector(".p4-inner").addEventListener("click", function(e) {
    let apki = document.querySelectorAll(".webapp");
    
    if (e.target.classList.contains("p4-header") || e.target.classList.contains("p4-inner") || e.target.classList.contains("opis-app"))
        return;
    for (i = 0; i < apki.length; i++) {
        if (apki[i].classList.contains("powieksz") && apki[i].classList.contains("webapp")) {
            apki[i].classList.remove("powieksz");
            apki[i].childNodes[1].classList.remove("display-flex");
        } else {
            apki[i].classList.remove("zmniejsz");
        }
    }
    for (i = 0; i < apki.length; i++) {
        if (e.target.classList.contains("webapp"))
            e.target.classList.add("powieksz");
        e.target.childNodes[1].classList.add("pojaw");
        e.target.childNodes[1].classList.add("display-flex");

    }

    for (i = 0; i < apki.length; i++) {
        if (apki[i].classList.contains("powieksz") == false) {
            apki[i].classList.add("zmniejsz");
        }
    }
});

document.querySelector(".p4-inner-app1").addEventListener('mouseover', function() {
    let app1 = document.querySelector(".p4-inner-app1");
    app1.classList.add('app1-gif');
   
});
document.querySelector(".p4-inner-app1").addEventListener('mouseleave', function() {
    let app1 = document.querySelector(".p4-inner-app1");
    app1.classList.remove('app1-gif');  
});
document.querySelector(".p4-inner-app2").addEventListener('mouseover', function() {
    let app2 = document.querySelector(".p4-inner-app2");
    app2.classList.add('app2-gif');
});
document.querySelector(".p4-inner-app2").addEventListener('mouseleave', function() {
    let app2 = document.querySelector(".p4-inner-app2");
    app2.classList.remove('app2-gif');
});
document.querySelector(".p4-inner-app3").addEventListener('mouseover', function() {
    let app3 = document.querySelector(".p4-inner-app3");
    app3.classList.add('app3-gif');
});
document.querySelector(".p4-inner-app3").addEventListener('mouseleave', function() {
    let app3 = document.querySelector(".p4-inner-app3");
    app3.classList.remove('app3-gif');
});
document.querySelector(".p4-inner-app4").addEventListener('mouseover', function() {
    let app4 = document.querySelector(".p4-inner-app4");
    app4.classList.add('app4-gif');
});
document.querySelector(".p4-inner-app4").addEventListener('mouseleave', function() {
    let app4 = document.querySelector(".p4-inner-app4");
    app4.classList.remove('app4-gif');
});
}
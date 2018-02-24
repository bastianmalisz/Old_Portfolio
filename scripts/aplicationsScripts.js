// if(window.innerWidth < 750){
document.querySelector(".p4-inner").addEventListener("click", function(e) {
    let apki = document.querySelectorAll(".webapp");
    console.log(e);
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
    // Object.assign(app1.style,{
    //     background:"url(pogodagif.gif)",
    //     backgroundRepeat:"no-repeat",
    //     tbackgroundSize:"contain",
    //     backgroundPosition:"center"
    //     });
    app1.classList.add('app1-gif');
   
});
document.querySelector(".p4-inner-app1").addEventListener('mouseleave', function() {
    let app1 = document.querySelector(".p4-inner-app1");
    // Object.assign(app1.style,{
    //     background:"url(pogodaimg.jpg)",
    //     backgroundRepeat:"no-repeat",
    //     tbackgroundSize:"contain",
    //     backgroundPosition:"center"
    //     });
    app1.classList.remove('app1-gif');
    
});
document.querySelector(".p4-inner-app2").addEventListener('mouseover', function() {
    let app2 = document.querySelector(".p4-inner-app2");
    // Object.assign(app2.style,{
    //     background:"url(kalendarzgif.gif)",
    //     backgroundRepeat:"no-repeat",
    //     tbackgroundSize:"contain",
    //     backgroundPosition:"center"
    //     });
    app2.classList.add('app2-gif');
});
document.querySelector(".p4-inner-app2").addEventListener('mouseleave', function() {
    let app2 = document.querySelector(".p4-inner-app2");
    // Object.assign(app2.style,{
    //     background:"url(calendarimg.jpg)",
    //     backgroundRepeat:"no-repeat",
    //     tbackgroundSize:"contain",
    //     backgroundPosition:"center"
    //     });
    app2.classList.remove('app2-gif');
});
document.querySelector(".p4-inner-app3").addEventListener('mouseover', function() {
    let app3 = document.querySelector(".p4-inner-app3");
    // Object.assign(app3.style,{
    //     background:"url(edytorgif.gif)",
    //     backgroundRepeat:"no-repeat",
    //     tbackgroundSize:"contain",
    //     backgroundPosition:"center"
    //     });
    app3.classList.add('app3-gif');
});
document.querySelector(".p4-inner-app3").addEventListener('mouseleave', function() {
    let app3 = document.querySelector(".p4-inner-app3");
    // Object.assign(app3.style,{
    //     background:"url(texteditor-obraz.PNG)",
    //     backgroundRepeat:"no-repeat",
    //     tbackgroundSize:"contain",
    //     backgroundPosition:"center"
    //     });
    app3.classList.remove('app3-gif');
});
document.querySelector(".p4-inner-app4").addEventListener('mouseover', function() {
    let app4 = document.querySelector(".p4-inner-app4");
    // Object.assign(app4.style,{
    //     background:"url(muzykagif.gif)",
    //     backgroundRepeat:"no-repeat",
    //     tbackgroundSize:"contain",
    //     backgroundPosition:"center"
    //     });
    app4.classList.add('app4-gif');
});
document.querySelector(".p4-inner-app4").addEventListener('mouseleave', function() {
    let app4 = document.querySelector(".p4-inner-app4");
    // Object.assign(app4.style,{
    //     background:"url(muzyka-obraz.PNG)",
    //     backgroundRepeat:"no-repeat",
    //     tbackgroundSize:"contain",
    //     backgroundPosition:"center"
    //     });
    app4.classList.remove('app4-gif');
});
// }
// Skrypt opisujący zachowanie napisów na stronie powitalnej. Zachowanie napisów w zależności od aktualnej pozycji scrollowania

function rush() {
    
    document.addEventListener('scroll', function() {
    let wScroll = window.scrollY;
    let winHeight = window.innerHeight;
    const napis2Top = document.querySelector("#napis2").offsetTop;
    const nextTop = winHeight * 4;
    const napis1 = document.querySelector("#napis1");
    const napis2 = document.querySelector("#napis2");

    if (wScroll < winHeight * 4) {
        napis1.style.transform = "translateY(" + (wScroll * 1.3) + "px)";
        napis1.style.backgroundSize = (100 + wScroll * 0.9) + "%" + (100 + wScroll / 100) + "%";
        napis1.style.opacity = 1 - (wScroll / 250);
        napis1.style.display = "block";
    }
    
    if (wScroll > winHeight * 0.5 && wScroll < winHeight * 1.3) {
        napis2.classList.remove("zniknij");
        napis2.classList.add("pojaw");
        napis2.style.display = "block";
        napis2.style.transform = "translateY(" + ((wScroll * 1.2) - 0.4 * winHeight) + "px)";
        napis2.style.MozTransform = "translateY(" + ((wScroll * 1.2) - 0.4 * winHeight) + "px)";        
        napis2.classList.remove("zniknij");
    }
    
    if(wScroll > winHeight*0.9){
       napis2.classList.add("zniknij");
    }
    })
}
document.onload = rush();
// Skrypt główny, który tworzy schemat przechodzenia pomiędzy "slajdami" w odpowiednim momencie scrolla. Skrypt wykonany za pomocą prostych ifó oraz window innerheight.
    
//zmienne kontrolne 
licz = 0;
let flags = false;

// wymus wielkosc dokumentu w zaleznosci od wielkosci ekranu
// DLA KOMOREK
winWidth = window.innerWidth;
if (winWidth < 500) {
    document.querySelector('.calosc').style.height = window.innerHeight * 5.5+ 'px';
}
// dla stacjonarnych
if (winWidth > 500) {
    document.querySelector('.calosc').style.height = window.innerHeight * 12.5 + 'px';
}
// formowanie zmienych trzymajacych elementy DOM
part = [];
for (let i = 1; i < 13; i++) {
    part[i] = document.querySelector('.p' + i);
}
// Programowanie zachowania calego dokumentu na scrollu
function rusz() {
    const navi = document.querySelector(".nav");
    // aktualna pozycja scroll
    let wScroll = window.scrollY;
    // wysokosc okna uzytkownika
    const winHeight = window.innerHeight;
    
    // pasek prograsu
    const pasek = document.querySelector(".progress-bar");
    pasek.style.width = 0+"%";
    
    function ruszScrollBar(){
        wysokoscDokumentuLiczba = parseInt(document.querySelector('.calosc').style.height, 10);
        pasek.style.width = ((window.scrollY)/wysokoscDokumentuLiczba)*109+"%";    
    }
    ruszScrollBar();

    // kulki do animacji 
    const ball = [];
    for (i = 1; i < 4; i++) {
        ball[i] = document.querySelector(".ball" + i);
    }

    //tekstowy chat z moim ryjcem
    const chatContainer = document.querySelector(".p2-container-image_section");
    const textContainer = document.querySelector(".p2-container-text");
    const wholeTextContainer = document.querySelector(".p2-container");
    // teksty do dymko
    const tekst = [`Cześć, mam na imię Seba. Spojrzysz na moje projekty? <i class="far fa-smile fa-2x"></i> `,
        "Lubię programować i tworzyć ciekawe projekty stawiając sobie coraz to nowe wyzwania.",
        `Na codzień do swoich prac wykorzystuję całkiem sprawnie <i class="fab fa-js fa-2x"></i> oraz oczywiście <i class="fab fa-html5 fa-2x"></i> czy <i class="fab fa-css3-alt fa-2x"></i>`,
        `Obecnie stawiam na naukę <i class="fab fa-react fa-2x"></i> i to planuję wymasterować.`,
        `Oprócz tego staram się być kreatywny, szybko znajduje rozwiązania na problemy i wciąż chce się uczyć nowych rzeczy. Rzuć okiem na moje projekty. <i class="far fa-hand-point-right fa-2x"></i>`
    ];

    function animujKulki() {
        setTimeout(function() {
            ball[1].classList.add('bounce');
        }, 0);
        setTimeout(function() {
            ball[2].classList.add('bounce');
        }, 300);
        setTimeout(function() {
            ball[3].classList.add('bounce');
        }, 600);
    }

    function odAnimuj() {
        for (i = 1; i < 4; i++) {
            ball[i].classList.remove('bounce')
            ball[i].classList.add('zniknij')
        }
    }

    // GŁÓWNA CZĘŚĆ, sprawdzanie gdzie jest użytkownik i dobieranie do tego akcji, ustawianie poszczególnych divów (partów) z pozycja fixed i za pomocją style top / left
    
    
    if (wScroll < winHeight && wScroll < (winHeight * 1.4)) {
        part[1].style.top = 0 + "%";
        part[2].style.top = 100 + '%';
        part[2].style.opacity = "0";
    }
   
    if (wScroll > winHeight * 1.6 && wScroll < winHeight * 3) {
        part[2].style.opacity = "0";
    }
    
    if (wScroll > winHeight * 2.5 && wScroll < (winHeight * 5)) {
        part[2].style.top = 0 + '%';
        navi.classList.remove("display-flex");
    }
   
    if (wScroll < winHeight * 1) {
        part[1].style.top = 0;
        part[1].style.zIndex = 5;
    }
    
    if (wScroll > winHeight * 1.1) {
        navi.classList.add("display-flex");
        // Jeśli ekrany mniejsze od 750px to nie maja kresek wiec nie musze ich niszczyc
        if(winWidth > 750){
        zniszczKreski();
            }
        // ruszanie funkcji tylko jesli licznik jest rowny zeru (czyli jesli jeszcze nie bylo animacji)
        licz == 0 ? animujSlajd() : false;

        function animujSlajd() {
            setTimeout(function() {
                animujKulki();
            }, 500)
// DOdawanie dymków
            setTimeout(function() {
                let creatableDiv = document.createElement("div");
                wholeTextContainer.appendChild(creatableDiv);
                creatableDiv.classList.add("p2-appendedChild");
                creatableDiv.innerHTML = `<span class="p2-chat-span">${tekst[0]}</span>`;
                chatContainer.style.top = "30vh";
            }, 2000);

            setTimeout(function() {
                let creatableDiv = document.createElement("div");
                wholeTextContainer.appendChild(creatableDiv);
                creatableDiv.classList.add("p2-appendedChild");
                creatableDiv.innerHTML = `<span class="p2-chat-span">${tekst[1]}</span>`;
                chatContainer.style.top = "45vh";
            }, 4000);

            setTimeout(function() {
                let creatableDiv = document.createElement("div");
                wholeTextContainer.appendChild(creatableDiv);
                creatableDiv.classList.add("p2-appendedChild");
                creatableDiv.innerHTML = `<span class="p2-chat-span">${tekst[2]}</span>`;
                chatContainer.style.top = "60vh";
            }, 5500);

            setTimeout(function() {
                let creatableDiv = document.createElement("div");
                wholeTextContainer.appendChild(creatableDiv);
                creatableDiv.classList.add("p2-appendedChild");
                creatableDiv.innerHTML = `<span class="p2-chat-span">${tekst[3]}</span>`;
                chatContainer.style.top = "75vh";
            }, 7500);

            setTimeout(function() {
                let creatableDiv = document.createElement("div");
                wholeTextContainer.appendChild(creatableDiv);
                creatableDiv.classList.add("p2-appendedChild");
                creatableDiv.innerHTML = `<span class="p2-chat-span">${tekst[4]}</span>`;
                // if(winHeight> 500){chatContainer.style.top = "85vh";}else
                chatContainer.style.top = "80vh";
                odAnimuj();
            }, 9500);
            setTimeout(function() {
                    chatContainer.classList.add("zniknij");
                    chatContainer.classList.remove("zniknij");
                    chatContainer.innerHTML = "Pchaj dalej";
                    chatContainer.classList.add("pojaw");
                    chatContainer.classList.add("pchaj");
                    chatContainer.addEventListener("click", moveOn);

                }, 9900)
                // chatContainer.style.top = "20vh";
            licz++;
        }
// 
        part[1].style.top = -120 + "%";
        document.querySelector('.rest').style.opacity = 1;
        part[1].style.zIndex = 2;
        part[2].style.opacity = "1";
        part[2].style.top = 0 + '%';
        part[2].style.left = 0 + "%";
        part[2].style.zIndex = 2;
        part[3].style.left = 100 + "%";
        part[3].style.zIndex = 3;
        part[4].style.left = 100 + '%';
        part[5].style.left = 100 + '%';
    }

    if (wScroll > winHeight * 2) {
        part[2].style.left = -100 + '%'; 
        part[2].style.zIndex = 4;
        part[3].style.left = 0 + '%';
        part[3].style.top = 0 + '%';
        part[3].style.zIndex = 3;
        part[4].style.left = 100 + '%';
        part[4].style.zIndex = 5;
        part[5].style.left = 100 + '%';
        part[5].style.zIndex = 6;
    }
    
// Ekran z aplikacjami, okreslanie zachowania wzgledem scrolla
    const app= new Array(5)
    for(i=1;i<app.length;i++){
        app[i] = document.querySelector(".p4-inner-app" + i)
    }
    if(winWidth > 750 && flags == false)
        {
            for(i=1;i<app.length;i++){
                app[i].classList.add("display-none");
            }
        flags =true;
        }

if (wScroll > winHeight * 3) {
     part[2].style.left = -100 + '%'
     part[2].style.zIndex = 5;
     part[3].style.left = -100 + '%';
     part[3].style.zIndex = 4;
     part[4].style.left = 0 + '%';
     part[4].style.zIndex = 3;
     part[5].style.left = 100 + '%';
     part[5].style.zIndex = 4;
    }  
    // Animowanie na scrollu i specjalne wizualizacje dla ekranu aplikacji na ekranach o szerokosci wiekszej niz 750
    if(winWidth > 750){
        
        if(wScroll > winHeight*3.4){
            app[1].classList.remove("display-none");
            app[1].classList.add("pojaw-wolno");
            }
        
            if(wScroll > winHeight*3.6 && wScroll < winHeight*4.2){
            let wysokosci = (wScroll - winHeight*3.4);
            app[1].style.transform = "translateY("+(wysokosci/3.2)+"px) translateZ(0)";
            document.querySelector(".opisapp1").classList.add("zniknij");
        }
        
        if(wScroll > winHeight*3.9 && wScroll < winHeight*4.75){
            let wysokosci1 = (wScroll - winHeight*4.2);
            app[1].classList.add("maly-background");
            document.querySelector(".opisapp1").classList.add("display-flex");
            document.querySelector(".opisapp1").classList.add("pojaw");
            document.querySelector(".opisapp1").classList.remove("zniknij");
            document.querySelector(".opisapp1").style.transform = "translateY(-"+(wysokosci1/2)+"px) translateZ(0)";
            app[1].style.transform = "translateY("+(winHeight*.22+wysokosci1/200)+"px) translateZ(0)";
            app[1].classList.remove("zniknij");
            app[2].classList.add("display-none");
        }
        
        if(wScroll > winHeight*4.95){
            let wysokosci1 = (wScroll - winHeight*5);
            document.querySelector(".opisapp1").classList.add("zniknij");
            app[1].classList.add("zniknij");
        }
        
        if(wScroll > winHeight*5.2 && wScroll < winHeight*5.8){
            let wysokosci2= (wScroll - winHeight*5.2);
            app[2].classList.remove("display-none");
            app[2].classList.add("pojaw-wolno");
            app[2].style.transform = "translateY("+(wysokosci2/1.8)+"px) translateZ(0)";
            document.querySelector(".opisapp2").classList.add("zniknij");
        }
        
        if(wScroll > winHeight*5.8 && wScroll < winHeight*6.6){
            let wysokosci3= (wScroll - winHeight*5.8);
            document.querySelector(".opisapp2").classList.add("display-flex");
            document.querySelector(".opisapp2").classList.add("pojaw");
            document.querySelector(".opisapp2").classList.remove("zniknij");
            document.querySelector(".opisapp2").style.transform = "translateY(-"+(wysokosci3/3)+"px) translateZ(0)";
            app[2].style.transform = "translateY("+(winHeight*.20+wysokosci3/200)+"px)"
            app[2].classList.remove("zniknij");
            app[3].classList.add("display-none");
        }

        if(wScroll > winHeight*6.8){
            document.querySelector(".opisapp2").classList.add("zniknij");
            app[2].classList.add("zniknij");
        }
        
        if(wScroll > winHeight*6.95 && wScroll < winHeight*7.6){
            let wysokosci4= (wScroll - winHeight*7);
            app[3].classList.remove("display-none");
            app[3].classList.add("pojaw-wolno");
            app[3].style.transform = "translateY("+(wysokosci4/2.6)+"px) translateZ(0)";
            document.querySelector(".opisapp3").classList.add("zniknij");
        }
        
        if(wScroll > winHeight*7.7 && wScroll < winHeight*8.5){
            let wysokosci5= (wScroll - winHeight*7.7);
            document.querySelector(".opisapp3").classList.remove("zniknij");
            document.querySelector(".opisapp3").classList.add("display-flex");
            document.querySelector(".opisapp3").classList.add("pojaw");
            document.querySelector(".opisapp3").style.transform = "translateY(-"+(wysokosci5/4)+"px) translateZ(0)";
            app[3].style.transform = "translateY("+(winHeight*.23+wysokosci5/200)+"px) translateZ(0)";
            app[3].classList.remove("zniknij");
            app[4].classList.add("display-none");
        }
        
        if(wScroll > winHeight*8.7){
            document.querySelector(".opisapp3").classList.add("zniknij");
            app[3].classList.add("zniknij");
        }
        
        if(wScroll > winHeight*8.8 && wScroll < winHeight*9.4){
            let wysokosci6= (wScroll - winHeight*8.8);
            app[4].classList.remove("display-none");
            app[4].classList.add("pojaw-wolno");
            app[4].style.transform = "translateY("+(wysokosci6/2.6)+"px) translateZ(0)";
            document.querySelector(".opisapp4").classList.add("zniknij");
        }
        
        if(wScroll > winHeight*9.5&& wScroll < winHeight*10.2){
            let wysokosci7= (wScroll - winHeight*9.5);
            document.querySelector(".opisapp4").classList.remove("zniknij");
            document.querySelector(".opisapp4").classList.add("display-flex");
            document.querySelector(".opisapp4").classList.add("pojaw");
            document.querySelector(".opisapp4").style.transform = "translateY(-"+(wysokosci7/2.6)+"px) translateZ(0)";
            app[4].style.transform = "translateY("+(winHeight*.19+wysokosci7/200)+"px) translateZ(0)";
            app[4].classList.remove("zniknij");
        }
        
        if(wScroll > winHeight*10.3){
            document.querySelector(".opisapp4").classList.add("zniknij");
            app[4].classList.add("zniknij");
        }
        
    if (wScroll > winHeight * 10.5) {
        part[2].style.left = -100 + '%'
        part[2].style.zIndex = 5;
        part[3].style.left = -100 + '%';
        part[3].style.zIndex = 4;
        part[4].style.left = -100 + '%';
        part[4].style.zIndex = 3;
        part[5].style.left = 0 + '%';
        part[5].style.zIndex = 2;
    }
    if (wScroll > winHeight *12) {
        part[2].style.left = -100 + '%'
        part[2].style.zIndex = 5;
        part[3].style.left = -100 + '%';
        part[3].style.zIndex = 4;
        part[4].style.left = -100 + '%';
        part[4].style.zIndex = 3;
        part[5].style.left = -100 + '%';
        part[5].style.zIndex = 2;
    }
}

//    Ustawienia dla ekranow o mniejszej niz 750 szerokosci
    if(winWidth < 750){
    
        if (wScroll > winHeight * 4) {
            part[2].style.left = -100 + '%'
            part[2].style.zIndex = 5;
            part[3].style.left = -100 + '%';
            part[3].style.zIndex = 4;
            part[4].style.left = -100 + '%';
            part[4].style.zIndex = 3;
            part[5].style.left = 0 + '%';
            part[5].style.zIndex = 2;
        }
        if (wScroll > winHeight *12) {
            part[2].style.left = -100 + '%'
            part[2].style.zIndex = 5;
            part[3].style.left = -100 + '%';
            part[3].style.zIndex = 4;
            part[4].style.left = -100 + '%';
            part[4].style.zIndex = 3;
            part[5].style.left = -100 + '%';
            part[5].style.zIndex = 2;
        }
    }
}

document.addEventListener('scroll', rusz);





// sprawdzanie wersji przegladarki
var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName = navigator.appName;
var fullVersion = '' + parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
licz = 0;
let flags = false;

// In Opera 15+, the true version is after "OPR/" 
if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset + 4);
}
// In older Opera, the true version is after "Opera" or after "Version"
else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf("Version")) != -1)
        fullVersion = nAgt.substring(verOffset + 8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
    browserName = "Microsoft Internet Explorer";
    fullVersion = nAgt.substring(verOffset + 5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
    browserName = "Chrome";
    fullVersion = nAgt.substring(verOffset + 7);
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
    browserName = "Safari";
    fullVersion = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf("Version")) != -1)
        fullVersion = nAgt.substring(verOffset + 8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
    browserName = "Firefox";
    fullVersion = nAgt.substring(verOffset + 8);
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
    (verOffset = nAgt.lastIndexOf('/'))) {
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() == browserName.toUpperCase()) {
        browserName = navigator.appName;
    }
}
// trim the fullVersion string at semicolon/space if present
if ((ix = fullVersion.indexOf(";")) != -1)
    fullVersion = fullVersion.substring(0, ix);
if ((ix = fullVersion.indexOf(" ")) != -1)
    fullVersion = fullVersion.substring(0, ix);

majorVersion = parseInt('' + fullVersion, 10);
if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
}

// wymus wielkosc dokumentu w zaleznosci od wielkosci ekranu
// DLA KOMOREK
winWidth = window.innerWidth;
if (winWidth < 500) {
    document.querySelector('.calosc').style.height = window.innerHeight * 8+ 'px';
}
// dla Laptookow
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
    //
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
        // let ktoryKolor = Math.floor((Math.random() * colors.length) + 0);
        // pasek.style.backgroundColor = colors[ktoryKolor];
        
    }
    ruszScrollBar();
    // kilki do animacji 
    const ball = new Array();
    for (i = 1; i < 4; i++) {
        ball[i] = document.querySelector(".ball" + i);
    }
    // const ball1 = document.querySelector(".ball1");
    // const ball2 = document.querySelector(".ball2");
    // const ball3 = document.querySelector(".ball3");
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
    ]

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

    
    //1 ekran
    if (wScroll < winHeight && wScroll < (winHeight * 1.4)) {
        part[1].style.top = 0 + "%";
        part[2].style.top = 100 + '%';
        part[2].style.opacity = "0";
    }
    // ~2 ekran
    if (wScroll > winHeight * 1.6 && wScroll < winHeight * 3) {
        part[2].style.opacity = "0";
    }
    // 2.5 ekran
    if (wScroll > winHeight * 2.5 && wScroll < (winHeight * 5)) {
        part[2].style.top = 0 + '%';
        navi.classList.remove("display-flex");
    }
    // 4 ekran

    if (wScroll < winHeight * 1) {
        part[1].style.top = 0;
        part[1].style.zIndex = 5;

    }
    // 6 ekran |5 winheighty| 2 slajd wkracza do gry, ten z moim ryjcem
    if (wScroll > winHeight * 1.1) {
        navi.classList.add("display-flex");
        zniszczKreski();
        // ODLICZANKO 15s lacznie?
        licz == 0 ? animujSlajd() : console.log("fakaj bobla");

        function animujSlajd() {
            setTimeout(function() {
                animujKulki();
            }, 500)
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




        part[1].style.top = -120 + "%";
        document.querySelector('.rest').style.opacity = 1;
        part[1].style.zIndex = 2;
        part[2].style.opacity = "1";
        part[2].style.top = 0 + '%';
        part[2].style.left = 0 + "%";
        // part[2].classList.remove('hower2');

        part[2].style.zIndex = 2;
        part[3].style.left = 100 + "%";
        part[3].style.zIndex = 3;
        part[4].style.left = 100 + '%';
        part[5].style.left = 100 + '%';
        // part[6].style.left = 100 + '%';
        // part[7].style.left = 100 + '%';
        // part[8].style.left = 100 + '%';

        // if (part[2].classList.contains('hower2')) {
        //     console.log("posiada");
        // } else {
        //     console.log("nie posiada");
        // }

    }

    // ekran 7
    if (wScroll > winHeight * 2) {
        part[2].style.left = -100 + '%'; // top na -99% wiec 1% zostaje widoczny i nizej podobnie

        part[2].style.zIndex = 4;

        // part[2].classList.add('hower2');



        // navi.classList.add("display-block")


        part[3].style.left = 0 + '%';
        part[3].style.top = 0 + '%';
        // part[3].classList.remove('hower3');
        part[3].style.zIndex = 3;
        part[4].style.left = 100 + '%';

        part[4].style.zIndex = 5;
        part[5].style.left = 100 + '%';
        part[5].style.zIndex = 6;
        // part[6].style.left = 100 + '%';
        // part[6].style.zIndex = 7;
        // part[7].style.left = 100 + '%';
        // part[7].style.zIndex = 8;
        // part[8].style.left = 100 + '%';
        // part[8].style.zIndex = 9;


        // if (part[2].classList.contains('hower2')) {
        //     console.log("posiada");
        // } else console.log("nie posiada");
    }
    // ekran z aplikacjami
    const app=new Array(5);
    for(i=1;i<app.length;i++){
        app[i] = document.querySelector(".p4-inner-app" + i)
    }
    
                                if(winWidth > 750 && flags == false)
                                    {
                                    for(i=1;i<app.length;i++){
                                    
                                    console.log("WHOGNO");
                                    app[i].classList.add("display-none");
                                    
                                    }
                                    flags =true;
                            }

                                if (wScroll > winHeight * 3) {
                                    part[2].style.left = -100 + '%'
                                    part[2].style.zIndex = 5;
                                    part[3].style.left = -100 + '%';
                                    part[3].style.zIndex = 4;
                                    
                                    // part[3].classList.toggle('hower3');



                                    // part[4].classList.remove('hower4');
                                    part[4].style.left = 0 + '%';
                                    part[4].style.zIndex = 3;
                                    
                                    part[5].style.left = 100 + '%';
                                    part[5].style.zIndex = 4;
                                    // part[6].style.left = 100 + '%';
                                    // part[6].style.zIndex = 5;
                                    // part[7].style.left = 100 + '%';
                                    // part[7].style.zIndex = 6;
                                    // part[8].style.left = 100 + '%';
                                    // part[8].style.zIndex = 7;
    }                           if(winWidth > 750){
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
                                            // document.querySelector(".opisapp1").style.transform = "translateY(-"+(wysokosci1/2)+"px)"
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
                                            // document.querySelector(".opisapp1").style.transform = "translateY(-"+(wysokosci1/2)+"px)"
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
                                            // document.querySelector(".opisapp1").style.transform = "translateY(-"+(wysokosci1/2)+"px)"
                                            app[3].classList.add("zniknij");
                                            
                                    }if(wScroll > winHeight*8.8 && wScroll < winHeight*9.4){
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
                                            // document.querySelector(".opisapp1").style.transform = "translateY(-"+(wysokosci1/2)+"px)"
                                            app[4].classList.add("zniknij");
                                            
                                    }
                                    if (wScroll > winHeight * 10.5) {
                                        part[2].style.left = -100 + '%'
                                        part[2].style.zIndex = 5;
                                        part[3].style.left = -100 + '%';
                                        part[3].style.zIndex = 4;
                                        part[4].style.left = -100 + '%';
                                
                                        // part[3].classList.toggle('hower4');
                                
                                
                                
                                        part[4].style.zIndex = 3;
                                        part[5].style.left = 0 + '%';
                                        part[5].style.zIndex = 2;
                                        // part[5].classList.remove('hower5');
                                        // part[6].style.left = 100 + '%';
                                        // part[6].style.zIndex = 3;
                                        // part[7].style.left = 100 + '%';
                                        // part[7].style.zIndex = 4;
                                        // part[8].style.left = 100 + '%';
                                        // part[8].style.zIndex = 5;
                                    }
                                    // ekran 10
                                    if (wScroll > winHeight *12) {
                                        part[2].style.left = -100 + '%'
                                        part[2].style.zIndex = 5;
                                        part[3].style.left = -100 + '%';
                                        part[3].style.zIndex = 4;
                                        part[4].style.left = -100 + '%';
                                        part[4].style.zIndex = 3;
                                        part[5].style.left = -100 + '%';
                                        part[5].style.zIndex = 2;
                                
                                        // part[3].classList.toggle('hower5');
                                
                                
                                
                                        // part[6].style.left = 0 + '%';
                                        // part[6].style.zIndex = 1;
                                        // part[6].classList.remove('hower');
                                        // part[7].style.left = 100 + '%';
                                        // part[7].style.zIndex = 2;
                                        // part[8].style.left = 100 + '%';
                                        // part[8].style.zIndex = 3;
                                    }
                                    }
    // ekran 9
    if(winWidth < 750){
    if (wScroll > winHeight * 4) {
        part[2].style.left = -100 + '%'
        part[2].style.zIndex = 5;
        part[3].style.left = -100 + '%';
        part[3].style.zIndex = 4;
        part[4].style.left = -100 + '%';

        // part[3].classList.toggle('hower4');



        part[4].style.zIndex = 3;
        part[5].style.left = 0 + '%';
        part[5].style.zIndex = 2;
        // part[5].classList.remove('hower5');
        // part[6].style.left = 100 + '%';
        // part[6].style.zIndex = 3;
        // part[7].style.left = 100 + '%';
        // part[7].style.zIndex = 4;
        // part[8].style.left = 100 + '%';
        // part[8].style.zIndex = 5;
    }
    // ekran 10
    if (wScroll > winHeight *12) {
        part[2].style.left = -100 + '%'
        part[2].style.zIndex = 5;
        part[3].style.left = -100 + '%';
        part[3].style.zIndex = 4;
        part[4].style.left = -100 + '%';
        part[4].style.zIndex = 3;
        part[5].style.left = -100 + '%';
        part[5].style.zIndex = 2;

        // part[3].classList.toggle('hower5');



        // part[6].style.left = 0 + '%';
        // part[6].style.zIndex = 1;
        // part[6].classList.remove('hower');
        // part[7].style.left = 100 + '%';
        // part[7].style.zIndex = 2;
        // part[8].style.left = 100 + '%';
        // part[8].style.zIndex = 3;
    }
    // ekran 11
    // if (wScroll > winHeight * 6) {
    //     part[2].style.left = -100 + '%'
    //     part[2].style.zIndex = 5;
    //     part[3].style.left = -100 + '%';
    //     part[3].style.zIndex = 4;
    //     part[4].style.left = -100 + '%';
    //     part[4].style.zIndex = 3;
    //     part[5].style.left = -100 + '%';
    //     part[5].style.zIndex = 2;
    //     // part[6].style.left = -100 + '%';
    //     // part[6].style.zIndex = 1;
    //     // part[6].classList.toggle('hower');
    //     // part[7].style.left = 0 + '%';
    //     // part[7].style.zIndex = 0;
    //     // part[7].classList.remove('hower');
    //     // part[8].style.left = 100 + '%';
    //     // part[8].style.zIndex = 1;  
    // }
    // // ekran 12
    // if (wScroll > winHeight * 7) {
    //     part[2].style.left = -100 + '%'
    //     part[2].style.zIndex = 6;
    //     part[3].style.left = -100 + '%';
    //     part[3].style.zIndex = 5;
    //     part[4].style.left = -100 + '%';
    //     part[4].style.zIndex = 4;
    //     part[5].style.left = -100 + '%';
    //     part[5].style.zIndex = 3;
    //     // part[6].style.left = -100 + '%';
    //     // part[6].style.zIndex = 2;
    //     // part[7].style.left = -100 + '%';
    //     // part[7].style.zIndex = 1;
    //     // part[7].classList.toggle('hower');
    //     // part[8].style.left = 0 + '%';
    //     // part[8].classList.remove('hower');
    //     // part[8].style.zIndex = 0;
    // }
    // // ekran 13
    // if (wScroll > winHeight * 8) {
    //     part[2].style.left = -100 + '%'
    //     part[2].style.zIndex = 7;
    //     part[3].style.left = -100 + '%';
    //     part[3].style.zIndex = 6;
    //     part[4].style.left = -100 + '%';
    //     part[4].style.zIndex = 5;
    //     part[5].style.left = -100 + '%';
    //     part[5].style.zIndex = 3;
    //     // part[6].style.left = -100 + '%';
    //     // part[6].style.zIndex = 2;
    //     // part[7].style.left = -100 + '%';
    //     // part[7].style.zIndex = 1;
    //     // part[8].style.left = 0 + '%';
    //     // part[8].style.zIndex = 0;



    // }
}
}

document.addEventListener('scroll', rusz);




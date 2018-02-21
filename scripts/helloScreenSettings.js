document.onload = rush();

        function rush() {
            document.addEventListener('scroll', function() {
                let wScroll = window.scrollY;
                let winHeight = window.innerHeight;
                console.log(wScroll / 20);
                const napis2Top = document.querySelector("#napis2").offsetTop;
                const nextTop = winHeight * 4;
                console.log(napis2Top);
                const napis1 = document.querySelector("#napis1");
                const napis2 = document.querySelector("#napis2");

                // sprawdzam wersje FF


                if (wScroll < winHeight * 4) {

                    napis1.style.transform = "translateY(" + (wScroll * 1.3) + "px)";
                    if (wScroll > 200 && browserName != "Firefox") {
                        napis1.style.transform = "translateY(" + (wScroll * 0.9) + "px)";
                        napis1.style.MozTransform = "translateY(" + (wScroll * 0.9) + "px)";
                    }
                    napis1.style.backgroundSize = (100 + wScroll * 0.9) + "%" + (100 + wScroll / 100) + "%";
                    napis1.style.opacity = 1 - (wScroll / 250);
                    napis1.style.display = "block";
                }


                if (wScroll > winHeight * 0.5 && wScroll < winHeight * 1.3) {
                    napis2.classList.remove("zniknij");
                    napis2.classList.add("pojaw");
                    napis2.style.display = "block";
                    // napis2.classList.add("pojaw");
                    napis2.style.transform = "translateY(" + ((wScroll * 1.2) - 0.4 * winHeight) + "px)";
                    napis2.style.MozTransform = "translateY(" + ((wScroll * 1.2) - 0.4 * winHeight) + "px)";

                    napis2.classList.remove("zniknij");
                    



                }
                if(wScroll > winHeight*0.9){
                    napis2.classList.add("zniknij");
                }
                // if(wScroll > winHeight*0.5){
                //     napis2.style.opacity =  3- (wScroll/350);
                // }



            })
        }
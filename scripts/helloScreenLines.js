if(window.innerWidth > 700)
{const createdLine = [];
const ParentOfLines = document.querySelector(".p1");
// ustawic ile kresek - 50 wyglada ok

for (i = 0; i < 55; i++) {
createdLine[i] = document.createElement("div");
ParentOfLines.appendChild(createdLine[i]);
createdLine[i].classList.add("kreski");
}
const kreski = document.querySelectorAll(".kreski");
let wScroll = window.scrollY;
const theCSSprop = [];

function rozmiescKreski() {
    for (i = 0; i < kreski.length; i++) {
        //rozrzucanie kresek po ekranie
        kreski[i].style.top = Math.floor((Math.random() * 100) + -10) + "%";
        kreski[i].style.left = Math.floor((Math.random() * 100) + -10) + "%";
        // dlugosci kresek
        kreski[i].style.width = Math.floor((Math.random() * 300) + 30) + "px";
        // kolor kresek
        var x = Math.floor((Math.random() * 255) + 1);
        var y = Math.floor((Math.random() * 255) + 1);
        var z = Math.floor((Math.random() * 255) + 1);
        var a = Math.floor((Math.random() * 7) + 1)
        kreski[i].style.background = "rgba(" + x + "," + y + "," + z + ",0." + a + ")";

        // kreski[i].style.background = "rgb("+Math.floor((Math.random() * 255) + 1)+","++Math.floor((Math.random() * 255) + 1)+","+Math.floor((Math.random() * 255) + 1)+")";

    }


}

function ruszKreski() {
    for (i = 0; i < kreski.length; i++) {
        let wScroll = window.scrollY;
        // kreski[i].style.left=
        theCSSprop[i] = window.getComputedStyle(kreski[i], null).getPropertyValue("top");
        // kreski[i].style.transform=theCSSprop[i]+ wScroll+"%";
        kreski[i].style.transform = "translateY(" + wScroll * 1.3 + "px) translateX(" + wScroll * 1.3 + "px) rotate(45deg)";
        if (i % 2 == 0) {
            kreski[i].style.transform = "translateY(" + wScroll + "px) translateX(" + wScroll + "px) rotate(45deg)";

        }
        if (i % 3 == 0) {
            kreski[i].style.transform = "translateY(" + wScroll / 2 + "px) translateX(" + wScroll / 2 + "px) rotate(45deg)";
        }



    }
}

document.addEventListener('scroll', ruszKreski);
document.onload = rozmiescKreski();
}
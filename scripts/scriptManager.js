// Skrypt ustawiający kolory elementów itd
if(window.innerWidth > 650){
const pasek = document.querySelector(".progress-bar");
const p2bg = document.querySelector(".p2-layer")
let flagX = false;
let posX = 50;
const alphaColors = [
    "rgba(148, 92, 203, 0.6)",
    "rgba(148, 29, 225, 0.6)",
    "rgba(193, 29, 225, 0.6)",
    "rgba(255, 29, 255, 0.6)",
    "rgba(137, 7, 226, 0.6)",
    "rgba(137, 62, 226, 0.6)",
    "rgba(75, 62, 226, 0.6)",
    "rgba(75, 62, 169, 0.6)",
    "rgba(75, 62, 113, 0.6)",
    "rgba(255, 62, 113, 0.6)",
    "rgba(91, 62, 255, 0.6)",
    "rgba(18, 62, 255, 0.6)",
    "rgba(18, 0, 255, 0.6)",
    "rgba(18, 95, 124, 0.6)",
    "rgba(18, 95, 183, 0.6)",
    "rgba(18, 159, 183, 0.6)",
    "rgba(101, 159, 183, 0.6)"
];
window.addEventListener('load',function(){
    //co 3 sekundy wykonuj
    window.setInterval(function(){
        let ktoryKolor = Math.floor((Math.random() * alphaColors.length) + 0);
        
        pasek.style.backgroundColor = alphaColors[ktoryKolor];
        pasek.style.boxShadow = " 1px 2px 10px"+alphaColors[ktoryKolor];
        for(let i = 0; i<document.querySelectorAll(".headerz").length; i++)
        document.querySelectorAll(".headerz")[i].style.color = alphaColors[ktoryKolor];
        for(let j = 0; j< document.querySelectorAll(".p-container").length;j++){
            document.querySelectorAll(".p-container")[j].style.border = "inset 1px "+alphaColors[ktoryKolor]+"";
        }
        for(let k = 0; k< document.querySelectorAll(".p3-inner-webinfo").length;k++){
            document.querySelectorAll(".p3-inner-webinfo")[k].style.boxShadow = "2px 5px 30px "+alphaColors[ktoryKolor]+"";
        }
        for(let l = 0; l< document.querySelectorAll(".opisspan").length;l++){
            document.querySelectorAll(".opisspan")[l].style.color = alphaColors[ktoryKolor];
        }
       
    }, 3000);
    
})
}
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
]
const colors = [
    // blekity
    "#59c0df",
    "#287687",
    "#56d9ec",
    "#68f2c3",
    "#cdf5f9",
    "#cbf9ce",
    "#d0d0d0",
    "#05729b",
    "#2bc1d1",
    // rozowe
    "#e8b2db",
    "#a56da5",
    "#fdc1c1",
    "#f49b9b",
    "#f45373",
    "#d62a67",
    "#ce006f",
    "#e6a8bf",
    "#f7d0cb"
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
        

        
        // document.querySelector(".p-container").style.border = "1px solid"+alphaColors[ktoryKolor]+"";
        // document.querySelector(".pchaj").style.boxShadow = "5px 5px 20px"+alphaColors[ktoryKolor];
       
    }, 3000);
      

    //   window.setInterval(function(){
    //         p2bg.style.backgroundPositionX = posX+"%";
            
    //         if(posX < 0){
    //             flagX == true;
    //         }
    //         if(flagX == true){
    //             posX++;
    //         }
    //         if(posX == 52){
    //             flagX == false;
    //         }
    //         if(flagX == false)
    //         {posX--;}
    //         console.log(posX);
    //   }, 500);
    
})
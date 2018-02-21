document.onload = switchCSS();
function switchCSS(){

const devices = ["ipad","mediumLaptop","mediumPcScreen","fullHd","ultraSmallPhone","normalSmartphones","bigSmarphones"];
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
let nameDevice="";
if(windowWidth <=321 ){
    nameDevice = devices[4];
    const mojCSS = document.createElement( "link" );
    mojCSS.rel = "stylesheet";
    mojCSS.href = "styles/"+devices[4]+".css";
    mojCSS.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(mojCSS);
}
if(windowWidth >321 && windowWidth <= 390){
    nameDevice = devices[5];
    const mojCSS = document.createElement( "link" );
    mojCSS.rel = "stylesheet";
    mojCSS.href = "styles/"+devices[5]+".css";
    mojCSS.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(mojCSS);
}
if(windowWidth >391 && windowWidth <= 500){
    nameDevice = devices[6];
    const mojCSS = document.createElement( "link" );
    mojCSS.rel = "stylesheet";
    mojCSS.href = "styles/"+devices[5]+".css";
    mojCSS.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(mojCSS);
}
if(windowWidth <=1025 && windowWidth >= 760){
    nameDevice = devices[0];
    const mojCSS = document.createElement( "link" );
    mojCSS.rel = "stylesheet";
    mojCSS.href = "styles/"+devices[0]+".css";
    mojCSS.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(mojCSS);
}
if(windowWidth >=1150 && windowWidth <= 1400 ){
    nameDevice = devices[1];
    const mojCSS = document.createElement( "link" );
    mojCSS.rel = "stylesheet";
    mojCSS.href = "styles/"+devices[1]+".css";
    mojCSS.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(mojCSS);
}
// ekrany o szerokosci ok 1440p
if(windowWidth >=1400 && windowWidth <= 1600){
    nameDevice = devices[2];
    const mojCSS = document.createElement( "link" );
    mojCSS.rel = "stylesheet";
    mojCSS.href = "styles/"+devices[2]+".css";
    mojCSS.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(mojCSS);
}
// ekray fullhd 1920x 1080
if(windowWidth >=1441 && windowWidth <= 2000 ){
    nameDevice = devices[3];
    const mojCSS = document.createElement( "link" );
    mojCSS.rel = "stylesheet";
    mojCSS.href = "styles/"+devices[3]+".css";
    mojCSS.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(mojCSS);
}

// reguly wczytywania stylow css, w zaleznosci od wielkosci ekranu, zeby reguly sie nie dublowaly
return nameDevice;
}
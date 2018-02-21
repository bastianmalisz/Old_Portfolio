 /* NASLUCHIWANIE KLIKU NA OBRAZKI */
 const bigImage = document.querySelector(".p3-image-big");
 const webImage1 = document.querySelector(".web1");
 const caly3part = document.querySelector(".p3-inner");
 const imageLink = document.querySelector('.image-big-link');
 const konkretImg = document.querySelector('.p3-inner-web');

 var parent = document.querySelectorAll('.p3-inner');
 // Zignoruj element bigImage
 const ignore = bigImage;
 const ignore2 = imageLink;

 caly3part.addEventListener('click', function(e) {
     for (let i = 0; i < parent[0].children.length; i++) {
         console.log(parent[0].children[i]);
         if (parent[0].children[i].classList.contains("odsun")) {
             parent[0].children[i].classList.remove("odsun");
         }
     }

     if (e.target.classList.contains("p3-inner-web")) {
         e.target.classList.toggle("odsun");
     }

 });
 // nasluchiwanie najazdu na aplikacje
 // const part4 = document.querySelector(".part4");

 // part4.addEventListener('click',function(e){
 //     console.log(e.target.children[1]);
 //     e.target.children[1].classList.toggle("pojaw");
 // })

 // zmieniam kolor pazdzierza
 // co sekunde wywal komunikat ze dziolo
 // const pazdzierz = document.querySelector();
 // let i = 0;
 // let coords = [];
 // function go () {



 //     i++;

 //     setTimeout(go, 150); // callback
 // }
 // go();
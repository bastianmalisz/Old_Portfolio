//  Skrypt ustawiający kliknięcia na obrazy w sekcji z moimi witrynami
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
         if (parent[0].children[i].classList.contains("odsun")) {
             parent[0].children[i].classList.remove("odsun");
         }
     }

     if (e.target.classList.contains("p3-inner-web")) {
         e.target.classList.toggle("odsun");
     }

 });
 

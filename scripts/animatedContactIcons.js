let flag = false;
        document.querySelector(".phone").addEventListener("mouseover", function(e) {

            if (flag == false) {
                e.target.classList.add("obroc_gnoja");
                flag = true;
                setTimeout(function() {
                    e.target.classList.remove("obroc_gnoja");
                    flag = false;
                }, 1000)
            }
        })
        document.querySelector(".email").addEventListener("mouseover", function(e) {

            if (flag == false) {
                e.target.classList.add("obroc_gnoja");
                flag = true;
                setTimeout(function() {
                    e.target.classList.remove("obroc_gnoja");
                    flag = false;
                }, 1000)
            }
        })
        document.querySelector(".github").addEventListener("mouseover", function(e) {

            if (flag == false) {
                e.target.classList.add("obroc_gnoja");
                flag = true;
                setTimeout(function() {
                    e.target.classList.remove("obroc_gnoja");
                    flag = false;
                }, 1000)
            }
        })

        document.querySelector(".contact-icons").addEventListener("click", function(e) {
            if (e.target.classList[0] == ("contact-icons")) {
                return;
            } else {
                switch (e.target.classList[0]) {
                    case "phone":
                        document.querySelector(".phone-text").classList.toggle("pojaw");
                        document.querySelector(".phone-text").textContent = "579643633";
                        break;
                    case "email":
                        document.querySelector(".email-mail").classList.toggle("pojaw");
                        document.querySelector(".email-mail").textContent = "maliszewskiseba@protonmail.com";
                        break;
                    case "github":
                        document.querySelector(".github-link").classList.toggle("pojaw");
                        document.querySelector(".github-link").innerHTML = `
                    <a href="https://github.com/bastianmalisz">Github</a>
                `;
                        break;
                }

            }
        })
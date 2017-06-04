window.addEventListener('scroll', function (e) {
        var menu = document.getElementById('menu');
        var logo = document.querySelector(".logo img")
        var signUp = document.getElementById("signUp");
        if (document.documentElement.scrollTop || document.body.scrollTop > 200) {
                menu.classList.add('white');
                logo.removeAttribute("src");
                logo.setAttribute("src", "assets/images/logo-pink.png");
                signUp.classList.remove("hide");
        } 
        else{
        	menu.classList.remove('white');
        	logo.removeAttribute("src");
            logo.setAttribute("src", "assets/images/logo-white.png")
            signUp.classList.add("hide");
        }
    });
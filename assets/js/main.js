var input = Array.from(document.getElementsByClassName("noShow"));
var validate = Array.from(document.getElementsByTagName("input"));
var show = Array.from(document.getElementsByClassName("show"));
var phone = document.getElementById("phone");
var name = document.getElementById("name");
var email = document.getElementById("email");
var city = document.getElementById("city");
var signButton = document.getElementById("sign-button");

//controla la barra al hacer scroll 
window.addEventListener('scroll', function (e) {
        var menu = document.getElementById('menu');
        var logo = document.querySelector(".logo img");
        var signUp = document.getElementById("signUp");
        if (document.documentElement.scrollTop || document.body.scrollTop > 50) {
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
        }//oculta el formulario si el usuario hace scroll hacia abajo
        if(document.documentElement.scrollTop || document.body.scrollTop > 350){
            input.forEach(function(e,i){
                e.classList.add("noShow");
                show.forEach(function(e){e.classList.add("show")});
            });
        }
    });

//despliega el formulario de registro
phone.addEventListener("click", function(){
    input.forEach(function(e){
        e.classList.remove("noShow");
    })

})
validate.forEach(function(e,i){
    e.addEventListener("click", function(){
        if(e.value == ""){
            show[i].classList.remove("show");
        }
    })
})
/*intentando validacion de formulario, por falta de tiempo no pude terminar
signButton.addEventListener("click", function(){
    if(!(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(email.value))){
        show[2].classList.add("noshow");
    }
    else{
        document.getElementById("phone").value == "";
        document.getElementById("name").value == "";
        document.getElementById("email").value == "";
        document.getElementById("city").value == "";
        }
})
*/
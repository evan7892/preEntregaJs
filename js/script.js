let loginSubmit = document.getElementById("loginSubmit");
let olvidar = document.getElementById("olvidar");
let borrarTodo = document.getElementById("borrarTodo");
let remember = document.getElementById("remember");

function recordarme(storage) {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    const usuario = {

        "user": user,
        "pass": pass

    }


/*     if (storage === "localStorage") {
        localStorage.setItem("user", JSON.stringify(usuario));
    } */

    storage === "localStorage" && localStorage.setItem("user", JSON.stringify(usuario));

/*     if (storage === "sessionStorage") {
        sessionStorage.setItem("user", JSON.stringify(usuario))
    } */
    storage==="localStorage" && sessionStorage.setItem("user", JSON.stringify(usuario))
}

    function borrarDatos(storage) {
        storage.clear();
    }
    function borrarDatoUnico(storage, key) {
        storage.removeItem(key);
    }

    loginSubmit.addEventListener("click",()=>{ 
/*     if (remember.checked) {
        recordarme("localStorage");
    } else {
        recordarme("sessionStorage");
    } */
    remember.checked?recordarme("localStorage"):recordarme("sessionStorage")})

    olvidar.addEventListener("click",()=>{
        borrarDatos(sessionStorage);
    })

    borrarTodo.addEventListener("click",()=>{
        borrarDatos(sessionStorage);
        borrarDatos(localStorage)
    }) 



    const btnComprar = document.getElementById("botonComprar")
    btnComprar.addEventListener("click", () => alert("Aún no está disponible"));

    let readMore_btn = document.getElementById('readMore_btn');
    let hideText = document.getElementById('foot');

    readMore_btn.addEventListener('click', toggleText);

    function toggleText() {
        hideText.classList.toggle('show');

        if (hideText.classList.contains('show')) {
            readMore_btn.innerHTML = 'Ver menos'
        }
        else {
            readMore_btn.innerHTML = 'Ver más'
        }
    }

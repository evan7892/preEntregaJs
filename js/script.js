const btnSwal = document.getElementById("btnUno")
const btnSwal2 = document.getElementById("btnDos")
const btnSwal3 = document.getElementById("btnTres")
const btnSwal4 = document.getElementById("btnCuatro")
const btnSwal5 = document.getElementById("btnCinco")
const btnSwal6 = document.getElementById("btnSeis")

btnSwal.onclick=()=>{
    Swal.fire({
        title: '¿Deseas añadir Microfono Hyper x Quadcast al carrito?',
        text: "Se añadirá a tu carrito",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo añadirlo',
        cancelButtonText:"No deseo añadirlo"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Añadiste Hyper x Quadcast al carrito ',
            'Tu producto se añadió al carrito.',
            
          )
        }
      })
}
btnSwal2.onclick=()=>{
    Swal.fire({
        title: '¿Deseas añadir Mouse Logitech G203 al carrito?',
        text: "Se añadirá a tu carrito",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo añadirlo',
        cancelButtonText:"No deseo añadirlo"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Añadiste Mouse Logitech G203 al carrito ',
            'Tu producto se añadió al carrito.',
            
          )
        }
      })
}
btnSwal3.onclick=()=>{
    Swal.fire({
        title: '¿Deseas añadir Logitech brio 4k al carrito?',
        text: "Se añadirá a tu carrito",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo añadirlo',
        cancelButtonText:"No deseo añadirlo"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Añadiste Logitech brio 4k al carrito ',
            'Tu producto se añadió al carrito.',
            
          )
        }
      })
}
btnSwal4.onclick=()=>{
    Swal.fire({
        title: '¿Deseas añadir Monitor gamer Samsung F22T35 al carrito?',
        text: "Se añadirá a tu carrito",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo añadirlo',
        cancelButtonText:"No deseo añadirlo"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Añadiste Monitor gamer Samsung F22T35 al carrito ',
            'Tu producto se añadió al carrito.',
            
          )
        }
      })
}
btnSwal5.onclick=()=>{
    Swal.fire({
        title: '¿Deseas añadir Teclado mecánico logitech G413 al carrito?',
        text: "Se añadirá a tu carrito",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo añadirlo',
        cancelButtonText:"No deseo añadirlo"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Añadiste Teclado mecánico logitech G413 al carrito ',
            'Tu producto se añadió al carrito.',
            
          )
        }
      })
}
btnSwal6.onclick=()=>{
    Swal.fire({
        title: '¿Deseas añadir Mouse Pad gamer Logitech G6403 al carrito?',
        text: "Se añadirá a tu carrito",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo añadirlo',
        cancelButtonText:"No deseo añadirlo"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Añadiste Mouse Pad gamer Logitech G640 al carrito ',
            'Tu producto se añadió al carrito.',
            
          )
        }
      })
}


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
        borrarDatos(localStorage);
    }) 



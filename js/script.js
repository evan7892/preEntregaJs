const opcionUno = document.getElementById('moneda-uno');
const opcionDos = document.getElementById('moneda-dos');
const cantidadUno = document.getElementById('cantidad-uno');
const cantidadDos = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');


function calcular(){
    const monedaUno = opcionUno.value;
    const monedaDos = opcionDos.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${monedaUno}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[monedaDos];
       
       cambioEl.innerText = `1 ${monedaUno} = ${taza} ${monedaDos}`;

       cantidadDos.value = (cantidadUno.value * taza).toFixed(2);

    } );
    
}

opcionUno.addEventListener('change', calcular);
cantidadUno.addEventListener('input', calcular);
opcionDos.addEventListener('change', calcular);
cantidadDos.addEventListener('input', calcular);

taza.addEventListener('click', () =>{
    const temp = opcionUno.value;
    opcionUno.value = opcionDos.value;
    opcionDos.value = temp;
    calcular();
} );


calcular();



const btnSwal = document.getElementById("btnUno")
const btnSwal2 = document.getElementById("btnDos")
const btnSwal3 = document.getElementById("btnTres")
const btnSwal4 = document.getElementById("btnCuatro")
const btnSwal5 = document.getElementById("btnCinco")
const btnSwal6 = document.getElementById("btnSeis")

btnSwal.onclick = () => {
  Swal.fire({
    title: '¿Deseas añadir Microfono Hyper x Quadcast al carrito?',
    text: "Se añadirá a tu carrito",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, deseo añadirlo',
    cancelButtonText: "No deseo añadirlo"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Añadiste Hyper x Quadcast al carrito ',
        'Tu producto se añadió al carrito.',

      )
    }
  })
}
btnSwal2.onclick = () => {
  Swal.fire({
    title: '¿Deseas añadir Mouse Logitech G203 al carrito?',
    text: "Se añadirá a tu carrito",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, deseo añadirlo',
    cancelButtonText: "No deseo añadirlo"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Añadiste Mouse Logitech G203 al carrito ',
        'Tu producto se añadió al carrito.',

      )
    }
  })
}
btnSwal3.onclick = () => {
  Swal.fire({
    title: '¿Deseas añadir Logitech brio 4k al carrito?',
    text: "Se añadirá a tu carrito",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, deseo añadirlo',
    cancelButtonText: "No deseo añadirlo"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Añadiste Logitech brio 4k al carrito ',
        'Tu producto se añadió al carrito.',

      )
    }
  })
}
btnSwal4.onclick = () => {
  Swal.fire({
    title: '¿Deseas añadir Monitor gamer Samsung F22T35 al carrito?',
    text: "Se añadirá a tu carrito",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, deseo añadirlo',
    cancelButtonText: "No deseo añadirlo"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Añadiste Monitor gamer Samsung F22T35 al carrito ',
        'Tu producto se añadió al carrito.',

      )
    }
  })
}
btnSwal5.onclick = () => {
  Swal.fire({
    title: '¿Deseas añadir Teclado mecánico logitech G413 al carrito?',
    text: "Se añadirá a tu carrito",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, deseo añadirlo',
    cancelButtonText: "No deseo añadirlo"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Añadiste Teclado mecánico logitech G413 al carrito ',
        'Tu producto se añadió al carrito.',

      )
    }
  })
}
btnSwal6.onclick = () => {
  Swal.fire({
    title: '¿Deseas añadir Mouse Pad gamer Logitech G6403 al carrito?',
    text: "Se añadirá a tu carrito",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, deseo añadirlo',
    cancelButtonText: "No deseo añadirlo"
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

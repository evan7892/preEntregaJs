
//Función de bienvenida
function bienvenida() {
    alert("Bienvenido/a acabas de ingresar al carrito de compras de Elite Gaming")
}

//Función de menu
function menu() {
    const opcion = prompt("En nuestro carrito de compras tienes diferentes opciones \n 1- Ver los productos disponibles \n 2- Hacer un prestamo a cuotas con Elite Gaming \n 3- Acceder a tu cuenta para retirar dinero \n 4- Salir del carrito Elite \n 5- Buscar productos disponibles (consola) \n 6- Buscar productos por precio (consola)")
    switch (opcion) {
        case "1":
            const opcionMicro = prompt("En Elite gaming tenemos disponible los siguientes productos \n1- Microfonos \n2- Diademas \n3- Mouse \n4- Camaras \n ¿En cuál de todos estos estás interesado?")
            switch (opcionMicro) {
                case "1":
                    let productoA = prompt("1- Microfono Hyperx Quadcast, costo $170 \n2- Maono Au-A04 costo $70 \n 3 para volver al menú")
                    switch (productoA) {
                        case "1":
                            let hyperX = prompt("¿Deseas comprar Microfono Hyperx Quadcast \n1- para comprar \n2- para volver al menú")
                            switch (hyperX) {
                                case "1":
                                    alert("Perfecto, haz comprado Microfono Hyperx Quadcast, por 170")
                                    break;
                                case "2":
                                    menu();
                                    break;

                                default:
                                    alert("Por favor ingresa un dato válido")
                                    compraHyperx
                                    break;
                            }

                            break;
                        case "2":
                            let maono = prompt("¿Deseas comprar Maono Au-A04 \n1- para comprar \n2- para volver al menú")
                            switch (maono) {
                                case "1":
                                    alert("Perfecto, haz comprado Maono Au-A04, por 70")
                                    break;
                                case "2":
                                    menu();
                                    break;

                                default:
                                    alert("Por favor escoge una opción valida")
                                    break;
                            }
                            break;
                        case "3":
                            menu();
                            break;

                        default:
                            alert("Por favor ingresa un dato válido")
                            menu();
                            break;
                    }
                    break;
                case "2":
                    let productoB = prompt("\n 1- Logitech G733, costo $170 \n2- Onikuma k10 costo $40 \n 3 para volver al menú")
                    switch (productoB) {
                        case "1":
                            let g733 = prompt("¿Deseas comprar Logitech G733 \n1- para comprar \n2- para volver al menú")
                            switch (g733) {
                                case "1":
                                    alert("Perfecto, haz comprado Logitech G733, por 170")
                                    break;
                                case "2":
                                    menu();
                                    break;

                                default:
                                    alert("Por favor escoge una opción valida")
                                    break;
                            }
                            break;
                        case "2":
                            let onikumK10 = prompt("¿Deseas comprar Onikuma k10 \n1- para comprar \n2- para volver al menú")
                            switch (onikumK10) {
                                case "1":
                                    alert("Perfecto, haz comprado Onikuma k10, por 40")
                                    break;
                                case "2":
                                    menu();
                                    break;

                                default:
                                    alert("Por favor escoge una opción valida")
                                    break;
                            }
                            break;
                        case "3":
                            menu();
                            break;

                        default:
                            break;
                    }

                    break;
                case "3":
                    let productoC = prompt("\n 1- Logitech G203, costo $40 \n2- Logitech G502 costo $60 \n 3 para volver al menú")
                    switch (productoC) {
                        case "1":
                            let G203 = prompt("¿Deseas comprar Logitech G203 \n1- para comprar \n2- para volver al menú")
                            switch (G203) {
                                case "1":
                                    alert("Perfecto, haz comprado Logitech G203, por 40")
                                    break;
                                case "2":
                                    menu();
                                    break;

                                default:
                                    alert("Por favor escoge una opción valida")
                                    break;
                            }
                            break;
                        case "2":
                            let G502 = prompt("¿Deseas comprar Logitech G203 \n1- para comprar \n2- para volver al menú")
                            switch (G502) {
                                case "1":
                                    alert("Perfecto, haz comprado Logitech G502, por 60")
                                    break;
                                case "2":
                                    menu();
                                    break;

                                default:
                                    alert("Por favor escoge una opción valida")
                                    break;
                            }
                    }
                    break;
                case "4":
                    let productoD = prompt("1- Logitech Brio, costo $300 \n2- Logitech Stream Cam costo $120 \n 3 para volver al menú")
                    switch (productoD) {
                        case "1":
                            let brio = prompt("¿Deseas comprar Logitech brio \n1- para comprar \n2- para volver al menú")
                            switch (brio) {
                                case "1":
                                    alert("Perfecto, haz comprado Logitech Brio, por 300")
                                    break;
                                case "2":
                                    menu();
                                    break;

                                default:
                                    alert("Por favor escoge una opción valida")
                                    break;
                            }
                            break;
                        case "2":
                            let stream = prompt("¿Deseas comprar Logitech Stream Cam \n1- para comprar \n2- para volver al menú")
                            switch (stream) {
                                case "1":
                                    alert("Perfecto, haz comprado Logitech Stream Cam, por 120")
                                    break;
                                case "2":
                                    menu();
                                    break;

                                default:
                                    alert("Por favor escoge una opción valida")
                                    break;
                            }
                            break;
                        case "3":

                            break;

                        default:
                            break;
                    }
                    break;

                default:
                    alert("Por favor elige una opción correcta")
                    menu();
                    break;
            }
            break;
        case "2":
            prestamos();
            menu();
            break;
        case "3":
            acceder();
            menu();
            break;
        case "4":
            alert("Gracias por usar nuestro carrito, vuelve cuando desees!")
            break;
        case "5":
            busqueda();
            break;
            case "6":
                busquedaPrecio();
                break;


        default:
            alert("No seleccionó ninguna opción correcta")
            menu();
            break;
    }
}

//Funcion de prestamo
function prestamos() {
    let interes = (0)
    let cuotas = (0)
    const cantidad = (prompt("Ingrese la cantidad a prestar (max $20000"))
    if (cantidad > 20000) {
        alert("Lo siento no puedes prestar cantidades tan altas")
    } else {
        let opcionPrestamo = prompt("Perfecto, te podemos prestar $ " + cantidad + " a diferentes cuotas mensuales \n 1- 3 meses (10%)\n 2- 6 meses (20%) \n 3- 12 meses (30%)")
        switch (opcionPrestamo) {
            case "1":
                interes = cantidad * 1.10
                cuotas = interes / 3
                alert("Perfecto tu nuevo saldo es de " + cantidad + "\n y tus 3 cuotas serán de " + cuotas.toFixed(2))
                break;
            case "2":
                interes = cantidad * 1.20
                cuotas = interes / 6
                alert("Perfecto tu nuevo saldo es de " + cantidad + "\n y tus 6 cuotas serán de " + cuotas.toFixed(2))
                break;
            case "3":
                interes = cantidad * 1.30
                cuotas = interes / 12
                alert("Perfecto tu nuevo saldo es de " + cantidad + "\n y tus 12 cuotas serán de " + cuotas.toFixed(2))
                break;

            default:
                alert("Por favor selecciona una opción correcta")
                prestamos();
                break;
        }
    }
}

//funcion de acceder para retirar dinero

function acceder() {
    const nombreUsuario = ["evan"]
    const numeroCuentas = [1122]
    let saldo = (1000000)
    let extraccion = (0)

    const nombreIngresado = prompt("Por favor ingresa tu nombre de usuario registrado")
    if (nombreIngresado == nombreUsuario) {
        alert("Bienvenido/a " + nombreIngresado)
    } else {
        alert("Nombre de usuario/a incorrecto")
        acceder();
    }
    const numeroCuenta = parseInt(prompt("Por favor ingresa el numero de cuenta registrado"))
    if (numeroCuenta == numeroCuentas) {
        const extraccion = prompt("Numero de cuenta correcto, Tu saldo actualmente es de " + saldo + " escribe el monto a retirar")
        saldo = saldo - extraccion
        alert("Tu retiro fue de " + extraccion + " Tu nuevo saldo es " + saldo)
    } else {

    }
}
//funcion de busqueda por marca
function busqueda() {
    const productos = [{
        nombre: "Maono Au-A04",
        categoria: "Microfono",
        precio: 70,
    },
    {
        nombre: "hyperX",
        categoria: "Microfono",
        precio: 170,
    },
    {
        nombre: "logitech G203",
        categoria: "Mouse",
        precio: 40,
    },
    {
        nombre: "Logitech G502",
        categoria: "Mouse",
        precio: 60,
    },
    {
        nombre: "logitech brio 4k",
        categoria: "Webcams",
        precio: 300,
    },
    {
        nombre: "Logitech stream cam",
        categoria: "Webcams",
        precio: 120,
    },
    {
        nombre: "Onikuma k10",
        categoria: "Diademas",
        precio: 40,
    },
    {
        nombre: "Logitech G733",
        categoria: "Diademas",
        precio: 170,
    }
    ]
    let keyword = prompt("Ingresa por favor qué periferico deseas buscar")
    const resultadoBusqueda = productos.filter((producto) => producto.nombre.includes(keyword))
    console.log(resultadoBusqueda);

}

//función de busqueda por precio
function busquedaPrecio() {
    const productos = [{
        nombre: "Maono Au-A04",
        categoria: "Microfono",
        precio: 70,
    },
    {
        nombre: "hyperX",
        categoria: "Microfono",
        precio: 170,
    },
    {
        nombre: "logitech G203",
        categoria: "Mouse",
        precio: 40,
    },
    {
        nombre: "Logitech G502",
        categoria: "Mouse",
        precio: 60,
    },
    {
        nombre: "logitech brio 4k",
        categoria: "Webcams",
        precio: 300,
    },
    {
        nombre: "Logitech stream cam",
        categoria: "Webcams",
        precio: 120,
    },
    {
        nombre: "Onikuma k10",
        categoria: "Diademas",
        precio: 40,
    },
    {
        nombre: "Logitech G733",
        categoria: "Diademas",
        precio: 170,
    }]
    let precioIngresado = prompt("Encuentra tu producto por precio, ingresa un precio por favor")
    const encontrarPrecio = productos.find((producto) => producto.precio == precioIngresado);
    console.log(encontrarPrecio);
}
//llamado de funciones
bienvenida();
menu()
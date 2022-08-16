//AHORA NO NECESITAMOS MAS PROMPT PORQUE LOS DATOS SE INGRESAN CON EL FORMULARIO
//PARA SIMPLIFICAR EL DESARROLLO: SE RENDERIZARÁ UN SOLO FORMULARIO
//Y POR ENDE NO HAY QUE SOLICITAR LA CANTIDAD DE PRODUCTOS A INGRESAR Y QUITAR TODAS LAS CONDICIONES QUE TENIAMOS

let arrayDeVinos = []

//CREAMOS UNA FUNCION PARA CREAR UN PRODUCTO CADA VEZ QUE SE EJECUTE EL EVENTO DE CLICK SOBRE EL BOTON DEL FORMULARIO

function crearProducto(objeto) { //la función ahora necesita recibir la captura de datos del formulario
    validarDatos(objeto) //primero se validan los datos
    renderizarTodos('todos',productosDelAlmacenamiento) //luego renderizo todo
    renderizarMayores('mayores',productosDelAlmacenamiento) //luego los productos mayores a 2010
}

function validarDatos(objeto) { //funcion que ejecuta las validaciones y carga de datos  
    let nombre = objeto.nombre
    if (nombre.length<4) { //los loops de las condiciones se cambiar por condiciones comunes
        //ya que solamente se realizará la validación UNA UNICA VEZ: al enviar los datos con el evento
        alert('El nombre del vino tiene que tener al menos 4 letras') //el pedido de prompt se cambia por alert
        //ya que TODO ahora se ingresa desde el formulario
    }
    let varietal = objeto.varietal
    if (varietal.length<4) {
        alert('el varietal del vino tiene que tener al menos 4 letras')
    }
    let foto = objeto.foto
    if (foto.length<10) {
        alert('la foto del vino tiene que tener al menos 10 letras')
    }
    let estacionamiento = objeto.estacionamiento
    if (isNaN(estacionamiento) || estacionamiento<1900) {
        alert('el año de estacionamiento tiene que ser mayor a 1900')
    }
    //UNICAMENTE si se cumplen TODAS las condiciones anteriores creo el objeto y ejecuto todo el procedimiento de creacion de productos
    if (nombre.length>=4 && varietal.length>=4 && foto.length>=10 && estacionamiento>=1900) {
        let vino = {
            nombre: nombre,
            varietal: varietal,
            foto: foto,
            estacionamiento: estacionamiento
        }
        vino.id = parseInt(Math.random()*1000000) //saco la parte entera de (un numero aleatorio entre 0 y 1 y lo multiplico po un millon)
        arrayDeVinos.push(vino) //agrego el producto al array
        productosDelAlmacenamiento.push(vino) //agrego el producto al array con los datos del almacenamiento
        localStorage.setItem('productos',JSON.stringify(productosDelAlmacenamiento)) //guardo en el almacenamiento la modificacion de los productos
        //antes de guardar es necesario convertir el array a json con stringify
    }
    console.log(productosDelAlmacenamiento)
}

let botonSubir = document.getElementById('subir') //selecciono el boton
botonSubir.addEventListener('click', (event) => crearProducto(subirProducto(event))) //aplico funcion al evento
console.log(arrayDeVinos)
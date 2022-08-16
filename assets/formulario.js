//cargo una propiedad cuyo nombre es el name de cadaElemento
//a esa propiedad le asigno el valor de cadaElemento

function subirProducto(event) {
    event.preventDefault() //prevengo el evento
    let lista = document.querySelectorAll("input[type=text]") //selecciono todos los inputs
    let vinoDelFormulario = {} //defino el objeto vino
    lista.forEach(cadaElemento => vinoDelFormulario[cadaElemento.name] = cadaElemento.value)
    //por cada elemento de la lista, "cargo el objeto"
    //cada carga suma una propiedad al objeto con el nombre de cada elemento y el valor de cada elemento
    console.log(vinoDelFormulario)
    return vinoDelFormulario
}

//el objeto que retorna hay que pasarselo a la funcion que guarda el producto en el almacenamiento y lo renderiza
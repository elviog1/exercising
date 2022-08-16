function generarPlantilla(objeto) {
    let nombreCorrecto = objeto.nombre.charAt(0).toUpperCase()+objeto.nombre.slice(1).toLowerCase()
    let varietalCorrecto = objeto.varietal.charAt(0).toUpperCase()+objeto.varietal.slice(1).toLowerCase()
    //charAt(0): es un metodo de string que accede a la posicion que se pone entre comillas
    //la posicion es similar a la de los arrays: pos1 = indice0   pos2 = indice1
    //slice(1): es un metodo de string que accede a la palabra, la recorta en la posicion indicada
    //y devuelve TODAS las letras que le continuan
    return `
        <div id='${objeto.id}' class='datos'>
            <img class="foto" src='${objeto.foto}'>
            <p>Nombre: <b>${nombreCorrecto}</b></p>
            <p>Varietal: <b>${varietalCorrecto}</b></p>
            <p>Estacionamiento: <b>${objeto.estacionamiento}</b></p>
        </div>
    `
}

function imprimirEnHtml(idDelHtml,objeto) {
    document.querySelector(`#${idDelHtml}`).innerHTML += generarPlantilla(objeto) //forma optimizada
}
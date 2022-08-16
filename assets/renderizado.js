function renderizarTodos(idDelHtml,arrayDeProductos) {
    document.getElementById(`${idDelHtml}`).innerHTML = "" //al selector lo inicio vacío
    arrayDeProductos.forEach(cadaElemento => imprimirEnHtml(idDelHtml,cadaElemento)) //luego le renderizo todos los productos
}

function renderizarMayores(idDelHtml,arrayDeProductos) {
    let arrayFiltrado = arrayDeProductos.filter(cadaElemento => cadaElemento.estacionamiento>2010)
    renderizarTodos(idDelHtml,arrayFiltrado) //llamo a la funcion anterior, porque tengo que imprimir un array
}
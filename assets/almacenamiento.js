let productosDelAlmacenamiento = [] //defino los productos
if (localStorage.getItem('productos')) { //si existe el almacenamiento
    productosDelAlmacenamiento = JSON.parse(localStorage.getItem('productos')) //lo cargo
    //busco la clave con getItem
    //una vez que la encuentra: transformo el json en objeto/array
}
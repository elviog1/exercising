let cantidad = -1


while (cantidad<0 || isNaN(cantidad)) {
    cantidad = parseInt(prompt('Ingrese la cantidad de vinos a subir:'))
    console.log(cantidad)
}

let arrayDeVinos = []
if (cantidad>0) {
    for (let i=1; i<=cantidad; i++) { 
        let nombre = ""
        while (nombre.length<4) {
            nombre = prompt('Ingrese el nombre del vino '+i+':')
           
        }
        let varietal = ""
        while (varietal.length<4) {
            varietal = prompt('Ingrese el varietal del vino '+nombre+':')
            
        }
        let foto = ""
        while (foto.length<10) {
            foto = prompt('Ingrese la foto del vino '+nombre+' y varietal '+varietal+':')
          
        }
        let año = ""
        while (isNaN(año) || año<1900) {
            año = parseInt(prompt('Ingrese la fecha de estacionamiento del vino '+nombre+' y varietal '+varietal+':'))
    
        }
        let vino = {
            nombre: nombre,
            varietal: varietal,
            foto: foto,
            estacionamiento: año
        }

        vino.id = parseInt(Math.random()*1000000)
        arrayDeVinos.push(vino)
    
        function crearVino(claseHTML,vino){
            let html = document.querySelector(`.${claseHTML}`)
            html.innerHTML += `
                                <div class="carta">
                                    <h3>${vino.nombre}</h3>
                                    <h3>${vino.foto}</h3>
                                    <h3>${vino.varietal}</h3>
                                    <h3>${vino.estacionamiento}</h3>
                                </div>
            `;
        } // function crearVino

        // crearVino("container-html",vino)

        function crearMultiplesVinos(claseHTML,arrayVinos){
            arrayVinos.map(vino => crearVino(claseHTML,vino))
        }
        crearMultiplesVinos("container-html",arrayDeVinos)

    } // for de cantidad
} // if de cantidad
console.log(arrayDeVinos)
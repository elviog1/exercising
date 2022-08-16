let cantidad = -1

let productoss = []
if(localStorage.getItem('productos')){
    productoss = JSON.parse(localStorage.getItem('productos'))
}

console.log(productoss)
// function localStoragee(){
//     arrayDeVinos = JSON.parse(localStorage.getItem("vinos"))
// }

// localStoragee()


let arrayDeVinos = []
function crearContadorDeVinos(){
    while (cantidad<0 || isNaN(cantidad)) {
        cantidad = parseInt(prompt('Ingrese la cantidad de vinos a subir:'))
        console.log(cantidad)
    }
    if (cantidad>0) {
        validacionDeVinos()
    }
    crearMultiplesVinos("container-html",productoss)
}
crearContadorDeVinos()

function validacionDeVinos(){
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
            productoss.push(vino)
            localStorage.setItem("productos",JSON.stringify(productoss))
            console.log(productoss)
        } // for de cantidad
} // fin de funcion validacionDeVinos

function crearVino(claseHTML,vino){
    let html = document.querySelector(`.${claseHTML}`)
    html.innerHTML += `
                        <div class="carta">
                            <h5>${vino.nombre}</h5>
                            <img src="${vino.foto}" alt="${vino.nombre}" class="fotoCard">
                            <h5>${vino.varietal}</h5>
                            <h5>${vino.estacionamiento}</h5>
                        </div>
    `;

} // function crearVino


function crearMultiplesVinos(claseHTML,arrayVinos){
    arrayVinos.forEach(vino => crearVino(claseHTML,vino))
}
// crearMultiplesVinos("container-html",arrayDeVinos)


function crearMultiplesVinosFor(claseHTML,arrayVinos){
    for(let i =0 ;i<arrayVinos.length; i++){
        crearVino(claseHTML,arrayVinos[i])
    }
}
// crearMultiplesVinosFor("container-html",arrayDeVinos)

function crearMultiplesVinosForIN(claseHTML,arrayVinos){
    for(vino in arrayVinos){
        crearVino(claseHTML,arrayVinos[vino])
    }
}

// crearMultiplesVinosForIN("container-html",arrayDeVinos)

//////////// mismas funciones pero con estacionamiento mayor a 2010


function crearMultiplesVinosEstacionamiento(claseHTML,arrayDeVinos){
    let vinosConEstacionamiento = arrayDeVinos.filter(vino => { vino.estacionamiento > 2010})
    crearMultiplesVinos(claseHTML,vinosConEstacionamiento)
}

crearMultiplesVinosEstacionamiento("container-html",arrayDeVinos)



// LOCALSTORE
// function meterENelLocal(){
    
//     console.log(arrayDeVinos)
//     localStorage.setItem("vinos",JSON.stringify(arrayDeVinos))
// }

// meterENelLocal()
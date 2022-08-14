const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '741af78cb0mshf465b0455eafc7fp1341b4jsnb39c36de646e',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
};

fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards', options)
    .then(response => response.json())
    .then(response => mostrar(response))
    .catch(err => console.error(err));
    //isNaN: is not a number - no es un numero
    
    let card = document.querySelector(".container-html")
    function mostrar(data){
        let api = data.Naxxramas
        
        console.log(api)
    
       let cantidad = -1

       while(cantidad<0 || isNaN(cantidad)){
           cantidad = parseInt(prompt("cuantos queres?"))
       }

       let nombre =""
       while(nombre.length<4){
           nombre = prompt("nombre del personaje")
       }

       let foto = ""
       while(foto.length<10){
           foto = prompt("ingrese link de imagen de " + nombre)
       }

       let tipo =""
       while(tipo.length < 3){
           tipo = prompt("ingrese el tipo de carta que es " + nombre)
       }

       let health= 30
       while(health>10  || isNaN(health)){
           health = parseInt(prompt("cuanta vida (health) tiene " + nombre))
       }

       let personaje ={
           nombre:nombre,
           tipo: tipo,
           foto:foto,
           health:health
       }
       

       personaje.id =Math.floor(Math.random()*10000)

       let mazo = [personaje]
       mazo.push(personaje)
       console.log(mazo)
       api.push(personaje)
       console.log(api)

       function crearCarta(data){
           card.innerHTML += `
           <h5> ${data.nombre}</h5>
           <h5> ${data.tipo}</h5>
           <h5> ${data.foto}</h5>
           <h5> ${data.health}</h5>
           `
       }
       crearCarta(personaje)
   }
       
      
      


   


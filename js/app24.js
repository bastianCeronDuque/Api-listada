"use strict"
//capturo el boton
let boton = document.getElementById("boton");
let contenedor = document.getElementById("contenedor");
let posts = null;
boton.addEventListener("click",function(){
    //La API Fetch proporciona una interfaz JavaScript para acceder
    // y manipular partes del canal HTTP, tales como peticiones y 
    //respuestas. También provee un método global fetch() que proporciona una forma fácil y 
    //lógica de obtener recursos de forma asíncrona por la red.

     fetch('https://ghibliapi.herokuapp.com/films')
     //then accede a la promesa
     .then(data => data.json())
     .then(data => {
         posts = data;
         //funcion 
         mostrarDatos(posts);
     })
});

function mostrarDatos(posts) {
    posts.map( (post,i)=> {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');
        titulo.innerHTML = (i + 1)+ " . " + post.title;
        contenido.innerHTML = post.body;
        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    }  );
    
};

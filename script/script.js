const rev = document.getElementById('leerUsuario');
const contenedor = document.getElementById('contenedor');
let posts = null;

rev.addEventListener("click", () => {
    fetch("https://reqres.in/api/users?delay=3")
    .then(data => data.json())
    .then(respo => {
        console.log(respo);
        posts = respo.data;
        mostrarDatos(posts);
    })
});

const mostrarDatos = (posts => {
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);


    })
});

/* function solicitarUser(){
    fetch("https://reqres.in/api/users?delay=3")
    .then(response => response.json())
    .then(conver => {
        console.log(conver);
        /* Esto muestra en consola cada user */
        /* const encon = conver.data.forEach(p => {
            console.log(p);
            //us1.value = encon.id;
            
            return 
        }); 
    })
}
solicitarUser(); */
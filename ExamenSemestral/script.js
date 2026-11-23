const formularioPublicacion = document.getElementById("formulario-publicacion");
const textoPublicacion = document.getElementById("texto-publicacion");
const muroPublicaciones = document.getElementById("muro-publicaciones");

function activarPublicacion(publicacion) {
    const botonLike = publicacion.querySelector(".boton-like");
    const botonComentarios = publicacion.querySelector(".boton-comentarios");
    let cantidadLikes = Number(botonLike.dataset.likes);
    let cantidadComentarios = Number(botonComentarios.dataset.comentarios);
    let dioLike = false;

    botonLike.addEventListener("click", function() {
        if (dioLike) {
            cantidadLikes--;
            dioLike = false;
        } else {
            cantidadLikes++;
            dioLike = true;
        }

        botonLike.textContent = "👍 " + cantidadLikes + (cantidadLikes === 1 ? " Like" : " Likes");
        botonLike.classList.toggle("like-activo");
        botonLike.setAttribute("aria-pressed", String(dioLike));
    });

    botonComentarios.addEventListener("click", function() {
        let seccionComentarios = publicacion.querySelector(".seccion-comentarios");

        if (seccionComentarios) {
            seccionComentarios.hidden = !seccionComentarios.hidden;
            return;
        }

        seccionComentarios = document.createElement("section");
        seccionComentarios.className = "seccion-comentarios";
        seccionComentarios.innerHTML = `
            <h4>Comentarios</h4>
            <ul class="lista-comentarios"></ul>
            <form class="formulario-comentario">
                <input type="text" aria-label="Escribe un comentario" placeholder="Escribe un comentario...">
                <button type="submit">Comentar</button>
            </form>
        `;

        publicacion.appendChild(seccionComentarios);

        const formularioComentario = seccionComentarios.querySelector(".formulario-comentario");
        const entradaComentario = formularioComentario.querySelector("input");
        const listaComentarios = seccionComentarios.querySelector(".lista-comentarios");

        formularioComentario.addEventListener("submit", function(event) {
            event.preventDefault();
            const comentario = entradaComentario.value.trim();

            if (comentario === "") {
                alert("Escribe un comentario antes de enviarlo.");
                return;
            }

            const nuevoComentario = document.createElement("li");
            const autor = document.createElement("strong");
            autor.textContent = "Nombre de Usuario: ";
            nuevoComentario.appendChild(autor);
            nuevoComentario.appendChild(document.createTextNode(comentario));
            listaComentarios.appendChild(nuevoComentario);

            cantidadComentarios++;
            botonComentarios.textContent = "💬 " + cantidadComentarios + (cantidadComentarios === 1 ? " Comentario" : " Comentarios");
            entradaComentario.value = "";
        });
    });
}

formularioPublicacion.addEventListener("submit", function(event) {
    event.preventDefault();
    const contenido = textoPublicacion.value.trim();

    if (contenido === "") {
        alert("Escribe algo antes de compartir una publicación.");
        return;
    }

    const nuevaPublicacion = document.createElement("article");
    nuevaPublicacion.className = "publicacion";
    nuevaPublicacion.innerHTML = `
        <header>
            <div>
                <img src="avatar.svg" alt="Avatar de usuario">
                <div>
                    <h3>Nombre de Usuario <span>Estudiante</span></h3>
                    <time>Ahora mismo</time>
                </div>
            </div>
            <button type="button" aria-label="Opciones">•••</button>
        </header>
        <div>
            <h4>Nueva publicación</h4>
            <p></p>
        </div>
        <hr>
        <footer>
            <button type="button" class="boton-like" data-likes="0" aria-pressed="false">👍 0 Likes</button>
            <button type="button" class="boton-comentarios" data-comentarios="0">💬 0 Comentarios</button>
            <button type="button">🔗 Compartir</button>
        </footer>
    `;

    nuevaPublicacion.querySelector("p").textContent = contenido;
    const primeraPublicacion = muroPublicaciones.querySelector(".publicacion");
    muroPublicaciones.insertBefore(nuevaPublicacion, primeraPublicacion);
    activarPublicacion(nuevaPublicacion);
    textoPublicacion.value = "";
});

document.querySelectorAll(".pagina-inicio .contenido > .publicacion").forEach(function(publicacion) {
    activarPublicacion(publicacion);
});

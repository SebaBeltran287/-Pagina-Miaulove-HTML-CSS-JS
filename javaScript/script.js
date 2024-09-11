// Funcionalidad 1: 
//Selecciono el botón de cerrar sesión y añado un evento que muestra una alerta al hacer click
const botonCerrarSesion = document.querySelector('.botonCerrarSesion');

botonCerrarSesion.addEventListener('click', function() {
    alert('Sesión cerrada correctamente');
});


// Funcionalidad 2:
// Selecciono todos los botones de las categorías
const botonesCategorias = document.querySelectorAll('.botonCategoria');

// Evento de escucha para cuando este cargado el html se ejecuta la función
document.addEventListener('DOMContentLoaded', function () {
    // Recorre todos los botones de categoría y les asigna un evento para alternar la clase 'botonSeleccionado' al hacer click
    botonesCategorias.forEach(boton => {
        boton.addEventListener('click', function () {
            this.classList.toggle('botonSeleccionado');
        });
    });
});

//Funcionalidad 3:
// Otro evento de escucha para cuando este cargado el html ejecuta la función, selecciono todos los botones de like
document.addEventListener('DOMContentLoaded', function () {
    let botonesLike = document.querySelectorAll('.botonLike');
    // Añado un evento de click a cada botón de categoría para alternar la clase 'seleccionado'
    for (let i = 0; i < botonesCategorias.length; i++) {
        botonesCategorias[i].addEventListener('click', function() {
            this.classList.toggle('seleccionado');
        });
    }
    
    // Añado un evento de click a cada botón de like para incrementar el contador de likes del que se haga click
    for (let r = 0; r < botonesLike.length; r++) {
        botonesLike[r].addEventListener('click', function() {
            let contadorLikes = this.closest('.seccionLike').querySelector('span'); // Subo un nivel para el contador más cercano
            let cantidadLikes = Number(contadorLikes.textContent); // Convierto el contador de likes en numero
            contadorLikes.textContent = cantidadLikes + 1; // Incremento el contador de likes sumandole 1
        });
    }
});

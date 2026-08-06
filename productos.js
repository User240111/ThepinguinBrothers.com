// ==============================
// SLIDER DE PRODUCTOS
// ==============================

document.querySelectorAll(".producto-imagen").forEach(slider => {

    const imagenes = slider.querySelectorAll("img");
    const puntos = slider.querySelectorAll(".indicadores span");

    const btnIzquierda = slider.querySelector(".izquierda");
    const btnDerecha = slider.querySelector(".derecha");

    let indice = 0;

    function mostrarImagen(i){

        imagenes.forEach(img => img.classList.remove("activa"));
        puntos.forEach(p => p.classList.remove("activo"));

        imagenes[i].classList.add("activa");
        puntos[i].classList.add("activo");

    }

    btnDerecha.addEventListener("click", () => {

        indice++;

        if(indice >= imagenes.length){

            indice = 0;

        }

        mostrarImagen(indice);

    });

    btnIzquierda.addEventListener("click", () => {

        indice--;

        if(indice < 0){

            indice = imagenes.length - 1;

        }

        mostrarImagen(indice);

    });

});
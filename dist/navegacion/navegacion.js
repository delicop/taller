export function cambiarSeccion(nombreSeccion) {
    //ocultar todas las secciones
    const secciones = document.querySelectorAll(".seccion");
    secciones.forEach((seccion) => {
        seccion.style.display = "none";
    });
    //mostrar la seccion indicada
    const seccionMostrar = document.getElementById(`seccion-${nombreSeccion}`);
    if (seccionMostrar) {
        seccionMostrar.style.display = "block";
    }
    // actualizar el nav-item activo
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("data-seccion") === nombreSeccion) {
            item.classList.add("active");
        }
    });
}
export function inicializarNavegacion() {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const seccion = item.getAttribute("data-seccion");
            if (seccion) {
                cambiarSeccion(seccion);
            }
        });
    });
}
//# sourceMappingURL=navegacion.js.map
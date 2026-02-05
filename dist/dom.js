// Obtener elemento del DOM de forma segura
export function obtenerInput(id) {
    return document.getElementById(id);
}
export function obtenerElemento(id) {
    return document.getElementById(id);
}
export function obtenerTabla(id) {
    return document.getElementById(id);
}
// Crear una celda de tabla
export function crearCelda(contenido, dataValor) {
    const celda = document.createElement("td");
    celda.textContent = contenido;
    if (dataValor !== undefined) {
        celda.setAttribute("data-valor", dataValor.toString());
    }
    return celda;
}
// Crear botón de eliminar
export function crearBotonEliminar(fila, callback) {
    const boton = document.createElement("button");
    boton.textContent = "Eliminar";
    boton.addEventListener("click", () => {
        fila.remove();
        callback();
    });
    return boton;
}
// Limpiar campos de entrada
export function limpiarCampos(inputItem, inputCantidad, inputValor) {
    inputItem.value = "";
    inputCantidad.value = "1";
    inputValor.value = "";
}
//# sourceMappingURL=dom.js.map
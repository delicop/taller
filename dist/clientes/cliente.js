import { obtenerTabla, obtenerInput } from "../shared/dom.js";
function mostrarModal() {
    const modal = document.getElementById("modalCliente");
    modal.classList.add("mostrar");
}
function ocultarModal() {
    const modal = document.getElementById("modalCliente");
    modal.classList.remove("mostrar");
}
export function agregarcliente(tablaCliente, inputNombreCliente, inputNumeroCliente, inputCedulaCliente) {
    const nombreCliente = inputNombreCliente.value;
    const numeroCliente = inputNumeroCliente.value;
    const cedulaCliente = inputCedulaCliente.value;
    const nuevaFila = tablaCliente.insertRow();
    const celdaNombre = nuevaFila.insertCell();
    const celdaNumero = nuevaFila.insertCell();
    const celdaCedula = nuevaFila.insertCell();
    celdaNombre.textContent = nombreCliente;
    celdaNumero.textContent = numeroCliente;
    celdaCedula.textContent = cedulaCliente;
}
export function inicializarCliente() {
    const btnAgregar = document.getElementById("agregarCliente");
    const tablaClientes = obtenerTabla("tablaClientes");
    const inputNombreCliente = obtenerInput("inputNombreCliente");
    const inputNumeroCliente = obtenerInput("inputTelefonoCliente");
    const inputCedulaCliente = obtenerInput("inputCedulaCliente");
    btnAgregar === null || btnAgregar === void 0 ? void 0 : btnAgregar.addEventListener("click", () => {
        mostrarModal();
    });
    const btnGuardar = document.getElementById("guardarCliente");
    btnGuardar === null || btnGuardar === void 0 ? void 0 : btnGuardar.addEventListener("click", () => {
        agregarcliente(tablaClientes, inputNombreCliente, inputNumeroCliente, inputCedulaCliente);
        ocultarModal();
    });
    const btnCancelar = document.getElementById("cancelarCliente");
    btnCancelar === null || btnCancelar === void 0 ? void 0 : btnCancelar.addEventListener("click", () => {
        ocultarModal();
    });
}
//# sourceMappingURL=cliente.js.map
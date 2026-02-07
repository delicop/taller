import {
  calcularValorTotal,
  formatearPesos,
  calcularTotales,
} from "../shared/calculos.js";
import {
  obtenerInput,
  obtenerTabla,
  crearCelda,
  crearBotonEliminar,
  limpiarCampos,
} from "../shared/dom.js";

function mostrarModal() {
  const modal = document.getElementById("modal")!;
  modal.classList.add("mostrar");
}

function ocultarModal() {
  const modal = document.getElementById("modal")!;
  modal.classList.remove("mostrar");
}

// Función principal para agregar un item
export function agregarItem(
  tablaServicios: HTMLTableSectionElement,
  inputItem: HTMLInputElement,
  inputCantidad: HTMLInputElement,
  inputVenta: HTMLInputElement,
  inputExento: HTMLInputElement,
): void {
  const valorTotal = calcularValorTotal(
    Number(inputCantidad.value),
    Number(inputVenta.value),
  );
  const esExento = inputExento.checked;

  const celdaItem = crearCelda(inputItem.value);
  const celdaCantidad = crearCelda(inputCantidad.value);
  const celdaValorUnitario = crearCelda(
    formatearPesos(Number(inputVenta.value)),
  );
  const celdaValorTotal = crearCelda(formatearPesos(valorTotal), valorTotal);
  const celdaExento = crearCelda(esExento ? "Si" : "No");

  const nuevaFila = document.createElement("tr");
  const celdaAccion = document.createElement("td");
  const btnEliminar = crearBotonEliminar(nuevaFila, () =>
    calcularTotales(tablaServicios),
  );
  celdaAccion.appendChild(btnEliminar);

  nuevaFila.appendChild(celdaItem);
  nuevaFila.appendChild(celdaCantidad);
  nuevaFila.appendChild(celdaValorUnitario);
  nuevaFila.appendChild(celdaValorTotal);
  nuevaFila.appendChild(celdaExento);
  nuevaFila.appendChild(celdaAccion);
  nuevaFila.setAttribute("data-exento", esExento.toString());

  tablaServicios.appendChild(nuevaFila);
  calcularTotales(tablaServicios);
  limpiarCampos(inputItem, inputCantidad, inputVenta);
}

export function inicializarEventos(): void {
  const btnAgregar = document.getElementById("agregarServicio");
  const tablaServicios = obtenerTabla("tablaServicios");
  const inputItem = obtenerInput("inputItem");
  const inputCantidad = obtenerInput("inputCantidad");
  const inputVenta = obtenerInput("inputVenta");
  const inputExento = obtenerInput("inputExento");

  // Botón "Agregar Servicio" → solo muestra modal
  btnAgregar?.addEventListener("click", () => {
    mostrarModal();
  });

  // Botón "Guardar" → agrega item y cierra modal
  const btnGuardar = document.getElementById("guardarItem");
  btnGuardar?.addEventListener("click", () => {
    agregarItem(
      tablaServicios,
      inputItem,
      inputCantidad,
      inputVenta,
      inputExento,
    );
    ocultarModal();
  });

  // Botón "Cancelar" → solo cierra modal
  const btnCancelar = document.getElementById("cancelarModal");
  btnCancelar?.addEventListener("click", () => {
    ocultarModal();
  });
}

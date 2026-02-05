// Obtener elemento del DOM de forma segura
export function obtenerInput(id: string): HTMLInputElement {
  return document.getElementById(id) as HTMLInputElement;
}

export function obtenerElemento(id: string): HTMLElement {
  return document.getElementById(id) as HTMLElement;
}

export function obtenerTabla(id: string): HTMLTableSectionElement {
  return document.getElementById(id) as HTMLTableSectionElement;
}

// Crear una celda de tabla
export function crearCelda(
  contenido: string,
  dataValor?: number,
): HTMLTableCellElement {
  const celda = document.createElement("td");
  celda.textContent = contenido;
  if (dataValor !== undefined) {
    celda.setAttribute("data-valor", dataValor.toString());
  }
  return celda;
}

// Crear botón de eliminar
export function crearBotonEliminar(
  fila: HTMLTableRowElement,
  callback: () => void,
): HTMLButtonElement {
  const boton = document.createElement("button");
  boton.textContent = "Eliminar";
  boton.addEventListener("click", () => {
    fila.remove();
    callback();
  });
  return boton;
}

// Limpiar campos de entrada
export function limpiarCampos(
  inputItem: HTMLInputElement,
  inputCantidad: HTMLInputElement,
  inputValor: HTMLInputElement,
): void {
  inputItem.value = "";
  inputCantidad.value = "1";
  inputValor.value = "";
}

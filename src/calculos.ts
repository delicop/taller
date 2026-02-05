// Calcular valor total de un servicio
export function calcularValorTotal(
  cantidad: number,
  valorUnitario: number,
): number {
  return cantidad * valorUnitario;
}

// Formatear número a pesos colombianos
export function formatearPesos(valor: number): string {
  return "$" + valor.toLocaleString("es-CO");
}

// Calcular IVA
function calcularIVA(subtotal: number, porcentaje: number): number {
  const iva = subtotal * (porcentaje / 100);
  return iva;
}

// Calcular totales de toda la factura
export function calcularTotales(tablaServicios: HTMLTableSectionElement): void {
  const filas = tablaServicios.getElementsByTagName("tr");
  let subtotalGravado = 0;
  let subtotalExento = 0;

  for (let i = 0; i < filas.length; i++) {
    const fila = filas[i];
    if (fila) {
      const celdaTotal = fila.getElementsByTagName("td")[3];
      if (celdaTotal) {
        const valor = celdaTotal.getAttribute("data-valor");
        const esExento = fila.getAttribute("data-exento") === "true";

        if (valor) {
          if (esExento) {
            subtotalExento += Number(valor);
          } else {
            subtotalGravado += Number(valor);
          }
        }
      }
    }
  }

  // Obtener porcentaje de IVA del input
  const inputIVA = document.getElementById("inputIva") as HTMLInputElement;
  const porcentajeIVA = Number(inputIVA.value);

  // Calcular totales
  const subtotalTotal = subtotalGravado + subtotalExento;
  const iva = calcularIVA(subtotalGravado, porcentajeIVA);
  const total = subtotalTotal + iva;

  // Mostrar
  document.getElementById("subtotal")!.textContent =
    formatearPesos(subtotalTotal);
  document.getElementById("valorIva")!.textContent = formatearPesos(iva);
  document.getElementById("total")!.textContent = formatearPesos(total);
}

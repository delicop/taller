import { inicializarFacturacion } from "./facturacion/facturacion.js";
import { cambiarSeccion } from "./navegacion/navegacion.js";
import { inicializarNavegacion } from "./navegacion/navegacion.js";
import { inicializarCliente } from "./clientes/cliente.js";

// Inicializar la aplicación
inicializarNavegacion();
inicializarCliente();
inicializarFacturacion();

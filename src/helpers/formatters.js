// ============================================================
// src/helpers/formatters.js
// Funciones utilitarias de formato para la app de ventas.
// Exporta: formatMoneda, formatFecha, getColorEstado
// No depende de ningún otro archivo del proyecto.
// ============================================================

/**
 * Convierte un número a formato de moneda colombiana.
 * @param {number} numero - Ej: 2800000
 * @returns {string} - Ej: "$2.800.000"
 */
export function formatMoneda(numero) {
  return '$' + numero.toLocaleString('es-CO');
}

/**
 * Convierte una fecha en formato DD/MM/YYYY a texto legible.
 * @param {string} dateString - Ej: "05/01/2025"
 * @returns {string} - Ej: "5 de enero de 2025"
 */
export function formatFecha(dateString) {
  const [dia, mes, anio] = dateString.split('/');
  const fecha = new Date(anio, mes - 1, dia);
  return fecha.toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Retorna un color hex según el estado de una venta.
 * @param {string} estado - 'Completada' | 'Pendiente' | 'Cancelada'
 * @returns {string} - color en formato hex
 */
export function getColorEstado(estado) {
  const colores = {
    Completada: '#27ae60',
    Pendiente:  '#f39c12',
    Cancelada:  '#e74c3c',
  };
  return colores[estado] || '#95a5a6';
}

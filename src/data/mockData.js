// ============================================================
// src/data/mockData.js
// Datos de ejemplo para la app de ventas.
// Exporta: VENTAS (array de 8 ventas) y CLIENTES (array de 6)
// No depende de ningún otro archivo del proyecto.
// ============================================================

export const CLIENTES = [
  { id: 'c1', nombre: 'Carlos Ramírez',  telefono: '3101234567', ciudad: 'Bogotá',     correo: 'carlos@email.com',  comprasTotal: 3 },
  { id: 'c2', nombre: 'Laura Gómez',     telefono: '3209876543', ciudad: 'Medellín',   correo: 'laura@email.com',   comprasTotal: 2 },
  { id: 'c3', nombre: 'Pedro Martínez',  telefono: '3157654321', ciudad: 'Cali',       correo: 'pedro@email.com',   comprasTotal: 1 },
  { id: 'c4', nombre: 'Ana Torres',      telefono: '3004567890', ciudad: 'Barranquilla',correo: 'ana@email.com',    comprasTotal: 1 },
  { id: 'c5', nombre: 'Luis Herrera',    telefono: '3186543210', ciudad: 'Pasto',      correo: 'luis@email.com',    comprasTotal: 1 },
  { id: 'c6', nombre: 'Sofía Vargas',    telefono: '3123456789', ciudad: 'Cartagena',  correo: 'sofia@email.com',   comprasTotal: 1 },
];

export const VENTAS = [
  { id: 'v1', fecha: '05/01/2025', producto: 'Laptop HP 14"',      cantidad: 1, precioUnitario: 2800000, total: 2800000, cliente: 'Carlos Ramírez',  estado: 'Completada' },
  { id: 'v2', fecha: '12/01/2025', producto: 'Mouse inalámbrico',  cantidad: 3, precioUnitario: 85000,   total: 255000,  cliente: 'Laura Gómez',     estado: 'Completada' },
  { id: 'v3', fecha: '18/01/2025', producto: 'Teclado mecánico',   cantidad: 2, precioUnitario: 320000,  total: 640000,  cliente: 'Carlos Ramírez',  estado: 'Pendiente'  },
  { id: 'v4', fecha: '25/01/2025', producto: 'Monitor 24"',        cantidad: 1, precioUnitario: 1500000, total: 1500000, cliente: 'Pedro Martínez',  estado: 'Completada' },
  { id: 'v5', fecha: '02/02/2025', producto: 'Audífonos Bluetooth',cantidad: 2, precioUnitario: 210000,  total: 420000,  cliente: 'Ana Torres',      estado: 'Cancelada'  },
  { id: 'v6', fecha: '10/02/2025', producto: 'Webcam HD',          cantidad: 1, precioUnitario: 180000,  total: 180000,  cliente: 'Carlos Ramírez',  estado: 'Completada' },
  { id: 'v7', fecha: '17/02/2025', producto: 'SSD 1TB',            cantidad: 1, precioUnitario: 350000,  total: 350000,  cliente: 'Luis Herrera',    estado: 'Pendiente'  },
  { id: 'v8', fecha: '24/02/2025', producto: 'Silla ergonómica',   cantidad: 1, precioUnitario: 980000,  total: 980000,  cliente: 'Sofía Vargas',    estado: 'Completada' },
];

# 📱 VentasApp — Documentación

**Versión:** 1.0.0 | **Estado:** En desarrollo | **Última actualización:** 24 de mayo de 2026

---

## 1️⃣ Descripción general

**VentasApp** es una aplicación móvil de gestión de ventas construida con **React Native** y **Expo SDK 56**. La aplicación permite a usuarios autenticados monitorear ventas en tiempo real, gestionar clientes y visualizar indicadores clave de desempeño (KPI) desde una interfaz intuitiva.

### Características principales
- 🔐 **Autenticación** con credenciales admin
- 📊 **Dashboard** con indicadores clave (en desarrollo)
- 📋 **Gestión de Ventas** con estados (Completada, Pendiente, Cancelada)
- 👥 **Directorio de Clientes** por ciudad
- 💾 **Datos mock** para demostración
- 🎨 **Interfaz multi-tab** con navegación intuitiva

### Stack tecnológico
- **Framework:** React Native 0.85.3
- **Build Tool:** Expo CLI 56.0.4
- **UI Components:** React Navigation (Stack + Bottom Tabs)
- **Estado:** Context API (AuthContext)
- **Node:** v22.22.3

---

## 2️⃣ Requisitos previos

| Herramienta  | Versión mínima | Comando de verificación                       |
| ------------ | -------------- | --------------------------------------------- |
| **Node.js**  | v22.22.3       | `node --version`                              |
| **npm**      | v10.0.0+       | `npm --version`                               |
| **nvm**      | v0.39.0+       | `nvm --version` *(opcional pero recomendado)* |
| **Expo CLI** | v56.0.0+       | `npx expo --version`                          |
| **Git**      | v2.0.0+        | `git --version`                               |

### Verificación rápida del entorno
```bash
nvm use 22          # Activar Node v22
node --version      # Verificar Node
npm --version       # Verificar npm
npx expo --version  # Verificar Expo
```

---

## 3️⃣ Instalación y ejecución

### Paso 1: Clonar o navegar al proyecto
```bash
cd ~/Escritorio/android/miapp-6e
```

### Paso 2: Asegurar versión de Node correcta
```bash
nvm use 22.22.3
```

### Paso 3: Instalar dependencias (si es nuevo proyecto)
```bash
npm install
```

### Paso 4: Instalar paquetes específicos de Expo
```bash
npx expo install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack react-native-screens react-native-safe-area-context
```

### Paso 5: Iniciar servidor Expo
```bash
# Para web (recomendado para desarrollo inicial)
npx expo start --web

# O para dispositivo Android/iOS
npx expo start --android
npx expo start --ios

# O para Expo Go (escanear QR)
npx expo start
```

### Acceso inicial
- **URL web:** `http://localhost:19000`
- **Credenciales:** `admin` / `admin`

---

## 4️⃣ Credenciales de acceso

| Rol               | Usuario | Contraseña |
| ----------------- | ------- | ---------- |
| **Administrador** | `admin` | `admin`    |

> ⚠️ **Nota:** Estos son datos de demostración. En producción, implementar autenticación segura con tokens JWT.

---

## 5️⃣ Estructura del proyecto

```
miapp-6e/
├── App.js                          ← Punto de entrada principal, Stack Navigator
├── index.js                        ← Registro del componente raíz
├── app.json                        ← Configuración de Expo (nombre, versión, plugins)
├── package.json                    ← Dependencias npm
├── package-lock.json               ← Lock file de dependencias
├── assets/                         ← Imágenes, fuentes y recursos
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── docs/                           ← Documentación del proyecto
│   └── DOCUMENTACION.md            ← Este archivo
└── src/
    ├── screens/                    ← Pantallas de navegación
    │   └── LoginScreen.js          ← Pantalla de autenticación (admin/admin)
    │
    ├── components/                 ← Componentes reutilizables
    │   ├── KPICard.js              ← Tarjeta de indicador clave (KPI)
    │   ├── VentaItem.js            ← Fila individual de venta en lista
    │   └── ClienteItem.js          ← Fila individual de cliente en lista
    │
    ├── context/                    ← Gestión de estado global
    │   └── AuthContext.js          ← AuthProvider y useAuth hook para autenticación
    │
    ├── data/                       ← Datos mock y fixtures
    │   └── mockData.js             ← Arrays VENTAS (8) y CLIENTES (6)
    │
    └── helpers/                    ← Funciones utilitarias
        └── formatters.js           ← formatMoneda, formatFecha, getColorEstado

```

---

## 6️⃣ Flujo de navegación

```
┌─────────────────────────────────────────────┐
│                                             │
│         INICIO: LoginScreen                 │
│         (usuario no autenticado)            │
│                                             │
└──────────────────┬──────────────────────────┘
                   │
           ┌───────▼───────┐
           │  Credenciales │
           │    válidas?   │
           └───────┬───────┘
                   │
        ┌──────────┴──────────┐
        │ NO                  │ SÍ
        ▼                     ▼
   Mostrar error      ┌──────────────────────────┐
                      │                          │
                      │  MainTabs               │
                      │  (Tab Navigation)       │
                      │                          │
                      ├── Dashboard             │
                      ├── Ventas                │
                      └── Clientes              │
                      │                          │
                      │  (Botón Logout)         │
                      └──────────────┬───────────┘
                                     │
                                     │ Logout
                                     ▼
                              LoginScreen
                              (regresa aquí)
```

---

## 7️⃣ Pantallas

| Pantalla            | Ruta de navegación | Descripción                                                             | Estado          |
| ------------------- | ------------------ | ----------------------------------------------------------------------- | --------------- |
| **LoginScreen**     | `Login`            | Formulario de autenticación con usuario y contraseña (admin/admin)      | ✅ Implementada  |
| **DashboardScreen** | `Dashboard` (tab)  | Muestra KPIs: total ventas, clientes activos, tasa de conversión        | 🔄 En desarrollo |
| **VentasScreen**    | `Ventas` (tab)     | Lista de todas las ventas con filtros por estado y búsqueda por cliente | 🔄 En desarrollo |
| **ClientesScreen**  | `Clientes` (tab)   | Directorio de clientes agrupado por ciudad con totales de compras       | 🔄 En desarrollo |

---

## 8️⃣ Componentes reutilizables

| Componente      | Props                                                             | Descripción                                                                         |
| --------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **KPICard**     | `title: string`, `value: string`, `icon: string`, `color: string` | Tarjeta de indicador clave con título, valor e icono. Usada en Dashboard.           |
| **VentaItem**   | `venta: object`, `onPress: function`                              | Fila de venta que muestra ID, cliente, estado con color, total y fecha formateada.  |
| **ClienteItem** | `cliente: object`, `onPress: function`                            | Fila de cliente que muestra nombre, ciudad, teléfono y total de compras formateado. |

### Ejemplo de uso
```jsx
// KPICard
<KPICard 
  title="Total Ventas" 
  value="$2.8M" 
  icon="chart-line" 
  color="#3498db"
/>

// VentaItem
<VentaItem 
  venta={ventaObj} 
  onPress={() => navigate('DetalleVenta', {id: ventaObj.id})}
/>

// ClienteItem
<ClienteItem 
  cliente={clienteObj} 
  onPress={() => navigate('DetalleCliente', {id: clienteObj.id})}
/>
```

---

## 9️⃣ Contexto de autenticación (AuthContext)

### Estado manejado
```javascript
{
  isAuthenticated: boolean,   // ¿Usuario logueado?
  user: object,               // {email, role}
  loading: boolean            // En proceso de autenticación?
}
```

### Funciones expuestas
- **`login(usuario, password)`** → Autentica usuario, retorna `true` si es válido
- **`logout()`** → Cierra sesión y limpia el contexto
- **`useAuth()`** → Hook para consumir contexto en componentes

### Cómo se consume
```javascript
import { useAuth } from '../context/AuthContext';

export default function MyScreen() {
  const { isAuthenticated, user, login, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <LoginScreen />;
  }
  
  return (
    <View>
      <Text>Bienvenido, {user.email}</Text>
      <Button onPress={logout} title="Cerrar sesión" />
    </View>
  );
}
```

### Estructura de AuthContext.js
```javascript
// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (usuario, password) => {
    setLoading(true);
    // Validar credenciales (admin/admin)
    if (usuario === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      setUser({ email: 'admin@ventasapp.com', role: 'admin' });
      setLoading(false);
      return true;
    }
    setLoading(false);
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
```

---

## 🔟 Datos mock

### Estructura de CLIENTES (6 registros)

```javascript
{
  id: number,              // Identificador único (1-6)
  nombre: string,          // Nombre completo del cliente
  telefono: string,        // Número de contacto (formato: +57 XXX XXXX XXX)
  ciudad: string,          // Una de: Bogotá, Medellín, Cali, Barranquilla, Pasto, Cartagena
  correo: string,          // Email de contacto
  comprasTotal: number     // Monto total de compras en pesos ($)
}
```

**Distribución por ciudad:**
| Ciudad       | Cantidad |
| ------------ | -------- |
| Bogotá       | 2        |
| Medellín     | 1        |
| Cali         | 1        |
| Barranquilla | 1        |
| Pasto        | 0        |
| Cartagena    | 1        |

### Estructura de VENTAS (8 registros)

```javascript
{
  id: number,              // Identificador único (1001-1008)
  fecha: string,           // Formato ISO: "YYYY-MM-DD"
  producto: string,        // Nombre del producto vendido
  cantidad: number,        // Unidades vendidas
  precioUnitario: number,  // Precio por unidad en pesos ($)
  total: number,           // Cantidad × Precio Unitario
  cliente: string,         // Nombre del cliente
  estado: string           // Una de: "Completada", "Pendiente", "Cancelada"
}
```

**Distribución de estados:**
| Estado       | Cantidad | Porcentaje |
| ------------ | -------- | ---------- |
| ✅ Completada | 5        | 62.5%      |
| ⏳ Pendiente  | 2        | 25.0%      |
| ❌ Cancelada  | 1        | 12.5%      |

### Ejemplo de datos
```javascript
// src/data/mockData.js

export const CLIENTES = [
  {
    id: 1,
    nombre: "Carlos Sánchez",
    telefono: "+57 301 234 5678",
    ciudad: "Bogotá",
    correo: "carlos@email.com",
    comprasTotal: 15000000
  },
  // ... 5 registros más
];

export const VENTAS = [
  {
    id: 1001,
    fecha: "2026-01-05",
    producto: "Laptop XPS 15",
    cantidad: 2,
    precioUnitario: 1400000,
    total: 2800000,
    cliente: "Carlos Sánchez",
    estado: "Completada"
  },
  // ... 7 registros más
];
```

---

## 1️⃣1️⃣ Funciones utilitarias

### formatters.js

| Función            | Parámetro                  | Retorna                     | Ejemplo                                              |
| ------------------ | -------------------------- | --------------------------- | ---------------------------------------------------- |
| **formatMoneda**   | `numero: number`           | `string` con formato es-CO  | `formatMoneda(2800000)` → `"$2.800.000"`             |
| **formatFecha**    | `dateString: string` (ISO) | `string` en formato legible | `formatFecha("2026-01-05")` → `"5 de enero de 2026"` |
| **getColorEstado** | `estado: string`           | `string` (hex color)        | `getColorEstado("Completada")` → `"#27ae60"` (verde) |

### Detalles de getColorEstado

```javascript
getColorEstado(estado) => {
  "Completada"  → "#27ae60" (🟢 Verde)
  "Pendiente"   → "#f39c12" (🟡 Naranja)
  "Cancelada"   → "#e74c3c" (🔴 Rojo)
  (default)     → "#95a5a6" (⚪ Gris)
}
```

### Código de formatters.js
```javascript
// src/helpers/formatters.js

export function formatMoneda(numero) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(numero);
}

export function formatFecha(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-CO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function getColorEstado(estado) {
  const colores = {
    'Completada': '#27ae60',   // Verde
    'Pendiente': '#f39c12',    // Naranja
    'Cancelada': '#e74c3c',    // Rojo
  };
  return colores[estado] || '#95a5a6';  // Gris por defecto
}
```

---

## 1️⃣2️⃣ Checklist de tareas completadas

### Backend & Configuración
- [x] Configuración del entorno (Node v22.22.3, Expo SDK 56)
- [x] Instalación de npm y dependencias base
- [x] Instalación de dependencias de navegación (React Navigation)
- [x] Configuración de app.json y index.js

### Estructura de código
- [x] Crear estructura de carpetas src/ (screens, components, context, data, helpers)
- [x] Crear mockData.js con arrays VENTAS (8) y CLIENTES (6)
- [x] Crear formatters.js con 3 funciones utilitarias
- [x] Crear AuthContext.js con login/logout/useAuth hook

### Componentes
- [x] KPICard.js (tarjeta de indicador)
- [x] VentaItem.js (fila de venta)
- [x] ClienteItem.js (fila de cliente)

### Pantallas
- [x] LoginScreen.js funcional (validación admin/admin)
- [x] Integración de AuthContext en LoginScreen

### Navegación
- [x] App.js con NavigationContainer
- [x] Stack Navigator para Login
- [x] AuthProvider wrapper
- [ ] Tab Navigator (MainTabs) — En desarrollo

### Pantallas faltantes
- [ ] DashboardScreen (KPIs, gráficos)
- [ ] VentasScreen (lista con filtros)
- [ ] ClientesScreen (directorio por ciudad)

### Documentación
- [x] Documentación guardada en docs/DOCUMENTACION.md
- [ ] README.md en rama

---

## 1️⃣3️⃣ Comandos útiles de desarrollo

| Comando                              | Descripción                                         |
| ------------------------------------ | --------------------------------------------------- |
| **`nvm use 22`**                     | Activar Node.js v22 en la sesión actual             |
| **`npm install`**                    | Instalar todas las dependencias de package.json     |
| **`npx expo start`**                 | Iniciar servidor Expo (escanear QR en Expo Go)      |
| **`npx expo start --web`**           | Iniciar servidor Expo para navegador web            |
| **`npx expo start --android`**       | Compilar y ejecutar en emulador/dispositivo Android |
| **`npx expo start --ios`**           | Compilar y ejecutar en simulador/dispositivo iOS    |
| **`npx expo doctor`**                | Verificar problemas en el entorno Expo              |
| **`npx expo install`**               | Instalar/actualizar paquetes específicos de Expo    |
| **`find src/ -type f -name "*.js"`** | Listar todos los archivos .js en src/               |
| **`npm list`**                       | Ver árbol de dependencias instaladas                |
| **`npm outdated`**                   | Verificar qué paquetes tienen actualizaciones       |
| **`git status`**                     | Ver cambios sin commitear                           |
| **`git log --oneline`**              | Ver historial de commits                            |

### Verificación rápida del proyecto
```bash
# Verificar versión de Node
node --version    # Debe ser v22.22.3

# Verificar estructura de carpetas
tree -L 3 src/    # O: find src/ -type d

# Verificar archivos principales
ls -la App.js package.json app.json

# Verificar dependencias críticas instaladas
npm list @react-navigation/native react-native react-dom
```

---

## 1️⃣4️⃣ Posibles mejoras futuras

### Fase 2 (Corto plazo - 1-2 sprints)
1. **Dashboard interactivo**
   - Gráficos de ventas por período (línea, barras)
   - KPIs dinámicos calculados desde datos reales
   - Filtros por fecha y cliente

2. **Búsqueda y filtros avanzados**
   - Buscador global de clientes y ventas
   - Filtros por estado, ciudad, rango de fecha
   - Ordenamiento por columnas (ascendente/descendente)

3. **Detalles y edición**
   - Pantalla de detalle de venta (full-screen modal)
   - Pantalla de perfil de cliente con historial
   - Edición de estado de venta (UI form)

### Fase 3 (Mediano plazo - 2-4 sprints)
4. **Sincronización con backend**
   - Reemplazar mockData con API REST/GraphQL
   - Implementar Redux o Context mejorado para estado global
   - Caché offline con AsyncStorage/SQLite

5. **Autenticación segura**
   - Autenticación real con JWT o OAuth2
   - Renovación de tokens automática
   - Biométrica (Face ID / Touch ID)
   - Recuperación de contraseña

### Fase 4 (Largo plazo - 4+ sprints)
6. **Características avanzadas**
   - Push notifications para nuevas ventas
   - Exportación de reportes (PDF/Excel)
   - Sincronización bidireccional con servidor
   - Soporte offline completo con queues

7. **Internacionalización (i18n)**
   - Soporte multi-idioma (es, en, pt)
   - Soporte para múltiples monedas
   - Localización de fechas y formatos

8. **Mejoras de UX/UI**
   - Temas claro/oscuro (dark mode)
   - Animaciones y transiciones suaves
   - Accesibilidad (WCAG 2.1 AA)
   - Responsive design para tablets

9. **Testing y calidad**
   - Unit tests (Jest) para componentes y funciones
   - Integration tests (Detox) para flujos E2E
   - Coverage mínimo del 80%
   - CI/CD con GitHub Actions o similar

10. **Monitoreo y analytics**
    - Seguimiento de eventos de usuario (Segment, Firebase)
    - Crash reporting (Sentry)
    - Performance monitoring (New Relic)
    - Analytics dashboard

---

## 📝 Notas importantes

### Configuración de desarrollo actual
- ✅ Expo v56.0.4 con soporte para React 19.x
- ✅ React Native 0.85.3 (última versión compatible)
- ✅ Hot reload habilitado en todos los modos
- ⚠️ mockData es hardcodeado — preparar para API en Fase 3

### Convenciones de código
- **Nombres de archivos:** CamelCase (ej: `LoginScreen.js`)
- **Constantes:** UPPER_SNAKE_CASE (ej: `CLIENTES`, `VENTAS`)
- **Funciones:** camelCase (ej: `formatMoneda`, `getColorEstado`)
- **Rutas de navegación:** PascalCase (ej: `'Login'`, `'Dashboard'`)

### Debugging
```bash
# Habilitar logs detallados
DEBUG=* npx expo start --web

# Conectar React DevTools
npx react-devtools
```

### Performance
- Usar `React.memo()` para componentes de lista (VentaItem, ClienteItem)
- Implementar `useMemo()` para cálculos de KPIs
- FlatList con `maxToRenderPerBatch={10}` para listas largas

---

**Documentación generada el 24 de mayo de 2026**

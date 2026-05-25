// ============================================================
// App.js
// Punto de entrada de la app.
// Define el Stack Navigator raíz con 2 rutas:
//   - Login     → pantalla de autenticación
//   - MainTabs  → navegador de pestañas (post-login)
// Envuelve todo en AuthProvider para compartir el estado global
// ============================================================

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Contexto global de autenticación
import { AuthProvider } from './src/context/AuthContext';

// Pantallas
import LoginScreen from './src/screens/LoginScreen';
import MainTabs from './src/navigation/MainTabs';

// Crea la instancia del Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // AuthProvider envuelve todo para que cualquier pantalla
    // pueda acceder a usuario, login y logout con useAuth()
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          // La primera pantalla en el stack es el Login
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          {/* Pantalla de login — sin header */}
          <Stack.Screen name="Login" component={LoginScreen} />

          {/* Tab Navigator — contiene las 3 vistas principales */}
          {/* headerShown: false aquí porque cada Tab maneja su propio header */}
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
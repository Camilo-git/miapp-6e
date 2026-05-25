// ============================================================
// src/navigation/MainTabs.js
// Navegador de pestañas inferior con 3 vistas principales.
// Se muestra después de autenticarse con el Login.
// Depende de: react-navigation/bottom-tabs y las 3 pantallas
// ============================================================

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from 'react-native';

// Importamos las 3 pantallas principales
import DashboardScreen from '../screens/DashboardScreen';
import VentasScreen from '../screens/VentasScreen';
import ClientesScreen from '../screens/ClientesScreen';

// Importamos el hook para acceder a logout()
import { useAuth } from '../context/AuthContext';

// Crea la instancia del navegador de tabs
const Tab = createBottomTabNavigator();

export default function MainTabs({ navigation }) {
    // Traemos logout del contexto global
    const { logout } = useAuth();

    // Función que cierra sesión y regresa al Login
    function handleLogout() {
        logout();
        // replace evita que el usuario pueda volver a los tabs
        // presionando el botón atrás del sistema
        navigation.replace('Login');
    }

    return (
        <Tab.Navigator
            screenOptions={{
                // Color de la pestaña activa
                tabBarActiveTintColor: '#2980b9',
                // Color de las pestañas inactivas
                tabBarInactiveTintColor: '#95a5a6',
                // Fondo blanco en la barra inferior
                tabBarStyle: { backgroundColor: '#fff' },
                // Botón "Salir" en la esquina superior derecha
                // headerRight lo coloca en el header de cada pantalla
                headerRight: () => (
                    <TouchableOpacity
                        onPress={handleLogout}
                        style={{ marginRight: 16 }}
                    >
                        <Text style={{ color: '#e74c3c', fontWeight: 'bold' }}>
                            Salir
                        </Text>
                    </TouchableOpacity>
                ),
            }}
        >
            {/* Pestaña 1: Dashboard */}
            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    title: 'Dashboard',      // texto en la tab bar
                    tabBarLabel: 'Inicio',   // etiqueta debajo del ícono
                    tabBarIcon: ({ color }) => (
                        <Text style={{ fontSize: 20, color }}>📊</Text>
                    ),
                }}
            />

            {/* Pestaña 2: Ventas */}
            <Tab.Screen
                name="Ventas"
                component={VentasScreen}
                options={{
                    title: 'Ventas',
                    tabBarLabel: 'Ventas',
                    tabBarIcon: ({ color }) => (
                        <Text style={{ fontSize: 20, color }}>💰</Text>
                    ),
                }}
            />

            {/* Pestaña 3: Clientes */}
            <Tab.Screen
                name="Clientes"
                component={ClientesScreen}
                options={{
                    title: 'Clientes',
                    tabBarLabel: 'Clientes',
                    tabBarIcon: ({ color }) => (
                        <Text style={{ fontSize: 20, color }}>👥</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
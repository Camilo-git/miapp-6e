// ============================================================
// src/screens/ClientesScreen.js
// Vista de directorio de clientes con búsqueda y detalle.
// Depende de: mockData, formatters, ClienteItem
// ============================================================

import { useState, useMemo } from 'react';
import {
    View, Text, TextInput,
    FlatList, StyleSheet, Alert,
} from 'react-native';

// Datos y utilidades
import { CLIENTES, VENTAS } from '../data/mockData';
import { formatMoneda } from '../helpers/formatters';
import ClienteItem from '../components/ClienteItem';

export default function ClientesScreen() {
    // ── Estado local ──────────────────────────────────────────
    // Guarda el texto que el usuario escribe en el buscador
    const [busqueda, setBusqueda] = useState('');

    // ── Filtrado reactivo ─────────────────────────────────────
    // useMemo evita recalcular en cada render — solo corre
    // cuando cambia el valor de "busqueda"
    const clientesFiltrados = useMemo(() => {
        return CLIENTES.filter(c => {
            // Convierte todo a minúsculas para que la búsqueda
            // no distinga entre "Bogotá" y "bogotá"
            const texto = busqueda.toLowerCase();
            return (
                c.nombre.toLowerCase().includes(texto) ||
                c.ciudad.toLowerCase().includes(texto)
            );
        });
    }, [busqueda]);

    // ── Detalle del cliente ───────────────────────────────────
    // Calcula cuántas ventas tiene ese cliente y el total
    // acumulado, cruzando con el array VENTAS
    function mostrarDetalle(cliente) {
        // Filtra VENTAS buscando las que pertenecen a este cliente
        const ventasCliente = VENTAS.filter(v => v.cliente === cliente.nombre);

        // Suma todos los totales de sus ventas
        const totalAcumulado = ventasCliente.reduce(
            (suma, v) => suma + v.total, 0
        );

        // Muestra un Alert con toda la información
        Alert.alert(
            cliente.nombre,
            `📍 Ciudad:    ${cliente.ciudad}\n` +
            `📞 Teléfono:  ${cliente.telefono}\n` +
            `✉️  Correo:    ${cliente.correo}\n` +
            `🛒 Compras:   ${ventasCliente.length} venta(s)\n` +
            `💰 Acumulado: ${formatMoneda(totalAcumulado)}`,
        );
    }

    // ── Render ────────────────────────────────────────────────
    return (
        <View style={styles.fondo}>

            {/* Encabezado con contador dinámico de clientes */}
            <View style={styles.header}>
                <Text style={styles.titulo}>Clientes</Text>
                {/* Muestra cuántos resultados hay después de filtrar */}
                <Text style={styles.subtitulo}>
                    {clientesFiltrados.length} cliente(s) registrado(s)
                </Text>
            </View>

            {/* Buscador — filtra por nombre o ciudad en tiempo real */}
            <TextInput
                style={styles.buscador}
                placeholder="Buscar por nombre o ciudad..."
                placeholderTextColor="#bdc3c7"
                value={busqueda}
                // Cada letra que escribe el usuario actualiza "busqueda"
                // lo que dispara useMemo y recalcula clientesFiltrados
                onChangeText={setBusqueda}
            />

            {/* Lista de clientes con FlatList */}
            <FlatList
                data={clientesFiltrados}
                // keyExtractor le dice a React qué campo usar como ID único
                // para optimizar los re-renders de la lista
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    // Al tocar un cliente se llama mostrarDetalle con ese objeto
                    <ClienteItem
                        cliente={item}
                        onPress={() => mostrarDetalle(item)}
                    />
                )}
                // Se muestra solo si el array filtrado está vacío
                ListEmptyComponent={
                    <Text style={styles.vacio}>No se encontraron clientes.</Text>
                }
            />
        </View>
    );
}

// ── Estilos ───────────────────────────────────────────────────
const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    },
    header: {
        backgroundColor: '#8e44ad', // morado para distinguir de las otras vistas
        padding: 24,
        paddingTop: 48,
        marginBottom: 12,
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitulo: {
        fontSize: 13,
        color: '#ffffffcc', // blanco con 80% de opacidad
        marginTop: 2,
    },
    buscador: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginBottom: 12,
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        color: '#2c3e50',
        elevation: 1,
    },
    vacio: {
        textAlign: 'center',
        marginTop: 40,
        color: '#95a5a6',
        fontSize: 15,
    },
});
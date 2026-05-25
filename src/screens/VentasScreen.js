import { useState, useMemo } from 'react';
import {
    View, Text, TextInput, TouchableOpacity,
    FlatList, StyleSheet, Alert,
} from 'react-native';
import { VENTAS } from '../data/mockData';
import { formatMoneda, formatFecha, getColorEstado } from '../helpers/formatters';
import VentaItem from '../components/VentaItem';

const FILTROS = ['Todas', 'Completada', 'Pendiente', 'Cancelada'];

export default function VentasScreen() {
    const [busqueda, setBusqueda] = useState('');
    const [filtroActivo, setFiltro] = useState('Todas');

    // Filtra por búsqueda y estado — se recalcula solo cuando cambia busqueda o filtroActivo
    const ventasFiltradas = useMemo(() => {
        return VENTAS.filter(v => {
            const coincideBusqueda =
                v.producto.toLowerCase().includes(busqueda.toLowerCase()) ||
                v.cliente.toLowerCase().includes(busqueda.toLowerCase());
            const coincideFiltro =
                filtroActivo === 'Todas' || v.estado === filtroActivo;
            return coincideBusqueda && coincideFiltro;
        });
    }, [busqueda, filtroActivo]);

    function mostrarDetalle(venta) {
        Alert.alert(
            venta.producto,
            `Cliente:    ${venta.cliente}\n` +
            `Fecha:      ${formatFecha(venta.fecha)}\n` +
            `Cantidad:   ${venta.cantidad} unidad(es)\n` +
            `P. unitario: ${formatMoneda(venta.precioUnitario)}\n` +
            `Total:      ${formatMoneda(venta.total)}\n` +
            `Estado:     ${venta.estado}`,
        );
    }

    return (
        <View style={styles.fondo}>
            {/* Encabezado */}
            <View style={styles.header}>
                <Text style={styles.titulo}>Ventas</Text>
                <Text style={styles.subtitulo}>{ventasFiltradas.length} registros</Text>
            </View>

            {/* Barra de búsqueda */}
            <TextInput
                style={styles.buscador}
                placeholder="Buscar por producto o cliente..."
                placeholderTextColor="#bdc3c7"
                value={busqueda}
                onChangeText={setBusqueda}
            />

            {/* Filtros de estado */}
            <View style={styles.filtros}>
                {FILTROS.map(f => (
                    <TouchableOpacity
                        key={f}
                        style={[styles.filtroBtn, filtroActivo === f && styles.filtroBtnActivo]}
                        onPress={() => setFiltro(f)}
                    >
                        <Text style={[styles.filtroTexto, filtroActivo === f && styles.filtroTextoActivo]}>
                            {f}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Lista de ventas */}
            <FlatList
                data={ventasFiltradas}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <VentaItem venta={item} onPress={() => mostrarDetalle(item)} />
                )}
                ListEmptyComponent={
                    <Text style={styles.vacio}>No se encontraron ventas.</Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    fondo: { flex: 1, backgroundColor: '#f0f4f8' },
    header: {
        backgroundColor: '#27ae60',
        padding: 24,
        paddingTop: 48,
        marginBottom: 12,
    },
    titulo: { fontSize: 26, fontWeight: 'bold', color: '#fff' },
    subtitulo: { fontSize: 13, color: '#ffffffcc', marginTop: 2 },
    buscador: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginBottom: 10,
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        color: '#2c3e50',
        elevation: 1,
    },
    filtros: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginBottom: 10,
        gap: 8,
    },
    filtroBtn: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: '#dfe6e9',
    },
    filtroBtnActivo: {
        backgroundColor: '#27ae60',
    },
    filtroTexto: {
        fontSize: 12,
        color: '#7f8c8d',
        fontWeight: '600',
    },
    filtroTextoActivo: {
        color: '#fff',
    },
    vacio: {
        textAlign: 'center',
        marginTop: 40,
        color: '#95a5a6',
        fontSize: 15,
    },
});
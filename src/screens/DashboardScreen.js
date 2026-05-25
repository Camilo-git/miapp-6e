import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { VENTAS } from '../data/mockData';
import { formatMoneda } from '../helpers/formatters';
import KPICard from '../components/KPICard';
import VentaItem from '../components/VentaItem';

export default function DashboardScreen() {
    const { usuario } = useAuth();

    // Cálculo de KPIs — solo se recalcula si VENTAS cambia
    const kpis = useMemo(() => {
        const completadas = VENTAS.filter(v => v.estado === 'Completada');
        const pendientes = VENTAS.filter(v => v.estado === 'Pendiente');
        const totalVendido = completadas.reduce((sum, v) => sum + v.total, 0);
        return {
            totalVendido,
            cantCompletadas: completadas.length,
            cantPendientes: pendientes.length,
        };
    }, []);

    // Últimas 3 ventas para mostrar en el resumen
    const ultimasVentas = VENTAS.slice(-3).reverse();

    return (
        <ScrollView style={styles.fondo}>
            {/* Encabezado */}
            <View style={styles.header}>
                <Text style={styles.bienvenida}>Bienvenido 👋</Text>
                <Text style={styles.usuario}>{usuario}</Text>
                <Text style={styles.subtitulo}>Resumen de ventas</Text>
            </View>

            {/* KPIs en dos filas */}
            <View style={styles.fila}>
                <KPICard
                    titulo="Total vendido"
                    valor={formatMoneda(kpis.totalVendido)}
                    icono="💰"
                    colorFondo="#2980b9"
                />
                <KPICard
                    titulo="Completadas"
                    valor={kpis.cantCompletadas}
                    icono="✅"
                    colorFondo="#27ae60"
                />
            </View>
            <View style={styles.fila}>
                <KPICard
                    titulo="Pendientes"
                    valor={kpis.cantPendientes}
                    icono="⏳"
                    colorFondo="#f39c12"
                />
                <KPICard
                    titulo="Clientes"
                    valor={6}
                    icono="👥"
                    colorFondo="#8e44ad"
                />
            </View>

            {/* Últimas ventas */}
            <Text style={styles.seccion}>Últimas ventas</Text>
            {ultimasVentas.map(venta => (
                <VentaItem key={venta.id} venta={venta} onPress={() => { }} />
            ))}

            <View style={styles.espacioFinal} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    fondo: { flex: 1, backgroundColor: '#f0f4f8' },
    header: {
        backgroundColor: '#2980b9',
        padding: 24,
        paddingTop: 48,
        marginBottom: 16,
    },
    bienvenida: { fontSize: 14, color: '#ffffffaa' },
    usuario: { fontSize: 26, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
    subtitulo: { fontSize: 13, color: '#ffffffcc' },
    fila: { flexDirection: 'row', paddingHorizontal: 10, marginBottom: 4 },
    seccion: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#2c3e50',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    espacioFinal: { height: 24 },
});
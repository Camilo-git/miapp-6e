// ============================================================
// src/components/VentaItem.js
// Fila de una venta en la lista de la pantalla Ventas.
// Props: venta (objeto), onPress (función)
// Depende de: react-native, helpers/formatters
// ============================================================

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { formatMoneda, getColorEstado } from '../helpers/formatters';

export default function VentaItem({ venta, onPress }) {
  const colorEstado = getColorEstado(venta.estado);

  return (
    <TouchableOpacity style={styles.fila} onPress={onPress}>
      <View style={styles.info}>
        <Text style={styles.producto}>{venta.producto}</Text>
        <Text style={styles.cliente}>{venta.cliente}</Text>
        <Text style={styles.fecha}>{venta.fecha}</Text>
      </View>
      <View style={styles.derecha}>
        <Text style={styles.total}>{formatMoneda(venta.total)}</Text>
        <View style={[styles.badge, { backgroundColor: colorEstado }]}>
          <Text style={styles.badgeTexto}>{venta.estado}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginHorizontal: 16,
    marginVertical: 5,
    elevation: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    marginRight: 10,
  },
  producto: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 3,
  },
  cliente: {
    fontSize: 13,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  fecha: {
    fontSize: 12,
    color: '#bdc3c7',
  },
  derecha: {
    alignItems: 'flex-end',
  },
  total: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 6,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },
  badgeTexto: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '600',
  },
});

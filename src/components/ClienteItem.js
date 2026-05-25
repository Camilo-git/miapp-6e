// ============================================================
// src/components/ClienteItem.js
// Fila de un cliente en la pantalla Clientes.
// Props: cliente (objeto), onPress (función)
// Depende de: react-native, helpers/formatters
// ============================================================

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { formatMoneda } from '../helpers/formatters';

export default function ClienteItem({ cliente, onPress }) {
  return (
    <TouchableOpacity style={styles.fila} onPress={onPress}>
      <View style={styles.avatar}>
        <Text style={styles.avatarLetra}>
          {cliente.nombre.charAt(0).toUpperCase()}
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.nombre}>{cliente.nombre}</Text>
        <Text style={styles.ciudad}>📍 {cliente.ciudad}</Text>
        <Text style={styles.telefono}>📞 {cliente.telefono}</Text>
      </View>
      <View style={styles.derecha}>
        <Text style={styles.comprasLabel}>compras</Text>
        <Text style={styles.comprasTotal}>{cliente.comprasTotal}</Text>
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
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2980b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarLetra: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  info: {
    flex: 1,
  },
  nombre: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 3,
  },
  ciudad: {
    fontSize: 13,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  telefono: {
    fontSize: 12,
    color: '#95a5a6',
  },
  derecha: {
    alignItems: 'center',
  },
  comprasLabel: {
    fontSize: 11,
    color: '#95a5a6',
  },
  comprasTotal: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2980b9',
  },
});

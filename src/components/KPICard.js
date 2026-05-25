// ============================================================
// src/components/KPICard.js
// Tarjeta de indicador clave (KPI) para el Dashboard.
// Props: titulo, valor, icono, colorFondo
// Depende de: react-native
// ============================================================

import { View, Text, StyleSheet } from 'react-native';

export default function KPICard({ titulo, valor, icono, colorFondo }) {
  return (
    <View style={[styles.card, { backgroundColor: colorFondo }]}>
      <Text style={styles.icono}>{icono}</Text>
      <Text style={styles.valor}>{valor}</Text>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 6,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    elevation: 2,
  },
  icono: {
    fontSize: 28,
    marginBottom: 6,
  },
  valor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  titulo: {
    fontSize: 12,
    color: '#ffffffcc',
    textAlign: 'center',
  },
});

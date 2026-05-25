import { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity,
    StyleSheet, Alert, KeyboardAvoidingView, Platform,
} from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    function handleLogin() {
        if (!usuario.trim() || !password.trim()) {
            Alert.alert('Error', 'Por favor ingresa usuario y contraseña.');
            return;
        }
        const exitoso = login(usuario.trim(), password.trim());
        if (exitoso) {
            navigation.replace('MainTabs');
        } else {
            Alert.alert('Error', 'Usuario o contraseña incorrectos.');
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.fondo}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.contenedor}>
                <Text style={styles.logo}>📊</Text>
                <Text style={styles.titulo}>VentasApp</Text>
                <Text style={styles.subtitulo}>Sistema de Gestión de Ventas</Text>
                <View style={styles.card}>
                    <Text style={styles.label}>Usuario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa tu usuario"
                        placeholderTextColor="#bdc3c7"
                        value={usuario}
                        onChangeText={setUsuario}
                        autoCapitalize="none"
                    />
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa tu contraseña"
                        placeholderTextColor="#bdc3c7"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.boton} onPress={handleLogin}>
                        <Text style={styles.botonTexto}>Ingresar</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.hint}>usuario: admin | contraseña: admin</Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    fondo: { flex: 1, backgroundColor: '#f0f4f8' },
    contenedor: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
    logo: { fontSize: 64, marginBottom: 8 },
    titulo: { fontSize: 32, fontWeight: 'bold', color: '#2c3e50', marginBottom: 4 },
    subtitulo: { fontSize: 14, color: '#7f8c8d', marginBottom: 32 },
    card: { width: '100%', backgroundColor: '#fff', borderRadius: 16, padding: 24, elevation: 4, marginBottom: 16 },
    label: { fontSize: 14, fontWeight: '600', color: '#2c3e50', marginBottom: 6 },
    input: { borderWidth: 1, borderColor: '#dfe6e9', borderRadius: 8, padding: 12, fontSize: 15, color: '#2c3e50', marginBottom: 16 },
    boton: { backgroundColor: '#2980b9', borderRadius: 8, padding: 14, alignItems: 'center', marginTop: 4 },
    botonTexto: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    hint: { fontSize: 12, color: '#95a5a6' },
});
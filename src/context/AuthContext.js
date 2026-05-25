import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    const [autenticado, setAutenticado] = useState(false);

    function login(user, pass) {
        if (user === 'admin' && pass === 'admin') {
            setUsuario(user);
            setAutenticado(true);
            return true;
        }
        return false;
    }

    function logout() {
        setUsuario(null);
        setAutenticado(false);
    }

    return (
        <AuthContext.Provider value={{ usuario, autenticado, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
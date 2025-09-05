import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { login } from "../backend"; // Esto es para manejar la autenticación del usuario

export default function LoginScreen({ navigation }) {
  // Estados para capturar el email y la contraseña del usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Esto sirve para iniciar sesión con Firebase
  const handleLogin = async () => {
    // Validar que los campos no estén vacíos
    if (!email.trim() || !password.trim()) {
      alert("Por favor completa todos los campos.");
      return;
    }
  
    try {
      // Intentar iniciar sesión
      await login(email, password);
      
      // Si tiene éxito, navegar a Home
      navigation.replace("Home");
    } catch (error) {
      // Si falla, mostrar mensaje de error
      console.error("Error al iniciar sesión:", error);
      alert("Correo o contraseña incorrectos. Intenta de nuevo.");
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌸 Inicio de Sesión 🌸</Text>
      
      {/* Inputs para correo y contraseña */}
      <TextInput placeholder="Correo" value={email} onChangeText={setEmail} style={styles.input}/>
      <TextInput placeholder="Contraseña" value={password} secureTextEntry onChangeText={setPassword} style={styles.input}/>
      
      {/* Botón para iniciar sesión */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>💖 Iniciar Sesión</Text>
      </TouchableOpacity>

      {/* Botón para ir a la pantalla de registro */}
      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate("Register")}>
        <Text style={styles.linkText}>Crear cuenta nueva</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#FFF0F5" }, // Contenedor principal
  input: { borderWidth: 1, padding: 12, marginBottom: 12, borderRadius: 10, backgroundColor: "#FFF", borderColor: "#FFB6C1" }, // Estilo de los inputs
  title: { fontSize: 26, textAlign: "center", marginBottom: 20, color: "#FF69B4", fontWeight: "bold" }, // Estilo del título
  button: {
    backgroundColor: "#FFB6C1",
    padding: 14,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  linkButton: {
    marginTop: 15,
  },
  linkText: {
    textAlign: "center",
    color: "#FF69B4",
    textDecorationLine: "underline"
  }
});

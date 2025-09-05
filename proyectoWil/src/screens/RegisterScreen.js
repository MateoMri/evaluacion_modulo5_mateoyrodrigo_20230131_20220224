import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { register } from "../backend"; // Función para registrar usuario en Firebase

export default function RegisterScreen({ navigation }) {
  // Esto es para manejar los estados de los inputs
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [titulo, setTitulo] = useState("");
  const [fechaGraduacion, setFechaGraduacion] = useState("");

  // Esto sirve para manejar el registro del usuario
  const handleRegister = async () => {
    await register(email, password, nombre, titulo, fechaGraduacion);
    navigation.replace("Home"); // Redirige a Home después de registrarse
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎀 Registro 🎀</Text>
      {/* Inputs para capturar información del usuario */}
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={styles.input}/>
      <TextInput placeholder="Correo" value={email} onChangeText={setEmail} style={styles.input}/>
      <TextInput placeholder="Contraseña" value={password} secureTextEntry onChangeText={setPassword} style={styles.input}/>
      <TextInput placeholder="Título universitario" value={titulo} onChangeText={setTitulo} style={styles.input}/>
      <TextInput placeholder="Año de graduación" value={fechaGraduacion} onChangeText={setFechaGraduacion} style={styles.input}/>
      
      {/* Botones para registrar o ir a login */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>✨ Registrar ✨</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#FFF0F5" },
  input: {
    borderWidth: 1,
    borderColor: "#FFB6C1",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: "#FFFFFF"
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 25,
    color: "#FF69B4",
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#FFB6C1",
    padding: 14,
    borderRadius: 10,
    marginTop: 10
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

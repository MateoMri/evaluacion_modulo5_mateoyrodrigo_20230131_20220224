import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
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
      <Text style={styles.title}>Registro</Text>
      {/* Inputs para capturar información del usuario */}
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={styles.input}/>
      <TextInput placeholder="Correo" value={email} onChangeText={setEmail} style={styles.input}/>
      <TextInput placeholder="Contraseña" value={password} secureTextEntry onChangeText={setPassword} style={styles.input}/>
      <TextInput placeholder="Título universitario" value={titulo} onChangeText={setTitulo} style={styles.input}/>
      <TextInput placeholder="Año de graduación" value={fechaGraduacion} onChangeText={setFechaGraduacion} style={styles.input}/>
      
      {/* Botones para registrar o ir a login */}
      <Button title="Registrar" onPress={handleRegister}/>
      <Button title="Ya tienes cuenta? Inicia sesión" onPress={() => navigation.navigate("Login")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  title: { fontSize: 22, textAlign: "center", marginBottom: 20 },
});

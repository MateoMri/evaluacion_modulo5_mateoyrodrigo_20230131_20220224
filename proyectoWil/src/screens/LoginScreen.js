import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { login } from "../backend"; // Esto es para manejar la autenticación del usuario

export default function LoginScreen({ navigation }) {
  // Estados para capturar el email y la contraseña del usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Esto sirve para iniciar sesión con Firebase
  const handleLogin = async () => {
    await login(email, password);
    navigation.replace("Home"); // Redirige a Home tras iniciar sesión correctamente
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      
      {/* Inputs para correo y contraseña */}
      <TextInput placeholder="Correo" value={email} onChangeText={setEmail} style={styles.input}/>
      <TextInput placeholder="Contraseña" value={password} secureTextEntry onChangeText={setPassword} style={styles.input}/>
      
      {/* Botón para iniciar sesión */}
      <Button title="Iniciar Sesión" onPress={handleLogin}/>
      
      {/* Botón para ir a la pantalla de registro */}
      <Button title="Crear cuenta" onPress={() => navigation.navigate("Register")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" }, // Contenedor principal
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }, // Estilo de los inputs
  title: { fontSize: 22, textAlign: "center", marginBottom: 20 }, // Estilo del título
});

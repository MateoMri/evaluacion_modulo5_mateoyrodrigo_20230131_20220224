import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { updateUser } from "../backend"; // Función para actualizar datos del usuario en Firebase

export default function EditUserScreen({ navigation }) {
  // Estados para capturar la información editable
  const [nombre, setNombre] = useState("");
  const [titulo, setTitulo] = useState("");
  const [fechaGraduacion, setFechaGraduacion] = useState("");

  // Esto sirve para actualizar la información del usuario
  const handleUpdate = async () => {
    await updateUser(nombre, titulo, fechaGraduacion); // Llama a la función de backend
    navigation.goBack(); // Regresa a la pantalla anterior (Home)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Información</Text>
      
      {/* Inputs para modificar los datos */}
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={styles.input}/>
      <TextInput placeholder="Título universitario" value={titulo} onChangeText={setTitulo} style={styles.input}/>
      <TextInput placeholder="Año de graduación" value={fechaGraduacion} onChangeText={setFechaGraduacion} style={styles.input}/>
      
      {/* Botón para guardar los cambios */}
      <Button title="Guardar cambios" onPress={handleUpdate}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" }, // Contenedor centrado con padding
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }, // Estilo de los inputs
  title: { fontSize: 22, textAlign: "center", marginBottom: 20 }, // Estilo del título
});

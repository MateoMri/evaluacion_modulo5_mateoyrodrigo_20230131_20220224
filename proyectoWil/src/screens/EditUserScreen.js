import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { updateUser, getUserData } from "../backend"; // Función para actualizar datos del usuario en Firebase

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
  useEffect(() => {
    const cargarDatosUsuario = async () => {
      try {
        const usuario = await getUserData();
        setNombre(usuario.nombre || "");
        setTitulo(usuario.titulo || "");
        setFechaGraduacion(usuario.fechaGraduacion || "");
      } catch (error) {
        console.error("Error al cargar los datos del usuario:", error);
      }
    };

    cargarDatosUsuario();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛠️ Editar Información 🛠️</Text>

      {/* Inputs para modificar los datos */}
      <Text style={styles.label}>Nombre completo</Text>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />

      <Text style={styles.label}>Título universitario</Text>
      <TextInput
        placeholder="Título universitario"
        value={titulo}
        onChangeText={setTitulo}
        style={styles.input}
      />

      <Text style={styles.label}>Año de graduación</Text>
      <TextInput
        placeholder="Año de graduación"
        value={fechaGraduacion}
        onChangeText={setFechaGraduacion}
        style={styles.input}
      />

      {/* Botón para guardar los cambios */}
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>💾 Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#FFF0F5",
  }, // Contenedor centrado con fondo kawaii
  input: {
    borderWidth: 1,
    borderColor: "#FFB6C1",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  }, // Estilo de los inputs
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    color: "#FF69B4",
    fontWeight: "bold",
  }, // Estilo del título
  button: {
    backgroundColor: "#FFB6C1",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  }, // Botón rosita
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  }, // Texto del botón
  label: {
  marginBottom: 4,
  marginTop: 10,
  fontWeight: "bold",
  color: "#FF69B4", // Un rosa kawaii para que combine con tu estilo
},

});

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { auth, db } from "../config/firebase"; // Firebase Auth y Firestore
import { doc, getDoc } from "firebase/firestore"; // Para obtener los datos del usuario
import { logout } from "../backend"; // Función para cerrar sesión

export default function HomeScreen({ navigation }) {
  // Estado para guardar el nombre del usuario
  const [nombre, setNombre] = useState("");

  // Esto sirve para obtener los datos del usuario al cargar la pantalla
  useEffect(() => {
    const fetchUser = async () => {
      const user = auth.currentUser; // Obtener usuario actual
      if (user) {
        const docRef = doc(db, "users", user.uid); // Referencia al documento del usuario
        const docSnap = await getDoc(docRef); // Obtener documento
        if (docSnap.exists()) {
          setNombre(docSnap.data().nombre); // Guardar nombre en estado
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌸 Bienvenido, {nombre}! 🌸</Text> {/* Mostrar nombre del usuario */}
      
      {/* Botón para ir a la pantalla de edición */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EditUser")}>
        <Text style={styles.buttonText}>📝 Editar Información</Text>
      </TouchableOpacity>

      {/* Botón para cerrar sesión */}
      <TouchableOpacity style={styles.button} onPress={async () => {
        await logout(); // Cerrar sesión en Firebase
        navigation.replace("Login"); // Redirigir a Login
      }}>
        <Text style={styles.buttonText}>🚪 Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF0F5" // Fondo suave y kawaii
  }, // Contenedor centrado
  title: {
    fontSize: 26,
    marginBottom: 30,
    color: "#FF69B4", // Color rosa fuerte
    fontWeight: "bold",
    textAlign: "center"
  }, // Estilo del título
  button: {
    backgroundColor: "#FFB6C1", // Rosa claro
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginVertical: 10,
    width: 220
  }, // Estilo del botón
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16
  } // Estilo del texto del botón
});

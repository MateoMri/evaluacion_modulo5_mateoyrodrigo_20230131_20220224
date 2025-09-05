import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
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
      <Text style={styles.title}>Bienvenido, {nombre}!</Text> {/* Mostrar nombre del usuario */}
      
      {/* Botón para ir a la pantalla de edición */}
      <Button title="Editar Información" onPress={() => navigation.navigate("EditUser")}/>
      
      {/* Botón para cerrar sesión */}
      <Button title="Cerrar Sesión" onPress={async () => {
        await logout(); // Cerrar sesión en Firebase
        navigation.replace("Login"); // Redirigir a Login
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }, // Contenedor centrado
  title: { fontSize: 24, marginBottom: 20 }, // Estilo del título
});

import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { auth } from "../config/firebase"; // Importa Firebase para verificar el usuario

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Esto es para verificar si hay un usuario logueado en Firebase
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home"); // Si hay usuario logueado, ir a Home
      } else {
        navigation.replace("Login"); // Si no hay usuario, ir a Login
      }
    });

    return unsubscribe; // Esto sirve para limpiar la suscripción al desmontar
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" /> {/* Esto es para mostrar un loader */}
      <Text style={styles.text}>Cargando...</Text> {/* Texto informativo mientras carga */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente
  },
  text: {
    marginTop: 10,
    fontSize: 18,
  },
});

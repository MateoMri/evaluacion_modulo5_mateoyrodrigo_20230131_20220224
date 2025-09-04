import { auth, db } from "./config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";

const register = async (email, password, nombre, titulo, fechaGraduacion) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      nombre: nombre,
      email: email,
      titulo: titulo,
      fechaGraduacion: fechaGraduacion,
      fechaRegistro: new Date(),
    });
    console.log("Usuario registrado exitosamente");
  } catch (error) {
    console.error("Error al registrar usuario: ", error.message);
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Sesion iniciada: ", userCredential);
  } catch (error) {
    console.error("Error al iniciar sesion: ", error.message);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log("Sesion cerrada");
  } catch (error) {
    console.error("Error al cerrar sesión: ", error.message);
  }
};

const updateUser = async (nombre, titulo, fechaGraduacion) => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No hay usuario autenticado");

    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, {
      nombre: nombre,
      titulo: titulo,
      fechaGraduacion: fechaGraduacion,
    });

    console.log("Usuario actualizado correctamente");
  } catch (error) {
    console.error("Error al actualizar usuario: ", error.message);
  }
};
export { register, login, logout, updateUser };

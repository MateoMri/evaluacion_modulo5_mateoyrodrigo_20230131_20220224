import { auth, db } from "./config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";

const register = async (email, password, nombre, titulo, fechaGraduacion) => {
  try {
    //funcion del SDK de Firebase para crear usuarios
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    //toma el usuario que se acaba de registrar
    const user = userCredential.user;
    //agrega los datos adicionales al usuario
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
    //Funcion del SDK de Firebase para iniciar sesión
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Sesion iniciada: ")
  } catch (error) {
    console.error("Error al iniciar sesion: ", error.message);
    throw error;
  }
};

const logout = async () => {
  try {
    //Funcion del SDK de Firebase para cerrar sesión
    await signOut(auth);
    console.log("Sesion cerrada");
  } catch (error) {
    console.error("Error al cerrar sesión: ", error.message);
  }
};

const updateUser = async (nombre, titulo, fechaGraduacion) => {
  try {
    //toma el usuario que esta autenticado actualmente
    const user = auth.currentUser;
    if (!user) throw new Error("No hay usuario autenticado");
    //busca el documento del usuario autenticado, usando su uid
    const userRef = doc(db, "users", user.uid);
    //actualiza los datos
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

const getUserData = async () => {
  try {
    const user = auth.currentUser;
    if (!user) throw new Error("No hay usuario autenticado");

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data(); 
    } else {
      throw new Error("El documento del usuario no existe");
    }
  } catch (error) {
    console.error("Error al obtener datos del usuario:", error.message);
    throw error;
  }
};
export { register, login, logout, updateUser, getUserData };

# 🎓 App de Gestión de Usuarios en React Native + Firebase

Este proyecto fue desarrollado por **Mateo Amaya** y **Rodrigo Hurtado** como parte de una práctica académica. La aplicación permite a los usuarios registrarse, iniciar sesión, ver y editar su información personal como nombre, título universitario y año de graduación. Todo esto se gestiona mediante una interfaz amigable construida con React Native y un backend con Firebase.

---

## 🛠️ Funcionalidades

- Registro de usuario con email y contraseña
- Inicio y cierre de sesión
- Almacenamiento de datos personales en Firebase Firestore
- Edición de nombre, título universitario y año de graduación
- Navegación fluida entre pantallas usando React Navigation
- Estilo personalizado con temática rosada/kawaii 🌸

---

## 🚀 Tecnologías utilizadas

- **React Native** (v19.0.0)
- **Expo** (SDK 53)
- **Firebase** (v12.2.1) – Autenticación y Firestore
- **React Navigation** (v7)
- **React Native Gesture Handler** y **Safe Area Context**
- **dotenv** para variables de entorno

---

## 📦 Dependencias principales

```json
"dependencies": {
  "@react-navigation/native": "^7.1.17",
  "@react-navigation/native-stack": "^7.3.26",
  "expo": "~53.0.22",
  "expo-constants": "^17.1.7",
  "expo-image-picker": "^16.1.4",
  "expo-status-bar": "~2.2.3",
  "firebase": "^12.2.1",
  "react": "19.0.0",
  "react-native": "0.79.6",
  "react-native-dotenv": "^3.4.11",
  "react-native-gesture-handler": "^2.28.0",
  "react-native-safe-area-context": "^5.6.1",
  "react-native-screens": "^4.16.0"
}
```

Configuración inicial

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
```
Instala las dependencias:
```bash
npm install
```

Crea un archivo .env con tus claves de Firebase:
```env
API_KEY=your_api_key
AUTH_DOMAIN=your_auth_domain
PROJECT_ID=your_project_id
STORAGE_BUCKET=your_storage_bucket
MESSAGING_SENDER_ID=your_sender_id
APP_ID=your_app_id
```

Inicia el proyecto con Expo:
```bash
npx expo start
```

## 🧑‍💻 Autores
  - Mateo Amaya
  - Rodrigo Hurtado

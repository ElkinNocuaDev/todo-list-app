# 📱 Aplicación Todo List - Ionic + Angular + Cordova

## 📌 Descripción general

Este proyecto es una aplicación móvil híbrida desarrollada con Ionic Framework + Angular y empaquetada para Android utilizando Apache Cordova.

La aplicación implementa un flujo completo de desarrollo móvil, incluyendo construcción de interfaz, configuración de entorno nativo y generación de artefactos de producción (APK y AAB).

---

## 🚀 Funcionalidades

- Creación de tareas
- Marcado de tareas como completadas
- Eliminación de tareas
- Interfaz responsive adaptada a dispositivos móviles
- Manejo básico de estado de la aplicación

---

## 🏗️ Arquitectura del proyecto

- Frontend: Angular
- Framework móvil: Ionic
- Wrapper nativo: Apache Cordova
- Sistema de build Android: Gradle
- Gestor de paquetes: npm

---

## 📦 Generación de builds Android

### APK de depuración (debug)

Ubicación:
platforms/android/app/build/outputs/apk/debug/app-debug.apk

Uso:
- Pruebas en desarrollo
- Instalación directa en dispositivos Android

---

### APK de producción (release)

Ubicación:
release/android/app-release.apk

Uso:
- Versión firmada lista para instalación
- Entrega final del proyecto

---

### Android App Bundle (AAB)

Ubicación:
platforms/android/app/build/outputs/bundle/release/app-release.aab

Uso:
- Formato optimizado para Google Play Store

---

### Link para descarga APK

Repositorio:
https://github.com/ElkinNocuaDev/todo-list-app/releases/tag/Release_apk

---

## ⚙️ Instalación y ejecución del proyecto

### 1. Instalar dependencias

npm install

### 2. Ejecutar en navegador

ionic serve

### 3. Agregar plataforma Android (Cordova)

ionic cordova platform add android

### 4. Generar APK de depuración

ionic cordova build android

### 5. Generar build de producción (firmado)

cordova build android --release --buildConfig build.json

---

## 🔐 Firma de la aplicación

La generación del APK de producción utiliza un archivo `build.json` para la configuración de firma digital.

⚠️ El archivo keystore no está incluido en el repositorio por razones de seguridad.

---

## 📁 Estructura del proyecto

docs/
 └── screenshots/

release/
 └── android/

src/
platforms/
www/
build.json

---

## 📸 Evidencia visual

Las capturas se encuentran en:
docs/screenshots/

Incluyen:
- Pantalla principal
- Creación de tareas
- Vista móvil

---

## 🧠 Desafíos técnicos

- Configuración de Android SDK en Windows
- Integración Ionic + Cordova
- Resolución de errores Gradle
- Ajustes WebView en Android
- Firma digital de APK release

---

## ⚡ Optimización

- Build de producción Angular (AOT)
- Minificación y optimización Gradle
- Separación debug/release
- Limpieza de artefactos innecesarios

---

## 🔄 Control de versiones

- Feature branches
- main como estable
- merge + rebase
- exclusión de secretos (keystore)

---

## 🍏 iOS

Plataforma configurada pero no compilada por requerir macOS + Xcode.

cordova platform add ios

---

## 📌 Requisitos

- Node.js
- npm
- Ionic CLI
- Cordova
- Android Studio
- JDK 17

---

## 👨‍💻 Autor

Elkin Nocua

---

## 📄 Licencia

Proyecto para evaluación técnica.

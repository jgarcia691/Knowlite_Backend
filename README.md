# Knowlite Backend

## 💡 Idea
Knowlite Backend es el servidor de una plataforma que permite gestionar usuarios, guardar información personalizada y analizar/resumir textos usando la API de Gemini (Google AI). El objetivo es ofrecer un backend robusto y escalable para aplicaciones que requieran autenticación, almacenamiento y procesamiento inteligente de textos.

## 🚀 Tecnologías Usadas
- **Node.js**
- **Express.js**
- **MongoDB** (con Mongoose)
- **dotenv** (variables de entorno)
- **CORS**
- **@google/genai** (integración Gemini)
- **Vercel** (despliegue)

## 📁 Estructura del Proyecto
```
Knowlite_Backend/
│
├── config/
│   └── bd.js                # Configuración de la base de datos
│
├── src/
│   ├── users/               # Módulo de usuarios
│   │   ├── controller.js
│   │   ├── model.js
│   │   ├── routes.js
│   │   └── service.js
│   └── API/                 # Módulo de integración con Gemini
│       ├── controller.js
│       ├── model.js
│       ├── routes.js
│       └── service.js
│
├── .env                     # Variables de entorno
├── .gitignore               # Archivos ignorados por git
├── package.json             # Dependencias y scripts
├── server.js                # Punto de entrada principal
├── vercel.json              # Configuración de despliegue en Vercel
└── README.md                # Este archivo
```

## ⚙️ Instrucciones para Ejecutar
1. **Clona el repositorio:**
   ```
   git clone https://github.com/tu-usuario/Knowlite_Backend.git
   cd Knowlite_Backend
   ```
2. **Instala las dependencias:**
   ```
   npm install
   ```
3. **Configura las variables de entorno:**
   - Crea un archivo `.env` en la raíz con:
     ```
     MONGODB_URI=tu_uri_de_mongodb
     GEMINI_API_KEY=tu_api_key_de_gemini
     ```
4. **Ejecuta el servidor localmente:**
   ```
   node server.js
   ```
5. **El backend estará disponible en:**
   - Local: `http://localhost:3000`
   - Vercel: `https://knowlite-backend.vercel.app`

## 🌟 Funcionalidades Destacadas
- **Gestión de usuarios:** registro, login, actualización y eliminación.
- **Análisis y resumen de textos:** endpoint `/api/resumir` que utiliza Gemini para analizar y resumir textos enviados desde el frontend.
- **Despliegue en Vercel:** fácil de escalar y mantener.

## 📲 Endpoints principales
- `POST   /users/` — Crear usuario
- `GET    /users/` — Listar usuarios
- `GET    /users/email/:correo` — Buscar usuario por email
- `POST   /users/login` — Login de usuario
- `PUT    /users/:id` — Actualizar usuario
- `DELETE /users/:id` — Eliminar usuario
- `POST   /api/resumir` — Analizar y resumir texto usando Gemini

---

Desarrollado por Jose Garcia. ¡Contribuciones y sugerencias son bienvenidas!
